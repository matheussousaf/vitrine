import React from "react";
import { Container, Button } from "./styles";

const HeartButton = ({ handleClick, isFavorite }) => {
  return (
    <Container>
      <Button onClick={handleClick}>
        <input defaultChecked={isFavorite} type="checkbox" className="toggle" />
        <div className="heart" />
      </Button>
    </Container>
  );
};
export default HeartButton;
