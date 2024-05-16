import ChatDetails from "../components/ChatDetails";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import styles1 from "@/styles/Color.module.css";

const ChatPage = () => {
  const router = useRouter();
  const chatId = useSelector((state) => state.user.chatId); // Access chatId from Redux store
  const { data: session } = useSession();

  const currentUser = session?.user;

  const seenMessages = async () => {
    try {
      await fetch(`/api/chats/seen?chatId=${chatId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          currentUserId: currentUser?.id,
        }),
      });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (currentUser && chatId) seenMessages();
  }, [currentUser, chatId]);

  useEffect(() => {
    // Navigate back if chatId is null with a delay
    if (!chatId) {
      const delay = 2000; // Adjust the delay time in milliseconds (e.g., 2000 for 2 seconds)
      const timeoutId = setTimeout(() => {
        router.push("/signin"); // Adjust the path to navigate back to
      }, delay);
  
      // Clean up the timeout to prevent memory leaks
      return () => clearTimeout(timeoutId);
    }
  }, [chatId, router]);
  
  return (
 <div className={`h-screen bg-blue-2 flex justify-center gap-5 px-2 md:px-10 md:py-3 max-lg:gap-8 ${styles1.customcolor}`}>
     {session?.user&&   <div className="w-2/3 max-lg:w-full">
        <ChatDetails chatId={chatId} />
      </div>}
    </div>
  );
};

export default ChatPage;
