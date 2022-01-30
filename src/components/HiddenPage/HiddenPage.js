import React from 'react';

import styled from 'styled-components';

const HiddenPage = () => {
  return (
    <Container>
      <div className='container-hidden-image'>
        <div className='hidden-image'>
          <img src='assets/bg_story_top.jpg' alt='/' />
        </div>
      </div>
    </Container>
  )
};

export default HiddenPage;

const Container = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 65rem;

  .container-hidden-image {
    width: 100%;
    height: 100%;
  }

  .hidden-image img {    
    width: 100%;
    height: 100vh;    
  }

  @media(max-width: 1900px) {
    width: 100%;
    height: 100vh;
    margin-top: 960px;
  }

  @media(max-width: 1100px) {
      z-index: 1;
      height: 100vh;
      margin-top: 550px;  
  }

  @media(max-width: 750px) {
    margin-top: 540px;
  }
`;
