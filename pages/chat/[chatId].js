

import ChatDetails from "../../components/ChatDetails"

import { useRouter } from "next/router";
import { useSession } from "next-auth/react"
import {useEffect, useState } from "react"; 

import styles1 from "@/styles/Color.module.css";
const ChatPage = () => {
  const router = useRouter();
  const chatId = router.query.chatId;

  
  const currentUser = []

  const seenMessages = async () => {
    try {
      await fetch (`/api/chats/seen?chatId=${chatId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          currentUserId: currentUser._id
        })
      })
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    if (currentUser && chatId) seenMessages()
  }, [currentUser, chatId])

  return (
    <div className={`h-screen bg-blue-2 flex justify-center gap-5 px-2 md:px-10 md:py-3 max-lg:gap-8  ${styles1.customcolor}`}>
    
      <div className="w-2/3 max-lg:w-full"><ChatDetails chatId={chatId}/></div>
    </div>
  )
}

export default ChatPage