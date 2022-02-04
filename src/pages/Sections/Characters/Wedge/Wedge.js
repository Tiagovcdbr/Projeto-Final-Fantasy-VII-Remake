import React from 'react';
import styled from 'styled-components';

import Header from '../../../../components/Header/Header';

const Wedge = () => {
  return (
    <Container>
      <Header />
    </Container>
  )
};

export default Wedge;

const Container = styled.div`
  width: 100%;
  height: 100%;
`;
