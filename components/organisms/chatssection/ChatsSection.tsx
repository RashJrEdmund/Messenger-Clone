"use client";
import Icon from "@/components/atoms/Icon";
import path from "path";
import ChatListItem from "./ChatListItem";
import "./ChatsSection.css";
import { useEffect, useRef, useState } from "react";
import {
  collection,
  query,
  where,
  getDocs,
  onSnapshot,
  QuerySnapshot,
} from "firebase/firestore";
import { db } from "@/config/firebase";
import AuthGaurd from "@/HOC/AuthGaurd";
import FriendsIn from "./Friend";

function ChatsSection({ userInfo }: any) {
  const [friends, setFriends] = useState<any>([]);
  const [chats, setChats] = useState<any>([]);
  const inputSearch = useRef<any>(null);
  const [searchFriends, setSearchFriends] = useState<any>(false);
  // query chat
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

  console.log("1", chats);

  // query friends
  useEffect(() => {
    async function fetchFriends() {
      const usersRef = collection(db, "users");
      const q = query(usersRef, where("email", "!=", userInfo?.email));
      const querySnaphot = await getDocs(q);
      setFriends(
        querySnaphot.docs.map((doc: any) => ({ ...doc.data(), id: doc.id }))
      );
    }

    fetchFriends();
  }, [userInfo?.email]);

  //search for users
  useEffect(() => {
    const checkIfClickedOutside = (e: any) => {
      if (!inputSearch.current.contains(e.target)) {
        setTimeout(() => {
          setSearchFriends(false);
        }, 3000);
      } else {
        setSearchFriends(true);
      }
    };

    document.addEventListener("mousedown", checkIfClickedOutside);
    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, []);

  return (
    <div className="chatsSetion">
      <div>
        <div className="sectionheader">
          <div className="text">Chats</div>
          <div className="icons">
            <Icon>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path d="M4.5 4.5a3 3 0 00-3 3v9a3 3 0 003 3h8.25a3 3 0 003-3v-9a3 3 0 00-3-3H4.5zM19.94 18.75l-2.69-2.69V7.94l2.69-2.69c.944-.945 2.56-.276 2.56 1.06v11.38c0 1.336-1.616 2.005-2.56 1.06z" />
              </svg>
            </Icon>
            <Icon>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32l8.4-8.4z" />
                <path d="M5.25 5.25a3 3 0 00-3 3v10.5a3 3 0 003 3h10.5a3 3 0 003-3V13.5a.75.75 0 00-1.5 0v5.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5V8.25a1.5 1.5 0 011.5-1.5h5.25a.75.75 0 000-1.5H5.25z" />
              </svg>
            </Icon>
          </div>
        </div>
        <div className="searchMessenger">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path
              fillRule="evenodd"
              d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z"
              clipRule="evenodd"
            />
          </svg>
          <input type="text" placeholder="Search Messenger" ref={inputSearch} />
        </div>
      </div>
      <div className="chatlist">
        {searchFriends ? (
          <>
            {friends.map((friend: any) => (
              <FriendsIn key={friend.uid} friend={friend} userInfo={userInfo} />
            ))}
          </>
        ) : (
          <>
            {chats.map((chat: any) => (
              <ChatListItem
                key={chat.id}
                userInfo={userInfo}
                users={chat.users}
                latestMessage= {chat.latestMessage}
                id={chat.id}
              />
            ))}
          </>
        )}
      </div>
    </div>
  );
}

export default AuthGaurd(ChatsSection);
