import styled from "@emotion/styled";

const StyledLandingFooter = styled.div`
  background-color: #fff;
  width: 100%;

  .container {
    width: min(98vw, 1224px);
    margin: 10rem auto 2rem;
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: space-between;

    .col_1,
    .col_2 {
      color: #000;
      list-style: none;
      display: flex;
      align-items: center;
      gap: 10px;
    }
  }

  @media only screen and (max-width: 768px) {
    .container {
      display: flex;
      flex-direction: column;
    }
  }
`;

export default StyledLandingFooter;
