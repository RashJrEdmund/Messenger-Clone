"use client";

import LandingFooter from "@/components/LandingComponents/LandingFooter/LandingFooter";
import LandingNavbar from "@/components/LandingComponents/LandingNav/LandingNavbar";
import LandingMainSection from "@/components/LandingComponents/MainSection/LandingMainSection";
import styled from "@emotion/styled";

const StyledLandingPage = styled.div`
  background-color: #fff;
  color: #000;
  display: flex;
  align-items: center;
  flex-direction: column;
  height: fit-content;
  min-height: 100vh;
  width: 100%;
`;

export default function Home() {
  return (
    <StyledLandingPage>
      <LandingNavbar />
      <LandingMainSection />
      <LandingFooter />
    </StyledLandingPage>
  );
}
