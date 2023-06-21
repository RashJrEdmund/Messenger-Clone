"use client";

import { SignButton } from "@/components/atoms/Atoms";
import styled from "@emotion/styled";
import { auth, googleProvider } from "../../../config/firebase";
import { signInWithPopup } from "firebase/auth";

import { useRouter } from "next/navigation";
import { FcGoogle } from "react-icons/fc";

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
      .then(() => router.push("/chat"))
      .catch((er) => console.log(er));
  };

  return (
    <SignButton bg="#f5f5f5" color="#000" onClick={googleSignup}>
      <StyledGoogle />
      GoogleSign
    </SignButton>
  );
}
