import React from "react";
import { StyledLandingMainSection } from "./StyledLandingMainSection";
import LoginForm from "./LoginForm";
import ContinueWithFb from "./ContinueWithFb";
import TradeMarks from "./TradeMarks";
import Landing_img from "../images/langing_photo.png";
import Image from "next/image";

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

        <TradeMarks />
      </div>

      <div className="main_col__2">
        <Image
          className="main_img"
          src={Landing_img}
          alt="landing ilustration"
        />
      </div>
    </StyledLandingMainSection>
  );
}
