"use client";

import AuthGaurd from "@/HOC/AuthGaurd";
import React from "react";
        
import ChatArea from "@/components/organisms/chatarea/ChatArea";
import ChatsSection from "@/components/organisms/chatssection/ChatsSection";
import LeftSideBar from "@/components/organisms/leftsidebar/LeftSideBar";
import Image from "next/image";

function Home() {
  return <div className="flex">
    <LeftSideBar />
    <ChatsSection />
    <ChatArea />
  </div>;
}

export default AuthGaurd(Chat);
