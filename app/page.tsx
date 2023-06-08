import ChatsSection from "@/components/organisms/chatssection/ChatsSection";
import LeftSideBar from "@/components/organisms/leftsidebar/LeftSideBar";
import Image from "next/image";

export default function Home() {
  return <div className="flex">
    <LeftSideBar />
    <ChatsSection />
  </div>;
}
