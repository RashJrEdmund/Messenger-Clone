import React from "react";
import { StyledLandingMainSection } from "./StyledLandingMainSection";
import LoginForm from "./LoginForm";
import Image from "next/image";
import Ilustration from "../images/Facebook_Messenger.png";

type Props = {};

export default function LandingMainSection({}: Props) {
  return (
    <StyledLandingMainSection>
      <div className="col_1">
        <h1>Hang out anytime, anywhere</h1>

        <p>
          Messenger makes it easy and fun to stay close to your favorite people
        </p>

        <LoginForm />
      </div>

      <div className="col_2">
        <Image
          src={Ilustration}
          alt="landing ilustration"
          height="300"
          width="100"
        />
      </div>
    </StyledLandingMainSection>
  );
}
