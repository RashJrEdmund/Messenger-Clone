<<<<<<< HEAD
import ChatArea from "@/components/organisms/chatarea/ChatArea";
import ChatsSection from "@/components/organisms/chatssection/ChatsSection";
import LeftSideBar from "@/components/organisms/leftsidebar/LeftSideBar";
import Image from "next/image";

export default function Home() {
  return <div className="flex">
    <LeftSideBar />
    <ChatsSection />
    <ChatArea />
  </div>;
}
=======
import React from 'react'

type Props = {}

export default function Chat({}: Props) {
  return (
    <div>Chat page</div>
  )
}
>>>>>>> 188eb372cf2b8e2425e6dbc263b110b170869e47
