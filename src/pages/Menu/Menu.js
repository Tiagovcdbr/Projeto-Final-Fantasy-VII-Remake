import React from 'react';

import styled from 'styled-components';

const Menu = () => {
  return (
    <Container>
      <audio
        src={"/assets/audio/Final Fantasy 7 Remake Menu Music.mp3"}
        autoplay='1'
        loop
        muted                      
      />
      <div className='container-page'></div>
      <div className='logo-image'>
          <img src='/assets/images/Final-Fantasy-VII-Remake-Logo-Transparent.png' alt='/' />
      </div>
    </Container>
  )
};

export default Menu;

const Container = styled.div`
  width: 100%;
  height: 100vh;

  .container-page {
    width: 100%;
    height: 100%;
    background: url('/assets/images/ff7_remake_bg_menu.png');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center:
    transition: all .33s ease-in-out;
    object-fit: cover;
    -o-object-fit: cover;  }

  .logo-image {
    width: 100%;

    img {
      position: absolute;
      width: 750px;
      height: 500px;
      top: -5rem;
    }
  }

  @media(max-width: 780px) {
    .logo-image img {
      width: 550px;
      height: 450px;  
      transition: all .33s ease-in-out;    
    }
  }

  @media(max-width: 550px) {
    .logo-image img {
      width: 450px;
      height: 300px;  
      margin: 0 auto;  
      transition: all .33s ease-in-out;
    }
  }

  @media(max-width: 450px) {
    .logo-image img {
      width: 350px;
      height: 200px;  
      margin-top: 50px;  
      transition: all .33s ease-in-out;
    }
  }

  @media(max-width: 350px) {
    .logo-image img {
      width: 250px;
      height: 150px;  
      margin-top: 50px;
      margin-left: 20px;  
      transition: all .33s ease-in-out;
    }
  }

  @media(max-width: 300px) {
    .logo-image img {
      display: none;
    }
  }
`;
