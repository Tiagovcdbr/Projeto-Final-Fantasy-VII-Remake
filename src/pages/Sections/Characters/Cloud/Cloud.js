import React from 'react';
import styled from 'styled-components';

import Header from '../../../../components/Header/Header';

const Cloud = () => {
  return (
    <Container>
      <Header />
      <audio
        src={"/assets/audio/Final Fantasy VII Remake Main Theme.m4a"}
        autoplay='1'
        loop
                
      />
    </Container>
  )
};

export default Cloud;

const Container = styled.div`
  width: 100%;
  height: 100%;
`;
