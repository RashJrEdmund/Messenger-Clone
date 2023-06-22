
import LeftSideBar from "../../components/organisms/leftsidebar/LeftSideBar";
import ChatsSection from "../../components/organisms/chatssection/ChatsSection";

import AuthGaurd from "@/HOC/AuthGaurd";
import ChatArea from "../../components/organisms/chatarea/ChatArea";

type Props = { chat: any; id:any };

function Home({ chat, id }: Props) {
  return (
    <div className="flex">
      <LeftSideBar />
      <ChatsSection />
      <ChatArea chat={chat} chat_id={id} />
    </div>
  );
}

export default Home;

