import React, { useRef } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "@/config/firebase";
import { Overlay } from "@/components/atoms/Atoms";
import { StyledForgotPassword } from "./StyledLandingMainSection";

type Props = { email: string; setResetPassword: (val: boolean) => void };

export default function ForgotPassword({ email, setResetPassword }: Props) {
  const [formEmail, setFormEmail] = React.useState(email);
  const [formError, setFormError] = React.useState<boolean>(false);

  const handleForgotpassword = async () => {
    if (!formEmail.trim()) {
      setFormError(true);
      return;
    }
    await sendPasswordResetEmail(auth, formEmail)
      .then((res) => console.log("this reset res", res))
      .catch((err) => console.log("this reset err", err));
  };

  return (
    <>
      <Overlay onClick={() => setResetPassword(false)} />

      <StyledForgotPassword onSubmit={handleForgotpassword}>
        <input
          type="email"
          placeholder="email to reset password"
          required
          value={formEmail}
          style={{ border: formError ? "1px solid red" : "unset" }}
          onChange={({ target: { value } }) => setFormEmail(value)}
        />
        <button type="submit">reset my password</button>
      </StyledForgotPassword>
    </>
  );
}
