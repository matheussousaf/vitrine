import React, { useEffect, useState } from "react";
import { Send } from "@styled-icons/boxicons-regular/Send";
import Chat from "../../components/chat";

import { Container, TextbarContainer, IconContainer } from "./styles";
import ChatHeader from "../../components/chatHeader";

function Register() {
  const [messages, setMessages] = useState([]);
  const [currentMessage, setCurrentMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [userMessageCount, setUserMessageCount] = useState(0);
  const [data, setData] = useState({
    name: "",
    password: "",
    email: "",
    urlName: "",
    type: "",
  });

  function sleep(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
  }

  async function sendBotMessage(message, time) {
    setLoading(true);
    await sleep(time);
    setLoading(false);

    setMessages((oldMessages) => [
      ...oldMessages,
      { text: message, yourself: false },
    ]);
  }

  async function firstStep() {
    try {
      await sendBotMessage(
        "Oi! Bem vindo à vitrine, meu nome é VitriBot e serei o seu guia durante o processo de cadastro.",
        1000
      );

      await sleep(1000);

      await sendBotMessage("Qual o seu nome?", 500);
    } catch (e) {
      console.log("Erro", e);
    }
  }

  async function secondStep() {
    try {
      await sendBotMessage("Beleza! Agora eu preciso do seu e-mail!", 1000);
    } catch (e) {
      console.log("Erro", e);
    }
  }

  async function thirdStep() {
    try {
      await sendBotMessage(
        "Agora defina uma senha! Fica tranquilo, não vou contar pra ninguém.",
        1000
      );
    } catch (e) {
      console.log("Erro", e);
    }
  }

  async function fourthStep() {
    try {
      await sendBotMessage(
        "Agora você só precisa me dizer qual o nome da sua loja! Exemplo: viitrine.com/LojaDoZe",
        1000
      );
    } catch (e) {
      console.log("Erro", e);
    }
  }

  useEffect(() => {
    if (userMessageCount === 1) {
      secondStep();
    } else if (userMessageCount === 2) {
      thirdStep();
    } else if (userMessageCount === 3) {
      fourthStep();
    }
  }, [userMessageCount]);

  function sendMessage(message) {
    setMessages((oldMessages) => [
      ...oldMessages,
      { text: message, yourself: true },
    ]);
  }

  function handleChange(e) {
    if (e.target.value !== "\n") {
      setCurrentMessage(e.target.value);
    }
  }

  function handleSend(e) {
    if (e.keyCode === 13) {
      sendMessage(currentMessage);

      if (userMessageCount === 0) {
        setData({ ...data, name: currentMessage });
      } else if (userMessageCount === 1) {
        setData({ ...data, email: currentMessage });
      } else if (userMessageCount === 2) {
        setData({ ...data, password: currentMessage });
      } else if (userMessageCount === 3) {
        setData({ ...data, urlName: currentMessage });
      }

      console.log(data);

      setUserMessageCount(userMessageCount + 1);
      setCurrentMessage("");
    }
  }

  useEffect(() => {
    firstStep();
    console.log(messages);
  }, []);

  return (
    <Container>
      <ChatHeader />
      <Chat messages={messages} loading={loading} />
      <TextbarContainer>
        <textarea
          value={currentMessage}
          onKeyDown={(event) => handleSend(event)}
          onChange={handleChange}
          placeholder="Responda aqui"
        />
        <IconContainer>
          <Send size={30} color="#FF6900" />
        </IconContainer>
      </TextbarContainer>
    </Container>
  );
}

export default Register;
