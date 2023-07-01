import React from "react";
import { signInWithPopup } from "firebase/auth";
import { auth, db, facebookProvider } from "@/config/firebase";
import { useRouter } from "next/navigation";
import styled from "@emotion/styled";
import { SignButton } from "@/components/atoms/Atoms";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import styled from "@emotion/styled";

const StyledBtn = styled.button`
  background-color: #0b7cff;
  color: #fff;
  padding: 10px 20px;
  border-radius: 25px;
  margin: 20px 0 20px;
  transition: 0.2s;
  white-space: nowrap;

  &:hover {
    background-color: #5a59ff;
  }
`;

type Props = {};

export default function ContinueWithFb({}: Props) {
  const router = useRouter();

  const signInWithFacebook = () => {
    signInWithPopup(auth, facebookProvider)
      .then(async ({ user }) => {
        const currUser = {
          uid: user.uid,
          email: user.email,
          displayname: user.displayName,
          timeStamp: serverTimestamp(),
          photoURL: user.photoURL,
          emailVerified: user.emailVerified /* boolean */,
          // ...user,
        };
        await setDoc(doc(db, "users", user.uid), currUser);
        router.push("/chat/id");
        console.log("this res", { user });
      })
      .catch((er) => console.warn(er));
  };

  return (
    <SignButton onClick={signInWithFacebook}>Continue with Facebook</SignButton>
  );
}
