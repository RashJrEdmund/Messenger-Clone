"use client";
import AuthGaurd from "@/HOC/AuthGaurd";
import ChatArea from "@/components/organisms/chatarea/ChatArea";
import ChatsSection from "@/components/organisms/chatssection/ChatsSection";
import LeftSideBar from "@/components/organisms/leftsidebar/LeftSideBar";
import { db } from "@/config/firebase";
import {
  collection,
  doc,
  getDoc,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";
import { useEffect, useState } from "react";

type Props = { userInfo: any; params: { params: { id: string } } };

function Home({ params, userInfo }: Props) {
  const [chats, setChats] = useState<any>([]);
  useEffect(() => {
    const chatsRef = collection(db, "chats");
    const q = query(chatsRef, where("users", "array-contains", userInfo.uid));

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      setChats(
        querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );
    });

    
    return unsubscribe;
  }, [userInfo?.uid]);
  console.log(chats, "okay na Rebase");
  return (
    <div className="flex">
      <LeftSideBar />
      <ChatsSection />
      {chats?.map((chat: any) => (
        <ChatArea key={chat.id} chat_id={params} users={chat.users} userInfo={userInfo}/>
      ))}
    </div>
  );
}

export default AuthGaurd(Home);
