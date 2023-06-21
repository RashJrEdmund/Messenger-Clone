import React from "react";
import { signInWithPopup } from "firebase/auth";
import { auth, facebookProvider } from "@/config/firebase";
import { useRouter } from "next/navigation";
import { SignButton } from "@/components/atoms/Atoms";

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
    <SignButton onClick={signInWithFacebook}>Continue with Facebook</SignButton>
  );
}
