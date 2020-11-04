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
  padding: 0.5rem 1rem;
  border: 1px solid black;
  background-color: #f7ca28;
  font-weight: bold;
  text-transform: uppercase;
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
