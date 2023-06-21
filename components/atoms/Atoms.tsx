import styled from "@emotion/styled";

interface StyledProps {
  index?: string;
  bg?: string;
  color?: string;
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

export const SignButton = styled.button<StyledProps>`
  background-color: ${({ bg = " #0b7cff" }) => bg};
  color: ${({ color = "#fff" }) => color};
  padding: 10px 20px;
  border-radius: 25px;
  margin: 20px 0 20px;
  transition: 0.2s;
  white-space: nowrap;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  &:hover {
    background-color: #5a59ff;
  }
  @media only screen and (max-width: 650px) {
    width: 100%;
  }
`;
