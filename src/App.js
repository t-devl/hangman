import "./App.css";
import styled from "styled-components";

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
    </div>
  );
}

export default App;
