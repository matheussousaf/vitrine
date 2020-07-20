import styled from "styled-components";

export const Container = styled.div``;

export const Button = styled.div`
  position: relative;

  .heart {
    position: absolute;
    background: url("https://abs.twimg.com/a/1454637594/img/t1/web_heart_animation.png");
    background-position: 0px;
    background-repeat: no-repeat;
    height: 100px;
    width: 100px;
    top: -40px;
    left: -65px;
    pointer-events: none;
  }

  .toggle {
    opacity: 0;
    transform: scale(3);
    position: absolute;
    z-index: 20;
    margin-left: -20px;
    cursor: pointer;
    &:checked + .heart {
      animation: heartAnimate 0.8s steps(28) forwards;
    }
  }

  @keyframes heartAnimate {
    100% {
      background-position: -2800px;
    }
  }
`;
