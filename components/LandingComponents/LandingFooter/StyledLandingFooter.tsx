import styled from "@emotion/styled";

const StyledLandingFooter = styled.div`
  background-color: #fff;
  margin: 7rem auto 0;
  padding: 12px 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  .footer_container {
    width: min(96vw, 1224px);
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: space-between;
    gap: 20px;

    .col_1,
    .col_2 {
      color: #000;
      list-style: none;
      display: flex;
      align-items: center;
      gap: 10px;
      font-weight: 400;
      font-size: 14px;

      li.copyright {
        font-weight: 500;
        font-size: 16px;
      }
    }
  }

  @media only screen and (max-width: 1040px) {
    .footer_container {
      display: flex;
      flex-direction: column;
    }
  }
`;

export default StyledLandingFooter;
