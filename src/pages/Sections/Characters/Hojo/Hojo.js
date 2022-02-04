import React from 'react';
import styled from 'styled-components';

import Header from '../../../../components/Header/Header';

const Hojo = () => {
  return (
    <Container>
      <Header />
    </Container>
  )
};

export default Hojo;

const Container = styled.div`
  width: 100%;
  height: 100%;
`;
