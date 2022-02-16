import React from 'react';
import styled from 'styled-components';

import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import { Link } from 'react-router-dom';

import Header from '../../../../components/Header/Header';

const Rocche = () => {
  return (
    <Container>
      <Header />
      <video
        className='video-bg_2'
        src={"/assets/video/lifestream.mp4"}
        autoplay='1'
        allowfullscreen="1"
        loop    
      />
      <audio
        src={"/assets/audio/not an Ignition Flame.m4a"}
        autoplay='1'
        loop                
      />
      <div className='container-hidden-image'>
        <div className='hidden-image'>
          <img src='assets/images/bg_characters_tifa.jpg' alt='/' />
        </div>
      </div>
    <StyleHeader>
        <div className='text-header'>
          <Fade left>
            <h2>Characters</h2>
          </Fade>
        </div>
          <Fade left>
            <div className='border-bottom'>
              <span className='left-diamond'>
                <img src='/assets/images/diamond_side_left.png' alt='/' />
              </span>
              <span className='center-diamond'>
                <img src='/assets/images/diamond.png' alt='/' />
              </span>
              <span className='right-diamond'>
                <img src='/assets/images/diamond_side_right.png' alt='/' />
              </span>
            </div>
          </Fade>
       <div className='container-characters'>
          <div className='heroes'>
            <div className='character-thumbnail-0'>
              <Link to="/cloud" style={{ textDecoration: 'none' }}>
                <img src='assets/cards/chara_thumb_cloud.png' alt='' />
              </Link>
            </div>
            <div className='character-thumbnail-1'>
              <Link to="/aerith" style={{ textDecoration: 'none' }}>
                <img src='assets/cards/chara_thumb_aerith.png' alt='' />
              </Link>
            </div>
            <div className='character-thumbnail-2'>
              <Link to="/tifa" style={{ textDecoration: 'none' }}>
                <img src='assets/cards/chara_thumb_tifa.png' alt='' />
              </Link>
            </div>
            <div className='character-thumbnail-3'>
              <Link to="/barret" style={{ textDecoration: 'none' }}>
                <img src='assets/cards/chara_thumb_barret.png' alt='' />
              </Link>
            </div>
            <div className='character-thumbnail-4'>
              <Link to="/redxiii" style={{ textDecoration: 'none' }}>
                <img src='assets/cards/chara_thumb_redxiii.png' alt='' />
              </Link>
            </div>
            <div className='character-thumbnail-5'>
              <Link to="/jessie" style={{ textDecoration: 'none' }}>
                <img src='assets/cards/chara_thumb_jessie.png' alt='' />
              </Link>
            </div>
            <div className='character-thumbnail-6'>
              <Link to="/wedge" style={{ textDecoration: 'none' }}>
                <img src='assets/cards/chara_thumb_wedge.png' alt='' />
              </Link>
            </div>
            <div className='character-thumbnail-7'>
              <Link to="/biggs" style={{ textDecoration: 'none' }}>
                <img src='assets/cards/chara_thumb_biggs.png' alt='' />
              </Link>
            </div>
              <div className='division'></div>
            <div className='villains'>
            <div className='character-thumbnail-villain-8'>
              <Link to="/sephiroth" style={{ textDecoration: 'none' }}>
                <img src='assets/cards/chara_thumb_sephiroth.png' alt='' />
              </Link>
            </div>
            <div className='character-thumbnail-villain-9'>
              <Link to="/reno" style={{ textDecoration: 'none' }}>
                <img src='assets/cards/chara_thumb_reno.png' alt='' />
              </Link>
            </div>
            <div className='character-thumbnail-villain-10'>
              <Link to="/rude" style={{ textDecoration: 'none' }}>
                <img src='assets/cards/chara_thumb_rude.png' alt='' />
              </Link>
            </div>
            <div className='character-thumbnail-villain-11'>
              <Link to="/president" style={{ textDecoration: 'none' }}>
                <img src='assets/cards/chara_thumb_shinra.png' alt='' />
              </Link>
            </div>
            <div className='character-thumbnail-villain-12'>
              <Link to="/heidegger" style={{ textDecoration: 'none' }}>
                <img src='assets/cards/chara_thumb_heidegger.png' alt='' />
              </Link>
            </div>
            <div className='character-thumbnail-villain-13'>
              <Link to="/rocche" style={{ textDecoration: 'none' }}>
                <img src='assets/cards/chara_thumb_rocche.png' alt='' />
              </Link>
            </div>
            <div className='character-thumbnail-villain-14'>
              <Link to="/hojo" style={{ textDecoration: 'none' }}>
                <img src='assets/cards/chara_thumb_hojo.png' alt='' />
              </Link>
            </div>
            <div className='character-thumbnail-villain-15'>
              <Link to="/rufus" style={{ textDecoration: 'none' }}>
                <img src='assets/cards/characters_full_rufus.png' alt='' />
              </Link>
            </div>
            </div>
          </div>
       </div>  
       <ContainerCharacter>
        <div className='container'>
          <div className='character-art'>
            <span className='lazy-image'>
              <Fade left>
                <img src='/assets/images/characters_full_rocche.png' alt='/' />
              </Fade>
            </span>
          </div>
          <div className='character-text'>
            <Fade left>
              <h2 className='character-name'>
                <span className='first-name'>Rocche</span>
                &nbsp;
              </h2>
            </Fade>
              <Fade left>
                <div className='character-bio'>A 3-C SOLDIER operator who loves bikes, speed, and anyone capable of going toe-to-toe with him. A demon on wheels, he is ostracized by many in the organization due to his antics and general disregard for anyone's safety.
                  <span className='top-diamond'>
                    <img src='/assets/images/diamond.png' alt='/' />
                  </span>
                  <span className='bottom-diamond'>
                    <img src='/assets/images/diamond.png' alt='/' />
                  </span>
                </div>
              </Fade> 
            <div className='character-screenshots' >
              <Zoom>
                <div className='space'>
                  <div className='video-thumb-screenshot'>
                    <div className='video-still-house'>
                      <img className='video-thumb-still' src='/assets/images/chara_rocche_screen_01.jpg' alt='/' />
                    </div>
                    <span className='video-border-top-left'>
                      <img src='/assets/images/trailer_frame_corner.png' alt='/' />
                    </span>
                    <span className='video-border-top-right'>
                      <img src='/assets/images/trailer_frame_corner.png' alt='/' />
                    </span>
                    <span className='video-border-bottom-left'>
                      <img src='/assets/images/trailer_frame_corner.png' alt='/' />
                    </span>
                    <span className='video-border-bottom-right'>
                      <img src='/assets/images/trailer_frame_corner.png' alt='/' />
                    </span>
                  </div>
                  <div className='video-thumb-screenshot-2'>
                    <div className='video-still-house'>
                      <img className='video-thumb-still' src='/assets/images/chara_rocche_screen_02.jpg' alt='/' />
                    </div>
                    <span className='video-border-top-left'>
                      <img src='/assets/images/trailer_frame_corner.png' alt='/' />
                    </span>
                    <span className='video-border-top-right'>
                      <img src='/assets/images/trailer_frame_corner.png' alt='/' />
                    </span>
                    <span className='video-border-bottom-left'>
                      <img src='/assets/images/trailer_frame_corner.png' alt='/' />
                    </span>
                    <span className='video-border-bottom-right'>
                      <img src='/assets/images/trailer_frame_corner.png' alt='/' />
                    </span>
                  </div>
                </div> 
              </Zoom>
            </div>          
          </div>
        </div>
        <div className='character-profile'>
          <span className='image-background'>
            <img src='' alt='' />
          </span>
        </div>
    </ContainerCharacter>     
    </StyleHeader>    
    </Container>
  )
};

export default Rocche;

const Container = styled.div`
  width: 100%;
  height: 100%;

  .video-bg_2 {
    position: absolute;
    
    width: 100%;
    height: 0.60%;
    bottom: -41.4rem;
    background-color: #000;

    object-fit: cover;
    -o-object-fit: cover;

    background: linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.6) 100%),
            linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%);
  }

  @media(max-width: 1850px) {
    .video-bg_2 {
      bottom: -44.8rem;
    }
  }

  @media(max-width: 460px) {
    .video-bg_2 {
      bottom: -44.9rem;
    }
  }

  .container-hidden-image {
    margin: 0;
    width: 100%;
    height: 100%;
  }

  .hidden-image img {    
    width: 100%;
    height: 1375px; 
    margin-top: 142px;
    background-size: contain;
    
      @media(max-width: 1900px) {
      width: 100%;      
    }

    @media(max-width: 1900px) {
      .hidden-image img {
        width: 100%;       
      }
    }

    @media(max-width: 1100px) {
        width: 100%;
    }

    @media(max-width: 790px) {
        z-index: 1;  
    }

    @media(max-width: 750px) {
      margin-top: 133px;
    }
  }

  @media(max-width: 750px) {
      .hidden-image img {
        width: 100%;
        height: 1385px;
      }
    }
`;

const StyleHeader = styled.div`
  position: absolute;
  width: 100%;
  bottom: 0;
  top: 182px;
  animation-fill-mode: both;
  animation-duration: 1000ms;
  animation-delay: 0ms;
  animation-iteration-count: 1;
  opacity: 1;
  animation-name: react-reveal-607813993386296-1;

  .text-header h2 {
    font-size: 1.8em;
    width: 100%;
    max-width: 1100px;
    text-align: center;
    margin: 0 auto;
    line-height: 1;
    display: block;
    position: relative;
    color: #fff;
    text-transform: uppercase;
    padding: 10px 20px 5px;
    text-shadow: -1px -1px 4px #ff004f,-2px -2px 4px #000;
    overflow: hidden;
    z-index: 0;
    font-weight: 300;
    background: -webkit-linear-gradient(left,rgba(8,19,32,0),#081320 25%,#081320 75%,rgba(8,19,32,0));
    background: linear-gradient(90deg,rgba(8,19,32,0) 0,#081320 25%,#081320 75%,rgba(8,19,32,0));

    &::after {
        content: "";
        display: block;
        position: absolute;
        width: 50%;
        height: 100%;
        bottom: -50%;
        left: 25%;
        z-index: -1;
        
        background: -webkit-radial-gradient(center,ellipse cover,#0d95ff 0,rgba(13,149,255,0) 60%);
        background: -webkit-radial-gradient(center,ellipse,#0d95ff 0,rgba(13,149,255,0) 60%);
        background: radial-gradient(ellipse at center,#0d95ff 0,rgba(13,149,255,0) 60%);
        background-color: rgba(0, 0, 0, 0);
        background-position-x: 0%;
        background-position-y: 0%;
        background-repeat: repeat;
        background-attachment: scroll;
        background-image: radial-gradient(rgb(13, 149, 255) 0px, rgba(13, 149, 255, 0) 60%);
        background-size: auto;
        background-origin: padding-box;
        background-clip: border-box;
      }
  }

  @media(max-width: 1900px) {
    .text-header {
      position: relative;
      margin-top: -115px;
    }
  }

  @media(max-width: 1900px) {
    position: absolute;
    top: 18.6rem;
  }

  @media(max-width: 1100px) {
    .text-header h2 {
      display: none;
    }
  }

  .border-bottom {
    height: 2px;
    width: 50%;
    margin: 0 auto;
    position: relative;
    background-color: #1e9de3;
  }

    @media(max-width: 1100px) {
      .border-bottom {
        display: none;
      }
    }

  .left-diamond img {
    position: absolute;
    margin-left: -22px;
    top: -15px;

    background: radial-gradient(ellipse at center,#0d95ff 0,rgba(13,149,255,0) 60%);
    background-color: rgba(0, 0, 0, 0);
    background-position-x: 0%;
    background-position-y: 0%;
    background-repeat: repeat;
    background-attachment: scroll;
    background-image: radial-gradient(rgb(13, 149, 255) 0px, rgba(13, 149, 255, 0) 60%);
    background-size: auto;
    background-origin: padding-box;
    background-clip: border-box;
  }

  .center-diamond img {
    left: calc(50% - 19.5px);
    position: relative;
    align-items: center;
    justify-items: center;
    top: -16px;

    background: radial-gradient(ellipse at center,#0d95ff 0,rgba(13,149,255,0) 60%);
    background-color: rgba(0, 0, 0, 0);
    background-position-x: 0%;
    background-position-y: 0%;
    background-repeat: repeat;
    background-attachment: scroll;
    background-image: radial-gradient(rgb(13, 149, 255) 0px, rgba(13, 149, 255, 0) 60%);
    background-size: auto;
    background-origin: padding-box;
    background-clip: border-box;
  }

  .right-diamond img {
    position: absolute;
    right: -20px;
    top: -16px;

    background: radial-gradient(ellipse at center,#0d95ff 0,rgba(13,149,255,0) 60%);
    background-color: rgba(0, 0, 0, 0);
    background-position-x: 0%;
    background-position-y: 0%;
    background-repeat: repeat;
    background-attachment: scroll;
    background-image: radial-gradient(rgb(13, 149, 255) 0px, rgba(13, 149, 255, 0) 60%);
    background-size: auto;
    background-origin: padding-box;
    background-clip: border-box;
  }

  .container-characters {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    position: relative;
    z-index: 1;
    flex-wrap: wrap;
    margin-top: 50px;
  }

  @media(max-width: 1100px) {
    width: 100%;
  }

  @media(max-width: 750px) {
    width: 100%;
  }

  .heroes {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    z-index: 1;
    flex-wrap: wrap;

    img {
      display: block;
      width: 100%;
    }
  }

  .character-thumbnail-0 {
    border: 4px solid #1e9de3;

    cursor: pointer;
    margin: 10px;
    border: 4px solid #95d7f8;
    background-color: #000;
    position: relative;
    max-width: 70px;

    &:hover {
      background-color: #439bb5;
      transition: all .33s ease-in-out;
    }
  }

  .character-thumbnail-1 {
    border: 4px solid #1e9de3;

    cursor: pointer;
    margin: 10px;
    border: 4px solid #95d7f8;
    background-color: #000;
    position: relative;
    max-width: 70px;

    &:hover {
      background-color: #439bb5;
      transition: all .33s ease-in-out;
    }
  }

  .character-thumbnail-2 {
    border: 4px solid #1e9de3;

    cursor: pointer;
    margin: 10px;
    border: 4px solid #95d7f8;
    background-color: #000;
    position: relative;
    max-width: 70px;

    &:hover {
      background-color: #439bb5;
      transition: all .33s ease-in-out;
    }
  }

  .character-thumbnail-3 {
    border: 4px solid #1e9de3;

    cursor: pointer;
    margin: 10px;
    border: 4px solid #95d7f8;
    background-color: #000;
    position: relative;
    max-width: 70px;

    &:hover {
      background-color: #439bb5;
      transition: all .33s ease-in-out;
    }
  }

  .character-thumbnail-4 {
    border: 4px solid #1e9de3;

    cursor: pointer;
    margin: 10px;
    border: 4px solid #95d7f8;
    background-color: #000;
    position: relative;
    max-width: 70px;

    &:hover {
      background-color: #439bb5;
      transition: all .33s ease-in-out;
    }
  }

  .character-thumbnail-5 {
    border: 4px solid #1e9de3;

    cursor: pointer;
    margin: 10px;
    border: 4px solid #95d7f8;
    background-color: #000;
    position: relative;
    max-width: 70px;

    &:hover {
      background-color: #439bb5;
      transition: all .33s ease-in-out;
    }
  }

  .character-thumbnail-6 {
    border: 4px solid #1e9de3;

    cursor: pointer;
    margin: 10px;
    border: 4px solid #95d7f8;
    background-color: #000;
    position: relative;
    max-width: 70px;

    &:hover {
      background-color: #439bb5;
      transition: all .33s ease-in-out;
    }
  }

  .character-thumbnail-7 {
    border: 4px solid #1e9de3;

    cursor: pointer;
    margin: 10px;
    border: 4px solid #95d7f8;
    background-color: #000;
    position: relative;
    max-width: 70px;

    &:hover {
      background-color: #439bb5;
      transition: all .33s ease-in-out;
    }
  }

  .division {
    width: 100%;
    text-align: center;
  }

  .villains {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    z-index: 1;
    flex-wrap: wrap;
  }

  .character-thumbnail-villain-8 {
    border: 4px solid #808d8d;

    cursor: pointer;
    display: flex;
    margin: 10px;
    align-items: center;
    justify-content: center;
    background-color: #000;
    position: relative;
    max-width: 70px;
    z-index: 1;
    flex-wrap: wrap;

    &:hover {
      background-color: rgb(31, 156, 134);
      transition: all .33s ease-in-out;
    }
  }

  .character-thumbnail-villain-9 {
    border: 4px solid #808d8d;

    cursor: pointer;
    display: flex;
    margin: 10px;
    align-items: center;
    justify-content: center;
    background-color: #000;
    position: relative;
    max-width: 70px;
    z-index: 1;
    flex-wrap: wrap;

    &:hover {
      background-color: rgb(31, 156, 134);
      transition: all .33s ease-in-out;
    }
  }

  .character-thumbnail-villain-10 {
    border: 4px solid #808d8d;

    cursor: pointer;
    display: flex;
    margin: 10px;
    align-items: center;
    justify-content: center;
    background-color: #000;
    position: relative;
    max-width: 70px;
    z-index: 1;
    flex-wrap: wrap;

    &:hover {
      background-color: rgb(31, 156, 134);
      transition: all .33s ease-in-out;
    }
  }

  .character-thumbnail-villain-11 {
    border: 4px solid #808d8d;

    cursor: pointer;
    display: flex;
    margin: 10px;
    align-items: center;
    justify-content: center;
    background-color: #000;
    position: relative;
    max-width: 70px;
    z-index: 1;
    flex-wrap: wrap;

    &:hover {
      background-color: rgb(31, 156, 134);
      transition: all .33s ease-in-out;
    }
  }

  .character-thumbnail-villain-12 {
    border: 4px solid #808d8d;

    cursor: pointer;
    display: flex;
    margin: 10px;
    align-items: center;
    justify-content: center;
    background-color: #000;
    position: relative;
    max-width: 70px;
    z-index: 1;
    flex-wrap: wrap;

    &:hover {
      background-color: rgb(31, 156, 134);
      transition: all .33s ease-in-out;
    }
  }

  .character-thumbnail-villain-13 {
    border: 4px solid #808d8d;

    cursor: pointer;
    display: flex;
    margin: 10px;
    align-items: center;
    justify-content: center;
    background-color: #000;
    position: relative;
    max-width: 70px;
    z-index: 1;
    flex-wrap: wrap;

    &:hover {
      background-color: rgb(31, 156, 134);
      transition: all .33s ease-in-out;
    }
  }

  .character-thumbnail-villain-14 {
    border: 4px solid #808d8d;

    cursor: pointer;
    display: flex;
    margin: 10px;
    align-items: center;
    justify-content: center;
    background-color: #000;
    position: relative;
    max-width: 70px;
    z-index: 1;
    flex-wrap: wrap;

    &:hover {
      background-color: rgb(31, 156, 134);
      transition: all .33s ease-in-out;
    }
  }

  .character-thumbnail-villain-15 {
    border: 4px solid #808d8d;

    cursor: pointer;
    display: flex;
    margin: 10px;
    align-items: center;
    justify-content: center;
    background-color: #000;
    position: relative;
    max-width: 70px;
    z-index: 1;
    flex-wrap: wrap;

    &:hover {
      background-color: rgb(31, 156, 134);
      transition: all .33s ease-in-out;
    }
  }
`;

const ContainerCharacter = styled.div`
  width: 100%;
  z-index: 0;
  position: relative;

  .container {
    max-width: 1100px;
    display: flex;
    width: 50%;
    -moz-box-align: center;
    flex-wrap: wrap;
    padding: 0px 20px 20px;
    
    width: 100%;
    margin-left: calc(100% - 1100px);
    position: relative;
    transition: 0.5s ease-in-out;
  }

  .character-art {
    width: 50%;
    text-align: center;
    -ms-flex-item-align: center;
    align-self: center;
    -webkit-transition: opacity 1.4s ease-in-out 1.6s,-webkit-transform 1.4s ease-in-out 1.6s;
    transition: opacity 1.4s ease-in-out 1.6s,-webkit-transform 1.4s ease-in-out 1.6s;
    transition: transform 1.4s ease-in-out 1.6s,opacity 1.4s ease-in-out 1.6s;
    transition: transform 1.4s ease-in-out 1.6s,opacity 1.4s ease-in-out 1.6s,-webkit-transform 1.4s ease-in-out 1.6s;
    top: -45px;
    z-index: 0;
    right: 10%;
    position: absolute;
  }

  @media(max-width: 930px) {
    .character-art {
      right: -250px;
    }
  }

  @media(max-width: 930px) {
    .character-art {
      right: -170px;
    }
  }

  @media(max-width: 670px) {
    .character-art {
      right: -250px;
    }
  }

  @media(max-width: 600px) {
    .character-art {
      display: none;
    }
  }
  
  .lazy-image {
    width: 100%;
    height: 100%;
    color: transparent;
    display: inline-block;

    img {
      width: 100%;
      margin-top: 50px;
    }
  }

  .character-text {
    position: relative;
    top: 310px;
    left: 200px;
    font-family: MyriadPro-Cond,Arial,sans-serif;
    color: #fff;
    text-align: left;
    width: 60%;
    height: 550px;
    z-index: 1;
    -ms-flex-item-align: start;
    align-self: flex-start;
    -webkit-transition: opacity .4s ease-in-out .55s,-webkit-transform .4s ease-in-out .55s;
    transition: opacity .4s ease-in-out .55s,-webkit-transform .4s ease-in-out .55s;
    transition: transform .4s ease-in-out .55s,opacity .4s ease-in-out .55s;
    transition: transform .4s ease-in-out .55s,opacity .4s ease-in-out .55s,-webkit-transform .4s ease-in-out .55s;
  }

  @media(max-width: 930px) {
    .character-text {
      left: 450px;
    }
  }

  @media(max-width: 640px) {
    .character-text {
      margin-left: 180px;
    }
  }

  @media(max-width: 460px) {
    .character-text {
      display: none;
    }
  }

  .character-name {
    font-size: 1.7em;
    font-family: MyriadPro-Cond,Arial,sans-serif;
    width: auto;
    max-width: 1100px;
    margin: 0 30px;
    color: #fff;
    text-align: left;
    margin-left: -5px;
    line-height: 1;
    display: inline-block;
    text-transform: none;
    padding: 10px 20px;
    overflow: hidden;
    z-index: 0;
    font-weight: 600;
    transform: scaleY(1.2);
    text-shadow: 2px 2px 4px #000; 
  }

  
  .character-name::after, .character-name::before {
      width: 100%;
      content: "";
      display: block;
      position: absolute;    
  }

    .character-name::before {
      height: 2px;
      bottom: 0;
      margin-left: -20px;
      background: linear-gradient(120deg,rgba(129,205,243,0) 0,#81cdf3 25%,#81cdf3 65%,rgba(129,205,243,0));
    }

      .character-name::after {
      height: 100px;
      bottom: -80%;
      z-index: 1;
      background-color: rgba(0,0,0,0);
      background-position-x: 0%;
      background-position-y: 0%;
      background-repeat: repeat;
      background-attachment: scroll;
      background-image: radial-gradient(rgb(13, 149, 255) 0px, rgba(13, 149, 255, 0) 60%);
      background-size: auto;
      background-origin: padding-box;
      background-clip: border-box;
      margin-left: -20px;
    }

  .first-name {
    font-size: 1.7em;
  }

  .character-bio {
    top: 50px;
    font-size: 1em;
    border-left: 2px;
    max-width: 800px;

    background: linear-gradient(90deg,#05254e 0,rgba(5,37,78,0));

    padding: 20px;
    border-left: 2px solid #1e9de3;transition: transform .33s ease-in-out .66s,opacity .33s ease-in-out .66s,-webkit-transform .33s ease-in-out .66s;
    position: relative; 

    .top-diamond {
      position: absolute;
      width: 35px;
      height: 35px;
      left: 0;
      margin-left: -19px;
      top: 0;
      margin-top: -20px;
    }

    .bottom-diamond {
      position: absolute;
      width: 35px;
      height: 35px;
      left: 0;
      margin-left: -19px;
      bottom: 0;
      margin-bottom: -20px;
    }
  }

  .character-screenshots {
      width: 90%;
      margin-top: 80px;
    }

    .space {
      position: relative;
      width: calc(100% - 52px);
      margin: 30px auto;
      display: flex;
      flex-wrap: wrap;
    }

    .video-thumb-screenshot {
      width: calc(50% - 10px);
      padding: 0;
      max-width: 470px;
      margin: 0 auto;
      left: 10px;
      position: relative;
      display: inline-block;
      z-Index: 0;
      cursor: pointer;
      border: 2px solid #27a7d1;
      margin-bottom: 10px;
    }

    .video-still-house {
      display: block !important;
      width: 100%;
      padding-top: 56.25%;
      position: relative;
      overflow: hidden;
      margin-bottom: 0;
    }

    .video-thumb-still {
      width: 100%;
      position: absolute;
      top: 0;
      left: 0;
      margin-right: -10px;
      min-height: 1px;
      display: block;
      transition: all .33s ease-in-out !important;
    }

    .video-border-top-left {
      position: absolute;
      display: block !important;
      height: 39px;
      width: 39px;
      left: 0;
      margin-left: -22px;
      top: 0;
      margin-top: -22px;
    }

    .video-border-top-right {
      position: absolute;
      display: block !important;
      height: 39px;
      width: 39px;
      right: 0;
      margin-right: -21px;
      top: 0;
      margin-top: -23px;
      transform: rotate(90deg);
    }

    .video-border-bottom-left {
      position: absolute;
      display: block !important;
      height: 39px;
      width: 39px;
      bottom: -22px;
      left: -22px;
      transform: rotate(270deg);
    }

    .video-border-bottom-right {
      position: absolute;
      display: block !important;
      height: 39px;
      width: 39px;
      bottom: -20.5px;
      right: -23.5px;
      transform: rotate(180deg);
    }

    .video-thumb-screenshot-2 {
      width: calc(50% - 10px);
      padding: 0;
      max-width: 470px;
      margin: 0 auto;
      margin-right: -50px;
      position: relative;
      display: inline-block;
      z-Index: 0;
      cursor: pointer;
      border: 2px solid #27a7d1;
      margin-bottom: 10px;
    }

    .video-still-house {
      display: block !important;
      width: 100%;
      padding-top: 56.25%;
      position: relative;
      overflow: hidden;
      margin-bottom: 0;
    }

    .video-thumb-still {
      width: 100%;
      position: absolute;
      top: 0;
      left: 0;
      margin-right: -10px;
      min-height: 1px;
      display: block;
      transition: all .33s ease-in-out !important;
    }

    .video-border-top-left {
      position: absolute;
      display: block !important;
      height: 39px;
      width: 39px;
      left: 0;
      margin-left: -22px;
      top: 0;
      margin-top: -22px;
    }

    .video-border-top-right {
      position: absolute;
      display: block !important;
      height: 39px;
      width: 39px;
      right: 0;
      margin-right: -21px;
      top: 0;
      margin-top: -23px;
      transform: rotate(90deg);
    }

    .video-border-bottom-left {
      position: absolute;
      display: block !important;
      height: 39px;
      width: 39px;
      bottom: -22px;
      left: -22px;
      transform: rotate(270deg);
    }

    .video-border-bottom-right {
      position: absolute;
      display: block !important;
      height: 39px;
      width: 39px;
      bottom: -20.5px;
      right: -23.5px;
      transform: rotate(180deg);
    }

    .character-profile {
      position: absolute;
      width: 50%;
      top: -50px;
      left: 0;
      max-width: 817px;
      z-index: -1;
    }

    @media(max-width: 1100px) {
      .character-profile {
        position: absolute;
        width: 100%;
      }
    }

    @media(max-width: 605px) {
      .character-profile {
        overflow: hidden;
        max-width: 450px;
      }
    }

    @media(max-width: 460px) {
      .character-profile {
        overflow: hidden;
        max-width: 370px;
      }
    }

    @media(max-width: 300px) {
      .character-profile {
        display: none;
      }
    }

    .image-background {
      color: transparent;
      display: inline-block;
    }

    @media(max-width: 605px) {
      .image-background {
        img {
          width: 100px;
        }
      }
    }

    @media(max-width: 280px) {
      .character-profile {
        display: none;
      }
    }

    @media(max-width: 1100px) {
      .image-background img {
        width: 600px;
        margin-top: 40px;
      }
    }  
`;
