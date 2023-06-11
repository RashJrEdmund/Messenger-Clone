import React from "react";
import { StyledLandingMainSection } from "./StyledLandingMainSection";
import LoginForm from "./LoginForm";
import Image from "next/image";
import Ilustration from "../images/landing_image.webp";
import ContinueWithFb from "./ContinueWithFb";

type Props = {};

export default function LandingMainSection({}: Props) {
  const [loginWithForm, setLoginWithForm] = React.useState<boolean>(false);

  return (
    <StyledLandingMainSection>
      <div className="main_col__1">
        <h1>Hang out anytime, anywhere</h1>

        <p>
          Messenger makes it easy and fun to stay close to your favorite people
        </p>

        {loginWithForm ? <LoginForm /> : <ContinueWithFb />}

        <p
          onClick={() => setLoginWithForm((prev) => !prev)}
          className="toggle_logtype"
        >
          {loginWithForm ? "Continue with Facebook" : "switch Account"}
        </p>
      </div>

      <div className="main_col__2">
        <Image
          className="main_img"
          src={Ilustration}
          alt="landing ilustration"
        />
      </div>
    </StyledLandingMainSection>
  );
}
