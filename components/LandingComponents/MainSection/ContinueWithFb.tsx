import styled from "@emotion/styled";
import React from "react";
const StyledBtn = styled.button`
  background-color: #0b7cff;
  color: #fff;
  padding: 10px 20px;
  border-radius: 25px;
  margin: 20px 0 20px;
  transition: 0.2s;
  white-space: nowrap;

  &:hover {
    background-color: #5a59ff;
  }
`;

type Props = {};

export default function ContinueWithFb({}: Props) {
  return <StyledBtn>Continue with Facebook</StyledBtn>;
}
