'use client'
import ChatArea from "@/components/organisms/chatarea/ChatArea";
import ChatsSection from "@/components/organisms/chatssection/ChatsSection";
import LeftSideBar from "@/components/organisms/leftsidebar/LeftSideBar";


type Props = { id: any };

function Home({ params }: { params: { id: string } }) {

  return (
    <div className="flex">
      <LeftSideBar />
      <ChatsSection />
      <ChatArea  chat_id={params}  />
    </div>
  );
}

export default Home;
