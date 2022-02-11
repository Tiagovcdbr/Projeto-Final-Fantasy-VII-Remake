import React from 'react'
import Header from '../../../components/Header/Header';

import styled from 'styled-components';
import Trailers from './Trailers/Trailers';

const Media = () => {
  return (
    <Container>
      <Header />
      <Trailers />
    </Container>
  )
}

export default Media;

const Container = styled.div`
  Width: 100%;
  height: 100%;
`;