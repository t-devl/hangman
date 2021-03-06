import React, { useEffect, useState } from "react";
import styled from "styled-components";

const StyledKey = styled.button`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 22px;
  min-height: 22px;
  width: 7vw;
  height: 7vw;
  max-width: 1.9rem;
  max-height: 1.9rem;
  margin: 1vw;
  border: none;
  border-radius: 3px;
  background-color: #e4e4e4;
  font-size: 0.8rem;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.25);
  cursor: pointer;

  &:hover,
  &:focus {
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.25);
    transform: translateY(1px);
  }

  &:active {
    outline: none;
    box-shadow: none;
    transform: translateY(2px);
  }

  &:disabled {
    background-color: #f2f2f2;
    box-shadow: none;
    transform: translateY(2px);
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
