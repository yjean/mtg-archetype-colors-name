import React, { useState } from 'react';

import ColorsSelector from './ColorsSelector';
import DeckName from './DeckName';
import styled from 'styled-components';

function toggler(colors, setColors) {
  return function toggleColor(color) {
    let newColors = [];
    if (colors.includes(color)) {
      newColors = colors.filter(c => c !== color);
    } else {
      newColors = [...colors, color];
    }
    setColors(newColors);
  };
}

const Container = styled.div`
  text-align: center;
`;

const App = () => {
  const [colors, setColors] = useState([]);
  const toggleColor = toggler(colors, setColors);

  return (
    <Container>
      <DeckName selection={colors} />
      <ColorsSelector toggleColor={toggleColor} selection={colors} />
    </Container>
  );
};

export default App;
