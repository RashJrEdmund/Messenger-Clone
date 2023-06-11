import styled from "@emotion/styled";
import React from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "@/config/firebase";

const Overlay = styled.div`
  background-color: #00000089;
  opacity: 0.7;
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  z-index: 3;
  cursor: default;
`;

const StyledForgotPassword = styled.form`
  background-color: #fff;
  padding: 20px 27px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 5;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: min(97vw, 500px);

  input {
    background-color: #e0e4e5e9;
    width: 100%;
    height: 50px;
    border: none;
    border-radius: 10px;
    padding: 10px;
    margin: 0 0 20px;
  }

  button {
    background-color: #0b7cfe;
    color: #fff;
    width: 100%;
    padding: 10px 17px;
    border-radius: 10px;
    transition: 0.2s;

    &:hover {
      background-color: #5a59ff;
    }
  }
`;

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
