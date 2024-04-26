

import React, { Component } from "react";
import { useEffect, useState } from "react";
import styles from "@/styles/Color.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";

import Link from "next/link";
export default function course() {

  

  const router = useRouter();
  return (
    <div className={` relative ${styles.customcolor}`}>
      <section className="pb-32 text-gray-800">
        
                          <Link
                            href={`chat/[chatId]`}
                            as={`chat/662c1fb776c247c4abe6f6f9`} 
                            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full"
                          >
                            Start chat
                          </Link>
                      
      </section>
    </div>
  );
}
