import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../../../../components/Header/Header';
import styled from 'styled-components';

const Main = () => {
  return (    
    <Container>
      <Header />
        <ContainerCharacters>
          <div className='card-logo'>
            <Link to="/cloud" style={{ textDecoration: 'none' }}>
              <img src="assets/cards/chara_thumb_aerith.png" alt="/" />
            </Link>            
          </div>
        </ContainerCharacters>
    </Container>
    
  )
};

export default Main;

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

const ContainerCharacters = styled.div`
  width: 100%;
  height: 100%;
  display: flex;

  .card-logo {
    width: 250px;
    height: 250px;
    margin: 0 auto;

    img {
      width: 100px;
      margin-top: 250px;
      cursor: pointer;
    }
  }
`;
