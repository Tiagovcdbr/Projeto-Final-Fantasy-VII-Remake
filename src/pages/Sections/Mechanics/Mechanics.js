import React from 'react';

import styled from 'styled-components';
import Header from '../../../components/Header/Header';
import BattleSystem from './BattleSystem/BattleSystem';

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
    </Container>
  )
};

export default Mechanics;


const Container = styled.div`
  width: 100%;
  height: 100%;
`;