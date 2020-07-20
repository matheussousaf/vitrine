import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  position: absolute;
  margin-top: 20px;
  left: 40px;
  align-items: center;
  justify-content: start;
`;

export const Content = styled.div`
  background-color: #f3d6c1;
  width: auto;
  border-radius: 50px;
  padding: 10px;
  display: table;
  margin: 0 auto;
  position: relative;
  -webkit-animation: 2s bulge infinite ease-out;
  animation: 2s bulge infinite ease-out;
  &:before,
  &:after {
    content: "";
    position: absolute;
    bottom: -1px;
    left: 0px;
    height: 7px;
    width: 7px;
    border-radius: 50%;
    background-color: #f3d6c1;
  }
  &:after {
    height: 3px;
    width: 3px;
    left: -3px;
    bottom: -3px;
  }
  & span {
    height: 5px;
    width: 5px;
    float: left;
    margin: 0 1px;
    background-color: #eb9f67;
    display: block;
    border-radius: 50%;
    opacity: 0.4;
  }
  & span:nth-of-type(1) {
    -webkit-animation: 1s blink infinite 0.3333s;
    animation: 1s blink infinite 0.3333s;
  }
  & span:nth-of-type(2) {
    -webkit-animation: 1s blink infinite 0.6666s;
    animation: 1s blink infinite 0.6666s;
  }
  & span:nth-of-type(3) {
    -webkit-animation: 1s blink infinite 0.9999s;
    animation: 1s blink infinite 0.9999s;
  }

  @-webkit-keyframes blink {
    50% {
      opacity: 1;
    }
  }

  @keyframes blink {
    50% {
      opacity: 1;
    }
  }
  @-webkit-keyframes bulge {
    50% {
      -webkit-transform: scale(1.05);
      transform: scale(1.05);
    }
  }
  @keyframes bulge {
    50% {
      -webkit-transform: scale(1.05);
      transform: scale(1.05);
    }
  }
`;
