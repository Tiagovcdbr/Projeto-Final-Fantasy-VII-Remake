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
            <img className='trailler-1' src='/assets/the-game-awards-2019-trailer-still.jpg' alt='/' />
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
          <div className='video-border-decoration-bottom-left'>
            <img className='video-border-decoration' src='/assets/trailer_frame_corner.png' alt='/' />
          </div>
          <div className='video-border-decoration-bottom-right'>
            <img className='video-border-decoration' src='/assets/trailer_frame_corner.png' alt='/' />
          </div>
        </div>
        <div className='video-thumb'>
          <div className='video-still'>
            <img src='/assets/tokyo-game-show-trailer-still.jpg' alt='/' />
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
          <div className='video-border-decoration-bottom-left'>
            <img className='video-border-decoration' src='/assets/trailer_frame_corner.png' alt='/' />
          </div>
          <div className='video-border-decoration-bottom-right'>
            <img className='video-border-decoration' src='/assets/trailer_frame_corner.png' alt='/' />
          </div>
        </div>
        <div className='video-thumb'>
          <div className='video-still'>
            <img src='/assets/e3-long-trailer-still.jpg' alt='/' />
          </div>
          <div className='play-btn-home'>
            <img className='play-btn' src='/assets/play_btn.png' alt='/' />
            <h3 className='trailler-title'>E3 2019 Trailer</h3>
          </div>
          <div className='video-border-decoration-top-left'>
            <img className='video-border-decoration' src='/assets/trailer_frame_corner.png' alt='/' />
          </div>
          <div className='video-border-decoration-top-right'>
            <img className='video-border-decoration' src='/assets/trailer_frame_corner.png' alt='/' />
          </div>
          <div className='video-border-decoration-bottom-left'>
            <img className='video-border-decoration' src='/assets/trailer_frame_corner.png' alt='/' />
          </div>
          <div className='video-border-decoration-bottom-right'>
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

  @media(max-width: 1100px) {
    .video-bg {
      position: absolute;
      width: 100%;
      height: 50%;
      margin-top: 142px;
    }
  }

  @media(max-width: 750px) {
    .video-bg {
      position: absolute;
      width: 100%;
      height: 50%;
      margin-top: 132px;
    }
  }

`

const ContainerLogo = styled.div`  
  .logo img {
    position: absolute;
    width: 44rem;
    right: 0;
    margin-right: 170px;
    margin-top: 200px;   
  }

  @media(max-width: 1100px) {
    .logo img {
      margin-top: 10px;
    }
  }

  @media(max-width: 964px) {
    .logo img {
      margin-top: 10px;
      margin-right: 120px;
    }
  }

  @media(max-width: 800px) {
    .logo img {
      margin-top: 10px;
      margin-right: 25px;
    }
  }

  @media(max-width: 730px) {
    .logo img {
      margin-top: 10px;
      margin-right: 50px;
    }
  }

  @media(max-width: 640px) {
    .logo img {
      margin-top: 10px;
      margin-right: -30px;
    }
  }

  @media(max-width: 580px) {
    .logo img {
      margin-top: 10px;
      margin-right: -50px;
    }
  }
`;

const ContentTraillers = styled.div`
  width: 100%;
  position: absolute;
  margin-left: -50px;
  bottom: 0;
  display: inline-block;
  
    .video-thumb {
      float: right;
      padding: 0;
      margin-left: 40px;
      max-width: 300px;
      width: 100%;
      height: 169px;
      position: relative;
      z-index: 0;
      cursor: pointer;
      border: 2px solid #1e9de3;
      -webkit-transition: all .33s ease-in-out;
      transition: all .33s ease-in-out;
    }

    @media(max-width: 1100px) {
      .video-thumb {
        position: relative;
        max-width: 500px;
        height: 280px;
        margin-top: 50px;
        top: 600px;
        margin-right: 220px;
        display: block;
        justify-content: space-around;
        -webkit-transition: all .33s ease-in-out;
        transition: all .33s ease-in-out;
      }
    }

    @media(max-width: 964px) {
      .video-thumb {
        position: relative;
        max-width: 500px;
        height: 280px;
        margin-top: 50px;
        top: 600px;
        margin-right: 180px;
        display: block;
        justify-content: space-around;
        -webkit-transition: all .33s ease-in-out;
        transition: all .33s ease-in-out;
      }
    }

    @media(max-width: 800px) {
      .video-thumb {
        position: relative;
        max-width: 500px;
        height: 280px;
        margin-top: 50px;
        top: 600px;
        margin-right: 90px;
        display: block;
        justify-content: space-around;
        -webkit-transition: all .33s ease-in-out;
        transition: all .33s ease-in-out;
      }
    }

    @media(max-width: 640px) {
      .video-thumb {
        position: relative;
        max-width: 500px;
        height: 280px;
        margin-top: 50px;
        top: 600px;
        margin-right: 15px;
        display: block;
        justify-content: space-around;
        -webkit-transition: all .33s ease-in-out;
        transition: all .33s ease-in-out;
      }
    }

    @media(max-width: 580px) {
      .video-thumb {
        position: relative;
        max-width: 500px;
        height: 280px;
        margin-top: 50px;
        top: 600px;
        align-items: center;
        justify-content: center;
        margin-right: -15px;
        display: block;
        justify-content: space-around;
        -webkit-transition: all .33s ease-in-out;
        transition: all .33s ease-in-out;
      }
    }

    @media(max-width: 550px) {
      .video-thumb {
        position: relative;
        max-width: 400px;
        height: 225px;
        margin-top: 50px;
        top: 400px;
        align-items: center;
        justify-content: center;
        margin-right: 20px;
        display: block;
        justify-content: space-around;
        -webkit-transition: all .33s ease-in-out;
        transition: all .33s ease-in-out;
      }
    }

    .video-still {
      overflow: hidden;
      display: block;
      width: 100%;
      position: relative;
      overflow: hidden;
      margin-bottom: 0;

        img {
          width: 100%;
        }
    }

    @media(max-width: 1100px) {
      .video-still { 
        width: 100%;           
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

    .video-border-decoration-bottom-left {
      position: absolute;
      bottom: -23.5px;
      left: -20px;
      -webkit-transform: rotate(270deg);
      transform: rotate(270deg);
    }

    .video-border-decoration {
      opacity: 1;
      -webkit-transition: opacity .3s;
      transition: opacity .3s;
    }


    .video-border-decoration-bottom-right {
      position: absolute;
      bottom: -20.5px;
      right: -22.5px;
      -webkit-transform: rotate(180deg);
      transform: rotate(180deg);
    }

    .video-border-decoration {
      opacity: 1;
      -webkit-transition: opacity .3s;
      transition: opacity .3s;
    }
`;


