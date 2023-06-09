import styled from "@emotion/styled";
import React from "react";
import { BsApple, BsMicrosoft } from "react-icons/bs";

const StyledTradeMarks = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: min(100%, 300px);
  margin: 2rem 0 0;

  .trademark_col1,
  .trademark_col2 {
    background-color: #000;
    color: #fff;
    display: flex;
    align-items: center;
    gap: 7px;
    padding: 5px 10px;
    border-radius: 7px;

    &.trademark_col1 {
      margin: 0 12px 0 0;
    }

    .span {
      display: flex;
      flex-direction: column;
      align-items: flex-start;

      h6 {
        font-weight: 300;
        font-size: 12px;
      }

      h2 {
        font-weight: 500;
        font-size: 15px;
      }
    }
  }
`;

const StyledApple = styled(BsApple)`
  font-size: 27px;
`;

const StyledMiscrosoft = styled(BsMicrosoft)`
  font-size: 27px;
`;

type Props = {};

export default function TradeMarks({}: Props) {
  return (
    <StyledTradeMarks>
      <div className="trademark_col1">
        <StyledApple />
        <div className="span">
          <h6>Download on the</h6>
          <h2>App Store</h2>
        </div>
      </div>

      <div className="trademark_col2">
        <StyledMiscrosoft />
        <div className="span">
          <h6>Get it from</h6>
          <h2>Microsoft</h2>
        </div>
      </div>
    </StyledTradeMarks>
  );
}
