import React from "react";
import StyledLandingFooter from "./StyledLandingFooter";

type Props = {};

function LanguageSelect() {
  const Languages: string[] = [
    "English",
    "French",
    "German",
    "Portuguese",
  ].sort((a: any, b: any) => a - b);

  return (
    <select style={{ color: "gray" }}>
      {Languages.map((lang) => (
        <option key={lang} value={lang}>
          {lang}
        </option>
      ))}
    </select>
  );
}

export default function LandingFooter({}: Props) {
  return (
    <StyledLandingFooter>
      <div className="container">
        <ul className="col_1">
          <li>© Meta {new Date().getFullYear()}</li>
          <li>
            The Apple and Google Play logos are trademaarks of their respective
            owners.
          </li>
        </ul>

        <ul className="col_2">
          <li>Privacy Policy</li>
          <li>Cookie Policy</li>
          <li>Terms</li>
          <LanguageSelect />
          <li>from Meta</li>
        </ul>
      </div>
    </StyledLandingFooter>
  );
}
