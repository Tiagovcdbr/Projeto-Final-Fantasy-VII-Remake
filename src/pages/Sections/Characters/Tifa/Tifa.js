import React from 'react';
import styled from 'styled-components';

import Header from '../../../../components/Header/Header';

const Tifa = () => {
  return (
    <Container>
      <Header />
    </Container>
  )
};

export default Tifa;

const Container = styled.div`
  width: 100%;
  height: 100%;
`;
