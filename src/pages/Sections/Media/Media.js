import React from 'react'
import Header from '../../../components/Header/Header';

import styled from 'styled-components';
import Trailers from './Trailers/Trailers';
import ScreenShots from './ScreenShots/ScreenShots';
import WallPapers from './WallPapers/WallPapers';
import Avatars from './Avatars/Avatars';


const Media = () => {
  return (
    <Container>
      <Header />
      <Trailers />
      <ScreenShots />
      <WallPapers />
      <Avatars />
    </Container>
  )
}

export default Media;

const Container = styled.div`
  Width: 100%;
  height: 100%;
  background-color: #000;
`;