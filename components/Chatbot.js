import React, { useState } from "react";
import { Text } from "@chakra-ui/react";
import { Button, Box, Heading } from "@chakra-ui/react";
import axios from "axios";
import { SiChatbot } from "react-icons/si";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  useDisclosure,
  VStack,
  Textarea,
  Divider,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";

const Chatbot = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  const btnRef = React.useRef();
  const fetchChatBotResponse = async (text) => {
    try {
      console.log(text)
      const response = await axios.get(`/api/chatbot/chatbot?text=${text}`);
      return response.data;
    } catch (error) {
      console.error("Error fetching chatbot response:", error);
      return null;
    }
  };

  const handleSendMessage = async () => {
    const newMessage = {
      sender: "user",
      content: message,
    };
    setMessages([...messages, newMessage]);
  
    try {
      const chatBotResponse = await fetchChatBotResponse(message);
  
      if (chatBotResponse && chatBotResponse.message) {
        // Handle specific message from the API
        const newChatBotMessage = {
          sender: "bot",
          content: chatBotResponse.message,
        };
        setMessages((prevMessages) => [...prevMessages, newChatBotMessage]);
      } else if (
        chatBotResponse &&
        chatBotResponse.candidates &&
        chatBotResponse.candidates.length > 0
      ) {
        const newChatBotMessage = {
          sender: "bot",
          content: chatBotResponse.candidates[0].content,
        };
        setMessages((prevMessages) => [...prevMessages, newChatBotMessage]);
      } else if (
        chatBotResponse &&
        chatBotResponse.messages &&
        chatBotResponse.messages.length > 0
      ) {
        const newChatBotMessage = {
          sender: "bot",
          content: chatBotResponse.messages[0].content,
        };
        setMessages((prevMessages) => [...prevMessages, newChatBotMessage]);
      } else {
        console.error("Invalid chatbot response:", chatBotResponse);
      }
    } catch (error) {
      console.error("Error sending message:", error);
    }
  
    setMessage("");
  };
  
  return (
    <>
      <div
     className="bg-gray-400"
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          zIndex: "999",
          padding: "1rem",
          borderRadius: "50%",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Button  className="border border-white text-3xl md:text-1xl"  colorScheme="teal" size="md" onClick={onOpen}>
        <SiChatbot />
        </Button>
        <Drawer
          isOpen={isOpen}
          onClose={onClose}
          finalFocusRef={btnRef}
          placement="right"
          size="sm"
        >
          <DrawerOverlay />
          <DrawerContent borderRadius="lg">
            <DrawerCloseButton />
            <DrawerHeader>TradMate-Bot</DrawerHeader>
            <DrawerBody>
              <VStack spacing="4" alignItems="stretch">
                {messages.map((msg, index) => (
                  <Box
                    key={index}
                    p="2"
                    bg={msg.sender === "user" ? "blue.100" : "gray.100"}
                    borderRadius="lg"
                  >
                    <Text fontSize="sm" color="gray.500">
                      {msg.sender === "user" ? "You" : "TradeMate-Bot"}
                    </Text>
                    <Text fontSize="md" mt="1">
                      {msg.content}
                    </Text>
                  </Box>
                ))}
              </VStack>
              <Divider mt="4" mb="8" />
              <Textarea
              
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    handleSendMessage();
                  }
                }}
                placeholder="Type your message..."
                size="md"
                style={{
                  position: "absolute",
                  bottom: "5px",
                  right: "20px",
                  width: "calc(100% - 40px)",
                  backgroundColor: "#333",
                  color: "#fff",
                  border: "1px solid #555",
                  borderRadius: "5px",
                }}
              />
            </DrawerBody>
            <DrawerFooter>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </div>
    </>
  );
};

export default Chatbot;
