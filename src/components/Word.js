import React from "react";
import styled from "styled-components";

const StyledWord = styled.div`
  display: flex;
  margin: 1rem 0;
`;

const Letter = styled.div`
  min-width: 20px;
  width: 7vw;
  max-width: 1.4rem;
  height: 1.6rem;
  margin: 0 4px;
  border-bottom: 2px solid black;
  font-size: 1.2rem;
  font-weight: bold;
  text-align: center;
`;

export default function Word({ currentResult }) {
  return (
    <StyledWord>
      {currentResult.map((letter, index) => (
        <Letter key={index}>{letter}</Letter>
      ))}
    </StyledWord>
  );
}
