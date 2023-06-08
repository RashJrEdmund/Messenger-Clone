import React, { ReactNode } from "react";
import { StyledLoginForm } from "./StyledLandingMainSection";

type Props = {};

export default function LoginForm({}: Props) {
  type formType = {
    email: string;
    password: string;
  };

  const [formData, setFormData] = React.useState<formType>({
    email: "",
    password: "",
  });

  const handleSubmit: (e: any) => void = (e) => {
    e.preventDefault();
    if (!formData.email.trim() || !formData.password.trim()) {
      return;
    }
  };

  return (
    <StyledLoginForm onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Email or phone number"
        onChange={({ target: { value } }) =>
          setFormData((prev: formType) => ({ ...prev, email: value }))
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
