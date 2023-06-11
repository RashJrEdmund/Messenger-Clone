import styled from "@emotion/styled";

interface StyledProps {
  index?: string;
}

export const Overlay = styled.div<StyledProps>`
  background-color: #00000089;
  opacity: 0.7;
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  z-index: ${({ index = "3" }) => index};
  cursor: default;
`;
