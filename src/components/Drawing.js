import React from "react";
import styled from "styled-components";

const StyledDrawing = styled.div`
  position: relative;
  width: 112px;
  height: 144px;
`;

const Base = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 55%;
  height: 4px;
  background-color: black;
  visibility: ${(props) => (props.visible ? "visible" : "hidden")};
`;

const Stand = styled.div`
  position: absolute;
  width: 4px;
  height: 100%;
  left: calc(27.5% - 2px);
  background-color: black;
  visibility: ${(props) => (props.visible ? "visible" : "hidden")};
`;

const AcrossBeam = styled.div`
  position: absolute;
  top: 8px;
  left: calc(27.5% - 2px);
  width: 20%;
  height: 4px;
  background-color: black;
  transform-origin: bottom;
  transform: rotate(-45deg);
  visibility: ${(props) => (props.visible ? "visible" : "hidden")};
`;

const TopBar = styled.div`
  position: absolute;
  top: 0;
  left: calc(27.5% - 2px);
  height: 4px;
  width: 50%;
  background-color: black;
  visibility: ${(props) => (props.visible ? "visible" : "hidden")};
`;

const Noose = styled.div`
  position: absolute;
  top: 0;
  left: calc(77.5% - 6px);
  width: 4px;
  height: 20%;
  background-color: black;
  visibility: ${(props) => (props.visible ? "visible" : "hidden")};
`;

const Head = styled.div`
  position: absolute;
  top: 20%;
  left: calc(77.5% - 20.5px);
  width: 33px;
  height: 33px;
  border-radius: 50%;
  visibility: ${(props) => (props.visible ? "visible" : "hidden")};

  &::after {
    position: absolute;
    content: "";
    width: 33px;
    height: 33px;
    border-radius: 50%;
    box-shadow: 0 0 0px 4px black;
  }
`;

const Body = styled.div`
  position: absolute;
  top: calc(20% + 36px);
  left: calc(77.5% - 6px);
  width: 4px;
  height: 25%;
  background-color: black;
  visibility: ${(props) => (props.visible ? "visible" : "hidden")};
`;

const LeftArm = styled.div`
  position: absolute;
  left: calc(77.5% - 6px);
  top: calc(20% + 8px + 8%);
  width: 4px;
  height: 20%;
  background-color: black;
  transform-origin: bottom;
  transform: rotate(-50deg);
  visibility: ${(props) => (props.visible ? "visible" : "hidden")};
`;

const RightArm = styled.div`
  position: absolute;
  left: calc(77.5% - 6px);
  top: calc(20% + 8px + 8%);
  width: 4px;
  height: 20%;
  background-color: black;
  transform-origin: bottom;
  transform: rotate(50deg);
  visibility: ${(props) => (props.visible ? "visible" : "hidden")};
`;

const LeftLeg = styled.div`
  position: absolute;
  width: 4px;
  height: 22.5%;
  left: calc(77.5% - 6px);
  top: calc(45% + 34px);
  background-color: black;
  transform-origin: top;
  transform: rotate(40deg);
  visibility: ${(props) => (props.visible ? "visible" : "hidden")};
`;

const RightLeg = styled.div`
  position: absolute;
  width: 4px;
  height: 22.5%;
  left: calc(77.5% - 6px);
  top: calc(45% + 34px);
  background-color: black;
  transform-origin: top;
  transform: rotate(-40deg);
  visibility: ${(props) => (props.visible ? "visible" : "hidden")};
`;

export default function Drawing({ livesLeft }) {
  return (
    <StyledDrawing>
      <Base visible={livesLeft < 11}></Base>
      <Stand visible={livesLeft < 10}></Stand>
      <TopBar visible={livesLeft < 9}></TopBar>
      <AcrossBeam visible={livesLeft < 8}></AcrossBeam>
      <Noose visible={livesLeft < 7}></Noose>
      <Head visible={livesLeft < 6}></Head>
      <Body visible={livesLeft < 5}></Body>
      <LeftArm visible={livesLeft < 4}></LeftArm>
      <RightArm visible={livesLeft < 3}></RightArm>
      <LeftLeg visible={livesLeft < 2}></LeftLeg>
      <RightLeg visible={livesLeft < 1}></RightLeg>
    </StyledDrawing>
  );
}
