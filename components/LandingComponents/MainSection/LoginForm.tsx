import React, { ReactNode } from "react";
import { StyledLoginForm } from "./StyledLandingMainSection";
import {
  signInWithPhoneNumber,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../../config/firebase";
import { useRouter } from "next/navigation";

type Props = {};

export default function LoginForm({}: Props) {
  type formType = {
    emailPhone: string;
    password: string;
  };

  const [formData, setFormData] = React.useState<formType>({
    emailPhone: "",
    password: "",
  });

  const [loader, setLoader] = React.useState<{
    loading: boolean;
    message: string;
  }>({ loading: false, message: "" });

  const router = useRouter();

  const loginWithEmailPassword = async () => {
    const { emailPhone, password } = formData;

    await signInWithEmailAndPassword(auth, emailPhone, password)
      .then(({ user }) => {
        console.log("email password signup user", user);
        router.push("/chat");
      })
      .catch((e) => console.log("this error", e))
      .finally(() => {
        setLoader({ loading: false, message: "could_not_login" });
      });
  };

  const loginWithPhonePassword = async () => {
    const { emailPhone, password } = formData;
    console.log("this phone");

    // await signInWithPhoneNumber(auth, emailPhone, password).finally(() => {
    //   if (setLoader) setLoader({ loading: false, message: "could_not_login" });
    // });
  };

  const handleSubmit: (e: any) => void = async (e) => {
    e.preventDefault();
    if (!formData.emailPhone.trim() || !formData.password.trim()) {
      return;
    }

    const emailReg = /\w{2}[@]\w{3,5}[.]/;
    const phoneReg = /\d{2}/;

    if (emailReg.test(formData.emailPhone)) await loginWithEmailPassword();
    else if (phoneReg.test(formData.emailPhone)) await loginWithPhonePassword();
  };

  return (
    <StyledLoginForm onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Email or phone number"
        onChange={({ target: { value } }) =>
          setFormData((prev: formType) => ({ ...prev, emailPhone: value }))
        }
      />

      <input
        type="password"
        placeholder="Password"
        onChange={({ target: { value } }) =>
          setFormData((prev: formType) => ({ ...prev, password: value }))
        }
      />

      <div className="action_btns">
        <button type="submit">Log in</button>

        <a>Forgot your password ?</a>
      </div>

      <label htmlFor="keep_me_signed">
        <input type="checkbox" id="keep_me_signed" /> Keep me signed in
      </label>
    </StyledLoginForm>
  );
}
