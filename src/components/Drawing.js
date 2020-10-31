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
`;

const Stand = styled.div`
  position: absolute;
  width: 4px;
  height: 100%;
  left: calc(27.5% - 2px);
  background-color: black;
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
`;

const TopBar = styled.div`
  position: absolute;
  top: 0;
  left: calc(27.5% - 2px);
  height: 4px;
  width: 50%;
  background-color: black;
`;

const Noose = styled.div`
  position: absolute;
  top: 0;
  left: calc(77.5% - 6px);
  width: 4px;
  height: 20%;
  background-color: black;
`;

const Head = styled.div`
  position: absolute;
  top: 20%;
  left: calc(77.5% - 20.5px);
  width: 33px;
  height: 33px;
  border-radius: 50%;

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
`;

export default function Drawing() {
  return (
    <StyledDrawing>
      <Base></Base>
      <Stand></Stand>
      <TopBar></TopBar>
      <AcrossBeam></AcrossBeam>
      <Noose></Noose>
      <Head></Head>
      <Body></Body>
      <LeftArm></LeftArm>
      <RightArm></RightArm>
      <LeftLeg></LeftLeg>
      <RightLeg></RightLeg>
    </StyledDrawing>
  );
}
