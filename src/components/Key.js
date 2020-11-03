import React, { useEffect, useState } from "react";
import styled from "styled-components";

const StyledKey = styled.button`
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

  &:disabled {
    background-color: #f2f2f2;
  }

  &:disabled::after {
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

export default function Key({ value, checkIfKeyMatches, isGameOver }) {
  const [isKeyDisabled, setIsKeyDisabled] = useState(false);

  const handleClick = (value) => {
    checkIfKeyMatches(value);
    setIsKeyDisabled(true);
  };

  useEffect(() => {
    if (isGameOver === false) {
      setIsKeyDisabled(false);
    }
  }, [isGameOver]);

  return (
    <StyledKey disabled={isKeyDisabled} onClick={() => handleClick(value)}>
      {value}
    </StyledKey>
  );
}
