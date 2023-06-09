import styled from "@emotion/styled";

export const StyledLandingMainSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: min(96vw, 1224px);
  height: fit-content;
  min-height: 500px;
  gap: 50px;
  margin: 2rem 0 0;

  .main_col__1 {
    width: min(100%, 440px);

    h1 {
      background-image: linear-gradient(15deg, #4d67ff, #fe5b87);
      background-clip: text;
      color: transparent;
      font-weight: 1000;
      font-size: max(6vw, 20px);
    }

    p {
      color: #616161;
    }
  }

  .main_col__2 {
    width: min(100%, 440px);
    height: 500px;
    display: flex;

    .main_img {
      height: 500px;
      width: 600px;
      width: 100%;
      align-self: flex-end;
    }
  }

  @media only screen and (max-width: 1040px) {
    flex-direction: column;
    width: min(96vw, 500px);
    min-height: 500px;
    gap: 90px;

    .main_col__1 {
      width: min(100%, 440px);
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;

      h1 {
        font-size: max(8vw, 30px);
      }

      p {
        font-size: 14px;
      }
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
      cursor: pointer;
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
