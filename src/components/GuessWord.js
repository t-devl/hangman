import React, { useState } from "react";
import styled from "styled-components";

const StyledGuessWord = styled.form`
  display: flex;
  margin: 1.5rem 0;
  border: 2px solid black;
`;

const GuessInput = styled.input`
  padding: 0.2rem;
  border: none;
  font-size: 0.8rem;
`;

const SubmitButton = styled.button`
  padding: 0.2rem 0.4rem;
  border: none;
  border-left: 2px solid black;
  background-color: #f5d45d;
  font-size: 0.75rem;
  font-weight: bold;
  text-transform: uppercase;
`;

export default function GuessWord({ checkGuess }) {
  const [guess, setGuess] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    checkGuess(guess.toUpperCase());
    setGuess("");
  };

  return (
    <StyledGuessWord onSubmit={handleSubmit}>
      <GuessInput
        placeholder="Have a guess..."
        value={guess}
        onChange={(e) => setGuess(e.target.value)}
      ></GuessInput>
      <SubmitButton>Submit</SubmitButton>
    </StyledGuessWord>
  );
}
