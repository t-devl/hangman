import React, { useEffect, useState } from "react";
import styled from "styled-components";

const StyledGuessWord = styled.form`
  position: relative;
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

  &:hover,
  &:focus {
    background-color: #f7ca28;
  }
`;

const ErrorMessage = styled.span`
  position: absolute;
  top: 100%;
  margin-top: 0.25rem;
  font-size: 0.75rem;
  color: red;
`;

export default function GuessWord({ checkGuess, isGameOver }) {
  const [guess, setGuess] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [previousGuesses, setPreviousGuesses] = useState([]);
  const inputPattern = new RegExp("^[a-zA-Z]+$");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isGuessValid()) {
      if (isGuessNew()) {
        checkGuess(guess.toUpperCase());
        setPreviousGuesses([...previousGuesses, guess.toUpperCase()]);
        setGuess("");
        setErrorMessage("");
      } else {
        setErrorMessage("You have already guessed this word.");
      }
    } else {
      setErrorMessage("Your guess must be made up of letters.");
    }
  };

  const isGuessValid = () => {
    return inputPattern.test(guess);
  };

  const isGuessNew = () => {
    return !previousGuesses.includes(guess.toUpperCase());
  };

  useEffect(() => {
    if (isGameOver === false) {
      setGuess("");
      setErrorMessage("");
      setPreviousGuesses([]);
    }
  }, [isGameOver]);

  return (
    <StyledGuessWord onSubmit={handleSubmit}>
      <GuessInput
        placeholder="Have a guess..."
        value={guess}
        onChange={(e) => setGuess(e.target.value)}
        disabled={isGameOver}
      ></GuessInput>
      <SubmitButton>Submit</SubmitButton>
      {errorMessage !== "" ? <ErrorMessage>{errorMessage}</ErrorMessage> : ""}
    </StyledGuessWord>
  );
}
