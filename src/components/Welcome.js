import React from "react";
import styled from "styled-components";

const StyledWelcome = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: white;
  z-index: 10;
`;

const Title = styled.h1`
  margin-bottom: 1.2rem;
  font-size: 2.5rem;
  line-height: 1;
  letter-spacing: 1px;
  text-align: center;
`;

const PlayButton = styled.button`
  position: relative;
  padding: 0.5rem 1.5rem;
  border: 2px solid black;
  background-color: #f5d45d;
  font-size: 1.5rem;
  font-weight: bold;
  text-transform: uppercase;

  &::after {
    position: absolute;
    right: 0;
    bottom: 0.5rem;
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
    width: calc(100% - 3rem);
  }
`;

export default function Welcome({ startNewGame, setIsWelcomeScreenVisible }) {
  const handleClick = () => {
    setIsWelcomeScreenVisible(false);
    startNewGame();
  };

  return (
    <StyledWelcome>
      <Title>Welcome to Hangman</Title>
      <PlayButton onClick={handleClick}>Play</PlayButton>
    </StyledWelcome>
  );
}
