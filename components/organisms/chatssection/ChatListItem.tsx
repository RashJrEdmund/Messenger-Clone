import Image from "next/image";
import "./ChatsSection.css";
import Moment from "react-moment";

import { useEffect, useState } from "react";
import getFriends from "@/utils/getFriends";
import { useRouter } from "next/navigation";

type Props = { id: any; users: any; userInfo: any };

function ChatListItem({ id, users, userInfo }: Props) {
  const [friends, setFriend] = useState<any>({});
  const router = useRouter();
  const enterChat = () => {
    router.push(`/chat/${id}`);
    console.log(id)
  };

  useEffect(() => {
    if (users.length > 0) {
      getFriends({ users, userInfo }).then((data: any) => setFriend(data));
    }
  }, [userInfo, users]);
  console.log(friends);

  return (
    <div className="chatListItem hoverEffect" onClick={enterChat}>
      <div className="circle">
        <img src={friends?.photoURL} alt="" width={40} height={40} />
      </div>
      <div className="middle">
        <div className="usersname">{friends?.displayname}</div>
        <div className="peepMessage">
          {" "}
          <span className="text_message">Yoo bro</span>・
          <span>
            <Moment fromNow>{friends?.timestamp?.toDate()}</Moment>
          </span>
        </div>
      </div>
      <div className="ending">
        <div className="dot">
          <Image
            src="https://lh3.googleusercontent.com/ogw/AOLn63G9RkxTpNsmhZ7H6fId4yB6Abii8VySuY3epxVs=s32-c-mo"
            alt=""
            width={40}
            height={40}
          />
        </div>
      </div>
    </div>
  );
}

export default ChatListItem;
