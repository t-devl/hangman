import "./App.css";
import styled from "styled-components";
import Drawing from "./components/Drawing";
import Word from "./components/Word";
import Keyboard from "./components/Keyboard";
import GuessWord from "./components/GuessWord";
import { useState } from "react";

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

  const checkIfKeyMatches = (key) => {
    let correctlyGuessedLetters = [...currentResult];
    for (let i = 0; i < chosenWord.length; i++) {
      if (key === chosenWord[i]) {
        correctlyGuessedLetters[i] = key;
        console.log("yes");
      }
    }
    setCurrentResult(correctlyGuessedLetters);
  };

  return (
    <div className="App">
      <Title>Hangman</Title>
      <Drawing></Drawing>
      <Word currentResult={currentResult}></Word>
      <Keyboard checkIfKeyMatches={checkIfKeyMatches}></Keyboard>
      <GuessWord></GuessWord>
    </div>
  );
}

export default App;
