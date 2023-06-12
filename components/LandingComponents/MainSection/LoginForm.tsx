import React, { ReactNode, useRef } from "react";
import { StyledLoginForm } from "./StyledLandingMainSection";
import {
  signInWithPhoneNumber,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../../config/firebase";
import { useRouter } from "next/navigation";
import ForgotPassword from "./ForgotPassword";

type Props = {};

export default function LoginForm({}: Props) {
  type formType = {
    emailPhone: string;
    password: string;
  };

  type loadType = {
    loading: boolean;
    message: string;
  };

  type formErrorType = {
    emailPhone: boolean;
    password: boolean;
  };

  const [formData, setFormData] = React.useState<formType>({
    emailPhone: "",
    password: "",
  });

  const [loader, setLoader] = React.useState<loadType>({
    loading: false,
    message: "",
  });

  const [formError, setFormError] = React.useState<formErrorType>({
    emailPhone: false,
    password: false,
  });

  const [resetPassword, setResetPassword] = React.useState<boolean>(false);

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

  const validateForm: () => boolean = () => {
    if (
      !formData.emailPhone.trim() ||
      !formData.password.trim() ||
      formData.password.length < 6
    ) {
      if (!formData.emailPhone.trim() && !formData.password.trim()) {
        setFormError({ emailPhone: true, password: true });
      } else if (formData.password.length < 6 || !formData.password.trim()) {
        setFormError((prev) => ({ ...prev, password: true }));
      }

      return false;
    }

    return true;
  };

  const handleSubmit: (e: any) => void = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    if (formData.password.length < 6 || !formData.password.trim()) {
      setFormError((prev) => ({ ...prev, password: true }));
      return;
    }

    const emailReg = /\w{2}[@]\w{3,15}[.]/;
    const phoneReg = /\d{2}/;

    if (emailReg.test(formData.emailPhone)) await loginWithEmailPassword();
    else if (phoneReg.test(formData.emailPhone)) await loginWithPhonePassword();
  };

  // handling form inuts

  const handlePasswordField = ({ target: { value } }: any) => {
    setFormData((prev: formType) => ({ ...prev, password: value }));
    setFormError((prev) => ({ ...prev, password: false }));
  };

  const handleEmailPhoneField = ({ target: { value } }: any) => {
    setFormData((prev: formType) => ({ ...prev, emailPhone: value }));
    setFormError((prev) => ({ ...prev, emailPhone: false }));
  };

  const toggleForgotPass = () => {
    const emailReg = /\w{2}[@]\w{3,15}[.]/;
    if (!emailReg.test(formData.emailPhone))
      setFormData({ emailPhone: "", password: "" });

    setResetPassword(true);
  };

  return (
    <StyledLoginForm onSubmit={handleSubmit}>
      {resetPassword && (
        <ForgotPassword
          email={formData.emailPhone}
          setResetPassword={setResetPassword}
        />
      )}

      <input
        type="text"
        placeholder="Email or phone number"
        value={formData.emailPhone}
        style={{ border: formError.emailPhone ? "1px solid red" : "none" }}
        onChange={handleEmailPhoneField}
      />

      <input
        type="password"
        placeholder="Password"
        minLength={6}
        value={formData.password}
        style={{ border: formError.password ? "1px solid red" : "none" }}
        onChange={handlePasswordField}
      />

      <div className="action_btns">
        <button type="submit">Log in</button>

        <a onClick={toggleForgotPass}>Forgot your password ?</a>
      </div>

      <label htmlFor="keep_me_signed">
        <input type="checkbox" id="keep_me_signed" /> Keep me signed in
      </label>
    </StyledLoginForm>
  );
}
