import React from "react";
import styled from "styled-components";

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

const Key = styled.button`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 25px;
  min-height: 25px;
  width: 7vw;
  height: 7vw;
  max-width: 30px;
  max-height: 30px;
  margin: 1vw;
  border: none;
  border-radius: 3px;
  background-color: #e4e4e4;
  font-size: 0.8rem;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.25);
  cursor: pointer;

  &[disabled] {
    background-color: #f2f2f2;
  }

  &[disabled]::after {
    content: "";
    position: absolute;
    width: 90%;
    height: 1px;
    background-color: black;
    transform: rotate(-45deg);
  }

  @media (min-width: 500px) {
    margin: 5px;
  }
`;

export default function Keyboard({ checkIfKeyMatches }) {
  const handleClick = (e, key) => {
    checkIfKeyMatches(key);
    e.target.setAttribute("disabled", true);
  };
  return (
    <StyledKeyboard>
      <KeyboardRow>
        {firstRowKeys.map((key) => (
          <Key key={key} onClick={(e) => handleClick(e, key)}>
            {key}
          </Key>
        ))}
      </KeyboardRow>

      <KeyboardRow>
        {secondRowKeys.map((key) => (
          <Key key={key} onClick={(e) => handleClick(e, key)}>
            {key}
          </Key>
        ))}
      </KeyboardRow>

      <KeyboardRow>
        {thirdRowKeys.map((key) => (
          <Key key={key} onClick={(e) => handleClick(e, key)}>
            {key}
          </Key>
        ))}
      </KeyboardRow>
    </StyledKeyboard>
  );
}
