import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background: #f1f1f1;
  padding: 12vh 10px;
`;

export const BubbleContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const MessageBubble = styled.div`
  min-width: 100px;
  max-width: 70%;
  border-radius: ${(props) =>
    props.yourself ? "15px 15px 0 15px" : "15px 15px 15px 0"};
  margin: ${(props) =>
    props.yourself ? "10px 0 10px auto" : "10px auto 10px 0"};
  background: ${(props) => (props.yourself ? "#fff" : "#fcddc7")};

  & .message {
    padding: 10px;
    color: #555;
    text-align: left;
    padding: 15px 15px 30px 15px;
    white-space: pre-line;
  }
`;

export const Avatar = styled.div`
  width: 50px;
  height: 50px;
  background: #d4d4d4;
  border-radius: 50%;
  margin-right: 15px;
`;
