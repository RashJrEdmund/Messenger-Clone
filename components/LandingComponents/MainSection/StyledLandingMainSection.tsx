import styled from "@emotion/styled";

export const StyledLandingMainSection = styled.div`
  display: flex;
  width: min(98vw, 1224px);
  height: fit-content;
  min-height: 500px;

  .col_1 {
    h1 {
      font-weight: 1000;
      font-size: max(8vw, 30px);
    }
  }
`;

export const StyledLoginForm = styled.form`
  width: min(100%, 300px);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 15px 0;
  margin: 1.4rem 0;
  border: 1px solid #0183ff;

  [type="text"],
  [type="password"] {
    height: 40px;
    width: 100%;
    padding: 5px;
    background-color: #e0e4e5e9;
    border-radius: 10px;
    margin: 0 0 10px;

    &::placeholder {
      color: gray;
    }
  }

  .action_btns {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    gap: 10px;
    flex-wrap: nowrap;

    button {
      background-color: #0183ff;
      color: #fff;
      padding: 10px 15px;
      border-radius: 20px;
      font-weight: 600;
    }

    a {
      text-decoration: underline;
      font-weight: 500;
      color: #0183ff;
    }
  }

  label {
    margin: 10px 0;
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
    gap: 10px;
    width: fit-content;
    padding: 2px;
  }
`;
