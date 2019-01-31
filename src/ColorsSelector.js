import B from './images/B.svg';
import G from './images/G.svg';
import R from './images/R.svg';
import React from 'react';
import U from './images/U.svg';
import W from './images/W.svg';
import styled from 'styled-components';

const images = {
  R,
  G,
  B,
  U,
  W
};

const Circle = styled.div`
  border-radius: 100%;
  height: 3em;
  width: 3em;
  color: #000;
  border-color: ${({ active }) => (active ? '#f00' : '#ccc')}
  margin-right: 1em;
  position: relative;
  will-change: tranform;
  opacity: .9;

  &:last-child {
    margin-right: 0;
  }

  &:hover {
    cursor: pointer;
  }

  &:after {
    position: absolute;
    top: 0;
    left: 0;
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    background-color: #000;
    border-radius: 100%;
    z-index: -1;
    will-change: tranform;
    filter: blur(3px);
    transform: scale(.9);
  }

  ${({ active }) =>
    active
      ? `
      transform: translate(0px, 3px);
      opacity: 1;
      
      &:after {
        transform: scale(1.1) translate(0px, -2px);
      }
    `
      : `
    &:hover {
      transform: translate(0px, 2px);
      
      &:after {
        transform: scale(.9) translate(0px, -2px);
      }
    }  
  `}
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2em;
`;

const Color = ({ color, name, active, onClick }) => (
  <Circle color={color} onClick={() => onClick(name)} active={active}>
    <img src={images[name]} alt={`${name} mana logo`} />
  </Circle>
);

const ColorsSelector = ({ selection, toggleColor }) => {
  return (
    <Wrapper>
      <Color
        color={R}
        name="R"
        onClick={toggleColor}
        active={selection.includes('R')}
      />
      <Color
        color="#000"
        name="B"
        onClick={toggleColor}
        active={selection.includes('B')}
      />
      <Color
        color="#00F"
        name="U"
        onClick={toggleColor}
        active={selection.includes('U')}
      />
      <Color
        color="#0F0"
        name="G"
        onClick={toggleColor}
        active={selection.includes('G')}
      />
      <Color
        color="#FFF"
        name="W"
        onClick={toggleColor}
        active={selection.includes('W')}
      />
    </Wrapper>
  );
};

export default ColorsSelector;
