"use client";

import { SignButton } from "@/components/atoms/Atoms";
import styled from "@emotion/styled";
import { auth, db, googleProvider } from "../../../config/firebase";
import { signInWithPopup } from "firebase/auth";

import { useRouter } from "next/navigation";
import { FcGoogle } from "react-icons/fc";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";

const StyledGoogle = styled(FcGoogle)`
  font-size: 25px;
  padding: 0;
  margin: 0;
`;

type Props = {};

export default function GoogleSign({}: Props) {
  const router = useRouter();
  const googleSignup = () => {
    signInWithPopup(auth, googleProvider)
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
      })
      .catch((er) => console.log(er));
  };

  return (
    <SignButton bg="#f5f5f5" color="#000" onClick={googleSignup}>
      <StyledGoogle />
      Continue with Google
    </SignButton>
  );
}
