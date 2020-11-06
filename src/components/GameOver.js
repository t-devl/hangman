import React from "react";
import styled from "styled-components";

const StyledGameOver = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
`;

const Message = styled.h1`
  margin-bottom: 0.5rem;
  color: ${(props) => (props.gameOutcome === "win" ? "#3dc229" : "#fa2720")};
  font-size: 3rem;
  text-transform: uppercase;
`;

const PlayAgainButton = styled.button`
  position: relative;
  padding: 0.5rem 1rem;
  border: 1px solid black;
  background-color: #f5d45d;
  font-weight: bold;
  text-transform: uppercase;

  &::after {
    position: absolute;
    right: 0;
    bottom: 0.4rem;
    left: 0;
    content: "";
    width: 0;
    height: 2px;
    margin: auto;
    background-color: black;
    transition: width 0.1s linear;
  }

  &:hover,
  &:focus {
    background-color: #f7ca28;
  }

  &:hover::after,
  &:focus::after {
    width: calc(100% - 2rem);
  }
`;

export default function GameOver({
  startNewGame,
  gameOverMessage,
  gameOutcome,
}) {
  return (
    <StyledGameOver>
      <Message gameOutcome={gameOutcome}>{gameOverMessage}</Message>
      <PlayAgainButton onClick={startNewGame}>Play Again</PlayAgainButton>
    </StyledGameOver>
  );
}
