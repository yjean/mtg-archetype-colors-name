import React from 'react';
import every from 'lodash/every';
import styled from 'styled-components';

function buildHasColors(selection) {
  return function(colors) {
    return every(colors.split(''), color => selection.includes(color));
  };
}

function guessName(hasColors) {
  // Five colors deck
  if (hasColors('RWBGU')) {
    return 'Five colors deck';
  }
  // Four colors deck
  if (hasColors('UBRG')) {
    return 'Glint-Eye';
  }
  if (hasColors('BRGW')) {
    return 'Dune';
  }
  if (hasColors('RGWU')) {
    return 'Ink-Treader';
  }
  if (hasColors('GWUB')) {
    return 'Witch';
  }
  if (hasColors('WUBR')) {
    return 'Yore, Artifice or Non-Green';
  }
  // Three colors deck
  if (hasColors('RGB')) {
    return 'Jund';
  }
  if (hasColors('WGU')) {
    return 'Bant';
  }
  if (hasColors('BRU')) {
    return 'Grixis';
  }
  if (hasColors('GWR')) {
    return 'Naya';
  }
  if (hasColors('UWB')) {
    return 'Esper';
  }
  if (hasColors('URW')) {
    return 'Jeskai';
  }
  if (hasColors('RWB')) {
    return 'Mardu';
  }
  if (hasColors('BGU')) {
    return 'Sultai';
  }
  if (hasColors('GUR')) {
    return 'Temur';
  }
  if (hasColors('WBG')) {
    return 'Abzan';
  }

  // Two colors deck
  if (hasColors('WU')) {
    return 'Azorius';
  }
  if (hasColors('UB')) {
    return 'Dimir';
  }
  if (hasColors('BR')) {
    return 'Rakdos';
  }
  if (hasColors('RG')) {
    return 'Gruul';
  }
  if (hasColors('GW')) {
    return 'Selesnya';
  }
  if (hasColors('WB')) {
    return 'Orzhov';
  }
  if (hasColors('UR')) {
    return 'Izzet';
  }
  if (hasColors('BG')) {
    return 'Golgari';
  }
  if (hasColors('RW')) {
    return 'Boros';
  }
  if (hasColors('GU')) {
    return 'Simic';
  }

  // Mono color deck
  if (hasColors('R')) {
    return 'Mono Red';
  }
  if (hasColors('W')) {
    return 'Mono White';
  }
  if (hasColors('B')) {
    return 'Mono Black';
  }
  if (hasColors('G')) {
    return 'Mono Green';
  }
  if (hasColors('U')) {
    return 'Mono Blue';
  }

  return 'Pick a color';
}

const Name = styled.div`
  background-color: #282c34;
  min-height: 10vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

const DeckName = ({ selection }) => {
  const hasColors = buildHasColors(selection);
  const name = guessName(hasColors);

  return <Name>{name}</Name>;
};

export default DeckName;
