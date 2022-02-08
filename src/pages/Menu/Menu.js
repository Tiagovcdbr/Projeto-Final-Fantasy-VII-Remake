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
      <div className='container-page'>
        <div className='bg-image'>
          <img src='/assets/images/ff7_remake_bg_menu.png' alt='' />
            <div className='logo-image'>
              <img src='/assets/images/Final-Fantasy-VII-Remake-Logo-Transparent.png' alt='/' />
            </div>
            <div className='text-area'>
              <div className='text'>
              <span> Todo conteúdo utilizado nesse projeto acadêmico, são reservados as empresas
              SQUARE ENIX & Sony Computer Entertainment Inc.</span><br /><br />

                <span>Projeto clone do site Final Fantasy VII Remake feito por um 
                grande fã do jogo e franquia</span>

                <span> © 1997, 2020 SQUARE ENIX CO., LTD. Todos os direitos 
                e conteudos são reservados a empresa SQUARE ENIX</span><br /><br />

                <span>PlayStation" e o logotipo "PS" são marcas registradas e 
                  "PS4" é uma marca comercial da Sony Computer Entertainment Inc.</span>
              </div>
            </div>            
         </div>
          <div className='button-menu'>
            <Link to="/home" style={{ textDecoration: 'none' }}>
              <button id="btn">Start</button>
            </Link>
          </div>
      </div>
    </Container>
  )
};

export default Menu;

const Container = styled.div`
  width: 100%;
  height: 100%;

  @media(max-width: 1850px) {
    width: 100%;
  }

  .container-page {
    width: 100%;
    height: 100%;
    transition: all .33s ease-in-out;
    object-fit: cover;
    -o-object-fit: cover;
  }

  @media(max-width: 1850px) {
    .container-page {
    width: 100%;
    height: 100%;
    }
  }

  .bg-image {
    width: 100%;
    height: 100%;

    img {
      width: 100%;
    }
  }

  @media(max-width: 1900px) {
    .bg-image img {
      width: 100%;
      height: 1000px;
  }
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
    margin-bottom: -109px;
    background-color: #000;

    object-fit: cover;
    -o-object-fit: cover;

    background: linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.6) 100%),
            linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%);
  }

  @media(max-width: 1850px) {
    .video-bg_2 {
      width: 100%;
      position: absolute;
      height: 0.50%;
      bottom: 0;
      margin-bottom: -159px;
    }
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

  @media(max-width: 560px) {
    .logo-image img {
      width: 500px;
      height: 350px;  
      margin: 0 auto; 
      margin-top: 100px; 
      transition: all .33s ease-in-out;
    }
  }

  @media(max-width: 430px) {
    .logo-image img {
      width: 400px;
      height: 350px;  
      top: -80px;
      left: -70px;
      transition: all .33s ease-in-out;
    }
  }

  @media(max-width: 370px) {
    .logo-image img {
      width: 400px;
      height: 350px;  
      margin-left: -10px;
      right: 50px;
        
      transition: all .33s ease-in-out;
    }
  }

  @media(max-width: 340px) {
    .logo-image img {
      width: 250px;
      height: 250px;
      bottom: 10px;
      left: -10px;
    }
  }

  .text-area {
    display: flex;
    flex-direction: column;
    position: absolute;
    margin-left: 160px;
    margin-top: -600px;
    max-width: 460px; 
  }

  .button-menu {
    margin-top: -25rem;
    margin-left: 57rem;
  }

  .button-menu button {
    width: 80px;
    height: 30px;
    font-size: 22px;
    font-weight: 600;
    font-family: 'MyriadPro-Cond', Arial, sans-serif;
    cursor: pointer;
    border-width: 3px;
    border-style: solid;
    border-color: #009080;
    border-radius: 12px;
    transition: all .66s ease-out;

    &:hover {
      background-color: #000;
      color: #fff;
      transition: all .66s ease-in-out;
    }
  }

  @media(max-width: 1850px) {
    .button-menu {
      position: absolute;
      display: flex;
      left:-600px;
      bottom: 80px;
      border-color: #009080;
    }
  }

  @media(max-width: 640px) {
    .button-menu {
      position: absolute;
      display: flex;
      left:-800px;
    }
  }

  span {
    color: #fff;
    font-weight: 700; 
    font-family: MyriadPro-Cond,Arial,sans-serif;
  }

  @media(max-width: 780px) {
    .text-area {
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      width: 100%;
      right: 40px;
    }
  }

  @media(max-width: 560px) {
    .text-area {
      display: flex;
      flex-direction: column;
      right: 140px;
    }
  }

  @media(max-width: 575px) {
    .text-area {
      display: flex;
      justify-content: column;
      right: 10px;
    }
  }

  @media(max-width: 475px) {
    .text-area {
      right: 70px;
      max-width: 300px;
      font-size: 12px;
  }

  @media(max-width: 400px) {
    .text-area {
      display: none;
  }

  .text {
    height: 65px;
    background: -webkit-linear-gradient(top,rgba(5,37,78,.5),rgba(5,37,78,.5) 85%,rgba(5,37,78,0));
    background: linear-gradient(140deg,rgba(5,37,78,.5) 0,rgba(5,37,78,.5) 75%,rgba(5,37,78,0));

    text-shadow: 4px 2px 2px 4px #ffffff;

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

  @media(max-width: 475px) {
    .text {
      right: 40px;
      height: 210px;
    }
  }

  .hand-menu {
    width: 80px;
    max-width: 80px;
    position: relative;
    top: -24rem;
    right: 150px;
    margin: 0 auto;
    height: 0;

    img {
      max-width: 150px;
      position: absolute;
      width: 15px;
      cursor: pointer;      
    }
  }

  @media(max-width: 550px) {
    .hand-menu {
      width: 100%;
      left: 100px;

      img {
        right: 120px;
      }
    }
  }
`;
