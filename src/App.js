import "./App.css";
import styled from "styled-components";
import Drawing from "./components/Drawing";
import Word from "./components/Word";
import Keyboard from "./components/Keyboard";
import GuessWord from "./components/GuessWord";

const Title = styled.h1`
  margin: 1rem 0;
  font-size: 1.2rem;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

function App() {
  return (
    <div className="App">
      <Title>Hangman</Title>
      <Drawing></Drawing>
      <Word></Word>
      <Keyboard></Keyboard>
      <GuessWord></GuessWord>
    </div>
  );
}

export default App;
