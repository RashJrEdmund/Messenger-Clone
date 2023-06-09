import styled from "@emotion/styled";

const StyledLandingNav = styled.div`
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: fit-content;

  .nav_container {
    width: min(98vw, 1224px);
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: fit-content;
    padding: 20px 5px;
    color: #000;

    .col_2 {
      list-style: none;
      display: flex;
      align-items: center;
      flex-wrap: nowrap;
      justify-content: space-between;
      gap: 20px;
      width: fit-content;
      height: fit-content;
      padding: 0 10px;

      .logo {
        cursor: pointer;
      }

      li {
        font-size: 14px;
        font-weight: 600;
        cursor: pointer;
        position: relative;

        &::after {
          content: " ";
          position: absolute;
          width: calc(100% + 5px);
          height: 3px;
          background-color: transparent;
          border-radius: 3px;
          left: 50%;
          transform: translate(-50%);
          bottom: -7px;
          transition: 0.2s;
        }

        &:hover {
          &::after {
            background-color: #0183ff;
          }
        }
      }
    }
  }

  @media only screen and (max-width: 768px) {
    .nav_container {
      gap: 10px;

      .col_2 {
        li {
          font-size: 12px;

          &:hover {
            &::after {
              background-color: transparent;
            }
          }
        }
      }
    }
  }
`;

export default StyledLandingNav;
