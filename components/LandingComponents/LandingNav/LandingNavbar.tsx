import React from "react";
import StyledLandingNav from "./StyledLandingNavbar";
import { BsMessenger } from "react-icons/bs";
import Logo from "../images/Facebook_Messenger.png";
import Image from "next/image";

type Props = {};

export default function LandingNavbar({}: Props) {
  return (
    <StyledLandingNav>
      <div className="container">
        <Image
          className="logo"
          src={Logo}
          alt="messenger logo"
          height="36"
          width="36"
        />

        <ul className="col_2">
          <li>Features</li>
          <li>Desktop App</li>
          <li>Privacy & Safety</li>
          <li>For Devlopers</li>
        </ul>
      </div>
    </StyledLandingNav>
  );
}
