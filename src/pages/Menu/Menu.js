/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';

const Menu = () => {

  return (
    <Container>
      <video
        className='video-bg'
        src={"/assets/video/lifestream.mp4"}
        autoplay='1'
        allowfullscreen="1"
        loop    
      />
      <video
        className='video-bg_2'
        src={"/assets/video/lifestream.mp4"}
        autoplay='1'
        allowfullscreen="1"
        loop    
      />
      <audio
        src={"/assets/audio/Final Fantasy 7 Remake Menu Music.mp3"}
        autoplay='1'
        loop
                      
      />
      <div className='container-page'></div>
        <div className='logo-image'>
          <img src='/assets/images/Final-Fantasy-VII-Remake-Logo-Transparent.png' alt='/' />
        </div>
        <div className='text-area'>
          <div className='text'>
            <span>Projeto Final Fantasy VII Remake feito por fã</span>
            <span>© 1997, 2020 SQUARE ENIX CO., LTD. Todos os direitos 
            e conteudos são reservados a empresa SQUARE ENIX</span>
          </div>
        </div>
        <div className='button-menu'>
          <Link to="/home" style={{ textDecoration: 'none' }}>
            <button id="btn">Start</button>
          </Link>
        </div>
          <div className='hand-menu'>
            <img src='assets/images/hand.png' alt='/' />
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
    -o-object-fit: cover;
  }

  .video-bg {
    position: absolute;
    
    width: 100%;
    height: 0.50%;
    background-color: #000;

    object-fit: cover;
    -o-object-fit: cover;

    background: linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.6) 100%),
            linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%);
  }

  .video-bg_2 {
    position: absolute;
    
    width: 100%;
    height: 0.50%;
    bottom: 0;
    background-color: #000;

    object-fit: cover;
    -o-object-fit: cover;

    background: linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.6) 100%),
            linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%);
  }

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
      display: flex;
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

  .text-area {
    display: flex;
    flex-direction: column;
    position: relative;
    margin-left: 160px;
    top: -500px;
    max-width: 460px;
    height: 0; 
  }

  @media(max-width: 780px) {
    .text-area {
      right: 40px;
    }
  }

  @media(max-width: 550px) {
    .text-area {
      right: 60px;
    }
  }

  @media(max-width: 450px) {
    .text-area {
      justify-content: center;
      max-width: 250px;
      right: 80px;

      span {
        font-size: 14px;
      }
    }
  }

  @media(max-width: 350px) {
    .text-area {
      justify-content: center;
      max-width: 270px;
      right: 80px;

      span {
        font-size: 14px;
      }
    }
  }

  .text {
    height: 65px;
    background: -webkit-linear-gradient(top,rgba(5,37,78,.5),rgba(5,37,78,.5) 45%,rgba(5,37,78,0));
    background: linear-gradient(140deg,rgba(5,37,78,.5) 0,rgba(5,37,78,.5) 15%,rgba(5,37,78,0));

    span {
      color: #fff;
      font-weight: 700;      
    }
  }

  @media(max-width: 780px) {
    .text {
      right: 40px;
      height: 130px;
    }
  }

  @media(max-width: 350px) {
    .text {
      right: 40px;
      height: 150px;
    }
  }

  .button-menu {
    width: 100px;
    position: relative;
    top: -325px;
    margin: 0 auto;
    height: 0;
  }
  
    button {
      width: 100px;
      height: 30px;
      font-weight: 700;
      font-size: 18px; 
      border-radius: 16px;
      cursor: pointer;
      transition: all .99s ease-in-out;
  }

  .hand-menu {
    width: 5px;
    position: relative;
    top: -24rem;
    right: 150px;
    margin: 0 auto;
    height: 0;

    img {
      position: relative;
      width: 150px;
      cursor: pointer;      
    }
  }
`;
