import Image from "next/image";
import "./ChatsSection.css";
import Moment from "react-moment";
import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import { db } from "@/config/firebase";
import { useEffect, useState } from "react";
import getFriends from "@/utils/getFriends";

type Props = {  userInfo: any; friend: any };

function FriendsIn({  userInfo, friend }: Props) {

  const [friends, setFriend] = useState<any>({});

  

  const creatChat = async (id: any) => {
    const chatRef = collection(db, "chats");
    const q = query(chatRef, where("users", "array-contains", userInfo.uid));
    const querySnapshot = await getDocs(q);
    const chatAlreadyExist = (friend_id: any) =>
      !!querySnapshot?.docs.find(
        chat =>
          chat.data().users.find((user: any) => user === friend_id)?.length > 0
      );
    console.log("created");
    if (!chatAlreadyExist(id)) {
      addDoc(chatRef, { users: [userInfo.uid, friend.id] });
    }else{console.log("already exist")}
  };


  return (
    <div
      className="chatListItem hoverEffect"
      onClick={() => creatChat(userInfo.uid)}
    >
      <div className="circle">
        <img src={friend?.photoURL} alt="" width={40} height={40} />
      </div>
      <div className="middle">
        <div className="usersname">{friend?.displayname}</div>
        <div className="peepMessage">
          {" "}
          <span className="text_message">Yoo bro</span>・
          <span>
            <Moment fromNow>{friend?.timestamp?.toDate()}</Moment>
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

export default FriendsIn;
