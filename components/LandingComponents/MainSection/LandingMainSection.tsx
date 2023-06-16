import React from "react";
import { StyledLandingMainSection } from "./StyledLandingMainSection";
import LoginForm from "./LoginForm";
import ContinueWithFb from "./ContinueWithFb";
import TradeMarks from "./TradeMarks";

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
        <img
          className="main_img"
          src="https://scontent-lhr8-1.xx.fbcdn.net/v/t39.8562-6/120973513_338186077283942_8148888802958728934_n.png?_nc_cat=1&ccb=1-7&_nc_sid=6825c5&_nc_ohc=eCxmCgidiuIAX_HuSkw&_nc_ht=scontent-lhr8-1.xx&oh=00_AfBFrOr-q8O_cz66YG6EMzN0JxmPTB-cQb6tJ_rzxVMTEQ&oe=648B4567"
          alt="landing ilustration"
        />
      </div>
    </StyledLandingMainSection>
  );
}
