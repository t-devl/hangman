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
  max-width: ${(props) => (props.visible ? "100%" : 0)};
  height: 4px;
  background-color: black;
  visibility: ${(props) => (props.visible ? "visible" : "hidden")};
  transition: max-width 0.75s ease;
`;

const Stand = styled.div`
  position: absolute;
  left: calc(27.5% - 2px);
  bottom: 0;
  width: 4px;
  height: 100%;
  max-height: ${(props) => (props.visible ? "100%" : 0)};
  background-color: black;
  visibility: ${(props) => (props.visible ? "visible" : "hidden")};
  transition: max-height 0.75s ease;
`;

const AcrossBeam = styled.div`
  position: absolute;
  top: calc(20% - 6px);
  left: calc(27.5% - 2px);
  width: 4px;
  height: 20%;
  max-height: ${(props) => (props.visible ? "100%" : 0)};
  background-color: black;
  transform-origin: top;
  transform: rotate(-135deg);
  visibility: ${(props) => (props.visible ? "visible" : "hidden")};
  transition: max-height 0.75s ease;
`;

const TopBar = styled.div`
  position: absolute;
  top: 0;
  left: calc(27.5% - 2px);
  height: 4px;
  width: 50%;
  max-width: ${(props) => (props.visible ? "100%" : 0)};
  background-color: black;
  visibility: ${(props) => (props.visible ? "visible" : "hidden")};
  transition: max-width 0.75s ease;
`;

const Noose = styled.div`
  position: absolute;
  top: 0;
  left: calc(77.5% - 6px);
  width: 4px;
  height: 20%;
  max-height: ${(props) => (props.visible ? "100%" : 0)};
  background-color: black;
  visibility: ${(props) => (props.visible ? "visible" : "hidden")};
  transition: max-height 0.75s ease;
`;

const Head = styled.div`
  position: absolute;
  z-index: -1;
  top: 20%;
  left: calc(77.5% - 20.5px);
  width: 33px;
  height: 33px;
  border-radius: 50%;
  background-color: white;
  visibility: ${(props) => (props.visible ? "visible" : "hidden")};
  animation: ${(props) =>
    props.visible ? "drawCircle 0.2s ease forwards" : ""};

  @keyframes drawCircle {
    0% {
      box-shadow: 20px -20px 0 4px white, -20px -20px 0 4px white,
        -20px 20px 0 4px white, 20px 20px 0 4px white, 0 0 0px 4px white;
    }
    25% {
      box-shadow: 0px -43px 0 4px white, -20px -20px 0 4px white,
        -20px 20px 0 4px white, 20px 20px 0 4px white, 0 0 0px 4px black;
    }
    50% {
      box-shadow: 0px -43px 0 4px white, -43px 0px 0 4px white,
        -20px 20px 0 4px white, 20px 20px 0 4px white, 0 0 0px 4px black;
    }
    75% {
      box-shadow: 0px -43px 0 4px white, -43px 0px 0 4px white,
        0px 43px 0 4px white, 20px 20px 0 4px white, 0 0 0px 4px black;
    }
    100% {
      box-shadow: 0px -43px 0 4px white, -43px 0px 0 4px white,
        0px 43px 0 4px white, 43px 20px 0 4px white, 0 0 0px 4px black;
    }
  }
`;

const Body = styled.div`
  position: absolute;
  top: calc(20% + 36px);
  left: calc(77.5% - 6px);
  width: 4px;
  height: 25%;
  max-height: ${(props) => (props.visible ? "100%" : 0)};
  background-color: black;
  visibility: ${(props) => (props.visible ? "visible" : "hidden")};
  transition: max-height 0.75s ease;
`;

const LeftArm = styled.div`
  position: absolute;
  left: calc(77.5% - 6px);
  top: calc(30% + 34px);
  width: 4px;
  height: 20%;
  max-height: ${(props) => (props.visible ? "100%" : 0)};
  background-color: black;
  transform-origin: top;
  transform: rotate(130deg);
  visibility: ${(props) => (props.visible ? "visible" : "hidden")};
  transition: max-height 0.75s ease;
`;

const RightArm = styled.div`
  position: absolute;
  left: calc(77.5% - 6px);
  top: calc(30% + 34px);
  width: 4px;
  height: 20%;
  max-height: ${(props) => (props.visible ? "100%" : 0)};
  background-color: black;
  transform-origin: top;
  transform: rotate(-130deg);
  visibility: ${(props) => (props.visible ? "visible" : "hidden")};
  transition: max-height 0.75s ease;
`;

const LeftLeg = styled.div`
  position: absolute;
  left: calc(77.5% - 6px);
  top: calc(45% + 34px);
  width: 4px;
  height: 22.5%;
  max-height: ${(props) => (props.visible ? "100%" : 0)};
  background-color: black;
  transform-origin: top;
  transform: rotate(40deg);
  visibility: ${(props) => (props.visible ? "visible" : "hidden")};
  transition: max-height 0.75s ease;
`;

const RightLeg = styled.div`
  position: absolute;
  left: calc(77.5% - 6px);
  top: calc(45% + 34px);
  width: 4px;
  height: 22.5%;
  max-height: ${(props) => (props.visible ? "100%" : 0)};
  background-color: black;
  transform-origin: top;
  transform: rotate(-40deg);
  visibility: ${(props) => (props.visible ? "visible" : "hidden")};
  transition: max-height 0.75s ease;
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
