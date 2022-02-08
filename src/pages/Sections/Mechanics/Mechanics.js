import React from 'react';

import styled from 'styled-components';
import Header from '../../../components/Header/Header';
import BattleSystem from './BattleSystem/BattleSystem';
import TacticalMode from './TacticalMode/TacticalMode';
import Shortcuts from './Shortcuts/Shortcuts';
import Stagger from './Stagger/Stagger';
import AllyCommands from './AllyCommands/AllyCommands';
import LimitBreaks from './LimitBreaks/LimitBreaks';
import Materia from './Materia/Materia';
import Summons from './Summons/Summons';

const Mechanics = () => {
  return (
    <Container>
      <audio
        src={"/assets/audio/Final Fantasy VII Remake_Boss Theme.m4a"}
        autoplay='1'
        loop                
      />
      <Header />
      <BattleSystem />
      <TacticalMode />
      <Shortcuts />
      <Stagger />
      <AllyCommands />
      <LimitBreaks />
      <Materia />
      <Summons />
    </Container>
  )
};

export default Mechanics;


const Container = styled.div`
  width: 100%;
  height: 100%;
`;


