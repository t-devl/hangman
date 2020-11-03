import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Key from "./Key";

const firstRowKeys = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
const secondRowKeys = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
const thirdRowKeys = ["Z", "X", "C", "V", "B", "N", "M"];

const StyledKeyboard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0.5rem 0;
`;

const KeyboardRow = styled.div`
  display: flex;
  &:first-of-type button {
    margin-top: 0;
  }

  &:last-of-type button {
    margin-bottom: 0;
  }
`;

export default function Keyboard({ checkIfKeyMatches, isGameOver }) {
  return (
    <StyledKeyboard>
      <KeyboardRow>
        {firstRowKeys.map((key) => (
          <Key
            isGameOver={isGameOver}
            checkIfKeyMatches={checkIfKeyMatches}
            key={key}
            value={key}
          >
            {key}
          </Key>
        ))}
      </KeyboardRow>

      <KeyboardRow>
        {secondRowKeys.map((key) => (
          <Key
            isGameOver={isGameOver}
            checkIfKeyMatches={checkIfKeyMatches}
            key={key}
            value={key}
          ></Key>
        ))}
      </KeyboardRow>

      <KeyboardRow>
        {thirdRowKeys.map((key) => (
          <Key
            isGameOver={isGameOver}
            checkIfKeyMatches={checkIfKeyMatches}
            key={key}
            value={key}
          ></Key>
        ))}
      </KeyboardRow>
    </StyledKeyboard>
  );
}
