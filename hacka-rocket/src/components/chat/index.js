import React, { useState, useEffect } from "react";
import Fade from "react-reveal/Fade";
import TypingIndicator from "../../components/typing-indicator";

import { Container, MessageBubble, Avatar, BubbleContainer } from "./styles";

const Bubble = ({ yourself, children }) => {
  return (
    <BubbleContainer>
      {!yourself ? <Avatar /> : null}
      <MessageBubble yourself={yourself}>{children}</MessageBubble>
    </BubbleContainer>
  );
};

function Chat({ messages, loading }) {
  return (
    <Container>
      {messages.map((message, index) => {
        if (message.yourself) {
          return (
            <Bubble key={index} yourself={message.yourself}>
              <p className="message">{message.text}</p>
            </Bubble>
          );
        }
        return (
          <Fade duration={300} left key={index}>
            <Bubble yourself={message.yourself}>
              <p className="message">{message.text}</p>
            </Bubble>
          </Fade>
        );
      })}
      {loading ? <TypingIndicator /> : null}
    </Container>
  );
}

export default Chat;
