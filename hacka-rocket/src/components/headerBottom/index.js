import React from "react";
import { useHistory, useRouteMatch } from "react-router-dom";
import { Container, Content, Option } from "./styles";

const HeaderBottom = () => {
  const history = useHistory();
  const router = useRouteMatch();

  return (
    <Container>
      <Content>
        <ul>
          <Option
            isActivity={router.url === "/favorites"}
            onClick={() => history.push("/favorites")}
          >
            <svg
              width="29"
              height="27"
              viewBox="0 0 29 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0)">
                <path
                  d="M20.8963 0C18.1479 0 15.6645 1.41049 14.5094 3.60753C13.3531 1.41049 10.8391 0 8.09073 0C3.79631 0 -1.96295 3.39071 0.65939 12.6425C3.65618 21.6833 14.5082 27.0023 14.5082 27C14.5082 27.0023 25.345 21.6867 28.3417 12.6425C30.9641 3.39071 25.1895 0 20.8963 0Z"
                  fill={router.url === "/favorites" ? "#FF6900" : "#CECECE"}
                />
              </g>
              <defs>
                <clipPath id="clip0">
                  <rect width="29" height="27" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </Option>
          <Option
            onClick={() => history.push("/")}
            isActivity={router.url === "/"}
          >
            <svg
              width="30"
              height="27"
              viewBox="0 0 30 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M28.3333 0H1.66667V3.375H28.3333V0ZM30 16.875V13.5L28.3333 5.0625H1.66667L0 13.5V16.875H1.66667V27H18.3333V16.875H25V27H28.3333V16.875H30ZM15 23.625H5V16.875H15V23.625Z"
                fill={router.url === "/" ? "#FF6900" : "#CECECE"}
              />
            </svg>
          </Option>
          <Option onClick={() => history.push("/cart")}>
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 24C7.3425 24 6.015 25.3425 6.015 27C6.015 28.6575 7.3425 30 9 30C10.6575 30 12 28.6575 12 27C12 25.3425 10.6575 24 9 24ZM0 0V3H3L8.3925 14.3775L6.3675 18.0525C6.135 18.4875 6 18.975 6 19.5C6 21.1575 7.3425 22.5 9 22.5H27V19.5H9.6375C9.4275 19.5 9.2625 19.335 9.2625 19.125C9.2625 19.0575 9.2775 18.9975 9.3075 18.945L10.65 16.5H21.825C22.95 16.5 23.9325 15.8775 24.45 14.955L29.8125 5.22C29.9325 5.01 30 4.7625 30 4.5C30 3.6675 29.325 3 28.5 3H6.3225L4.8975 0H0ZM24 24C22.3425 24 21.015 25.3425 21.015 27C21.015 28.6575 22.3425 30 24 30C25.6575 30 27 28.6575 27 27C27 25.3425 25.6575 24 24 24Z"
                fill="#CECECE"
              />
            </svg>
          </Option>
        </ul>
      </Content>
    </Container>
  );
};
export default HeaderBottom;
