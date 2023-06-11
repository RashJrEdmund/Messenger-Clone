import styled from "@emotion/styled";
import React from "react";
import { signInWithPopup } from "firebase/auth";
import { auth, facebookProvider } from "@/config/firebase";
import { useRouter } from "next/navigation";

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
      .then((res) => {
        router.push("/chat");
        console.log("this res", res);
      })
      .catch((er) => console.warn(er));
  };

  return (
    <StyledBtn onClick={signInWithFacebook}>Continue with Facebook</StyledBtn>
  );
}