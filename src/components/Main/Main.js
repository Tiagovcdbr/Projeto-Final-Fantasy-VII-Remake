import React from 'react';

import styled from 'styled-components';

const Main = () => {
  return (
    <Container>
      <video
        className='video-bg'
        src={"/assets/video/video.mp4"}
        autoplay='1'
        allowfullscreen="1"
        loop
        muted
      />
      <ContainerLogo>
        <div className='logo'>
          <img src='/assets/Final-Fantasy-VII-Remake-Logo-Transparent.png' alt='logo' />
        </div>
      </ContainerLogo>
      <ContentTraillers>
        <div className='video-thumb'>
          <div className='video-still'>
            <img src='/assets/the-game-awards-2019-trailer-still.jpg' alt='/' />
          </div>
          <div className='play-btn-home'>
            <img className='play-btn' src='/assets/play_btn.png' alt='/' />
            <h3 className='trailler-title'>The Game Awards 2019 Trailler</h3>
          </div>
          <div className='video-border-decoration-top-left'>
            <img className='video-border-decoration' src='/assets/trailer_frame_corner.png' alt='/' />
          </div>
          <div className='video-border-decoration-top-right'>
            <img className='video-border-decoration' src='/assets/trailer_frame_corner.png' alt='/' />
          </div>
        </div>
      </ContentTraillers>      
    </Container>
  )
};

export default Main;

const Container = styled.section`
  overflow: hidden;
  object-fit: cover;
  width: 100%;
  opacity: 0.9;

  .video-bg {
    position: absolute;
    max-width: 1900px;
    width: 100%;
    height: 100%;
    margin-top: 140px;
    background-color: #000;

    object-fit: cover;
    -o-object-fit: cover;

    background: linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.6) 100%),
            linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%);
  }

  @media(max-width: 752px) {
    .video-bg {
      position: absolute;
      width: 100%;
      height: 100%;
      margin-top: 128px;
    }
  }

  @media(max-width: 440px) {
    .video-bg {
      position: absolute;
      width: 100%;
      height: 100%;
      margin-top: 128px;
    }
  }

`

const ContainerLogo = styled.div`  
  .logo img {
    position: absolute;
    width: 44rem;
    right: 0;
    margin-right: 120px;
    margin-top: 240px;   
  }

  @media(max-width: 970px) {
    .logo img {
      margin: 240px 25px;
    }
  }

  @media(max-width: 670px) {
    .logo img {
      margin: 240px 25px;
    }
  }

  @media(max-width: 576px) {
    .logo img {
      display: flex;
      left: -90px;
    }
  }

  @media(max-width: 500px) {
    .logo img {
      display: none;
    }
  }
`;

const ContentTraillers = styled.div`
  width: 100%;
  max-width: 1050px;
  position: absolute;
  right: 0;
  bottom: 0;

    .video-thumb {
      padding: 0;
      max-width: 300px;
      height: 169px;
      position: relative;
      display: inline-block;
      z-index: 0;
      cursor: pointer;
      border: 2px solid #1e9de3;
      width: 100%;
      -webkit-transition: all .33s ease-in-out;
      transition: all .33s ease-in-out;
    }

    .video-still {
      display: block !important;
      width: 100%;
      position: relative;
      overflow: hidden;
      margin-bottom: 0;

        img {
          width: 300px;
        }
    }

    .play-btn-home {
      width: 75%;
      height: auto;
      position: absolute;
      bottom: calc(0% - 35px);
      left: 9%;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      justify-content: center;
      -webkit-box-orient: horizontal;
      -webkit-box-direction: normal;
      -ms-flex-direction: row;
      flex-direction: row;
      background-color: #377e9a;
      padding: 10px;
    }

    .play-btn {
      width: 50px;
      height: 50px;
      display: inline-block;
      border-right: 1px solid #46a3be;
      padding: 0;
      margin-right: 10px;
    }

    .trailler-title {
      text-transform: uppercase;
      font-family: Arial,sans-serif;
      text-shadow: none;
      font-weight: 700;
      font-size: .80em;
      color: #fff;
      text-align: center;
    }

    .video-border-decoration-top-left {
      position: absolute;
      top: -21.5px;
      left: -23.5px;
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }

    .video-border-decoration {
      opacity: 1;
      -webkit-transition: opacity .3s;
      transition: opacity .3s;
    }

    .video-border-decoration-top-right {
      position: absolute;
      top: -24.5px;
      right: -20px;
      -webkit-transform: rotate(90deg);
      transform: rotate(90deg);
    }

    .video-border-decoration {
      opacity: 1;
      -webkit-transition: opacity .3s;
      transition: opacity .3s;
    }
`;


