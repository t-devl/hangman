import "./App.css";
import styled from "styled-components";
import Drawing from "./components/Drawing";
import Word from "./components/Word";
import Keyboard from "./components/Keyboard";
import GuessWord from "./components/GuessWord";
import { useEffect, useState } from "react";
import GameOver from "./components/GameOver";

const Title = styled.h1`
  margin: 1rem 0;
  font-size: 1.2rem;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

function App() {
  const [randomWords, setRandomWords] = useState([
    "population",
    "jazz",
    "weather",
    "park",
    "rainfall",
    "television",
    "shoelace",
    "printer",
    "restaurant",
    "reunion",
    "secret",
  ]);

  const [chosenWord, setChosenWord] = useState("TEST");
  const [currentResult, setCurrentResult] = useState(["", "", "", ""]);
  const [livesLeft, setLivesLeft] = useState(11);
  const [isGameOver, setIsGameOver] = useState(false);
  const [gameOutcome, setGameOutcome] = useState("");
  const [gameOverMessage, setGameOverMessage] = useState("");

  const startNewGame = () => {
    setCurrentResult(["", "", "", ""]);
    setLivesLeft(11);
    setIsGameOver(false);
  };

  const checkIfKeyMatches = (key) => {
    let matchesFound = 0;
    let correctlyGuessedLetters = [...currentResult];

    for (let i = 0; i < chosenWord.length; i++) {
      if (key === chosenWord[i]) {
        correctlyGuessedLetters[i] = key;
        matchesFound++;
      }
    }

    if (matchesFound > 0) {
      setCurrentResult(correctlyGuessedLetters);
    } else {
      setLivesLeft(livesLeft - 1);
    }
  };

  const gameOver = (result) => {
    setIsGameOver(true);
    setGameOutcome(result);
  };

  const checkGuess = (guess) => {
    if (guess === chosenWord) {
      gameOver("win");
    } else {
      setLivesLeft(livesLeft - 1);
    }
  };

  useEffect(() => {
    if (livesLeft === 0) {
      gameOver("lose");
    }
  }, [livesLeft]);

  useEffect(() => {
    if (currentResult.join("") === chosenWord) {
      gameOver("win");
    }
  }, [currentResult]);

  useEffect(() => {
    if (gameOutcome === "win") {
      setGameOverMessage("You Win!");
    } else {
      setGameOverMessage("You Lose!");
    }
  }, [gameOutcome]);

  return (
    <div className="App">
      <Title>Hangman</Title>
      <Drawing livesLeft={livesLeft}></Drawing>
      <Word currentResult={currentResult}></Word>
      <Keyboard
        checkIfKeyMatches={checkIfKeyMatches}
        isGameOver={isGameOver}
      ></Keyboard>
      <GuessWord checkGuess={checkGuess}></GuessWord>
      {isGameOver ? (
        <GameOver
          startNewGame={startNewGame}
          gameOutcome={gameOutcome}
          gameOverMessage={gameOverMessage}
        ></GameOver>
      ) : (
        ""
      )}
    </div>
  );
}

export default App;
