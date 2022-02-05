import React from 'react';
import styled from 'styled-components';

import { Link } from 'react-router-dom';

import Header from '../../../../components/Header/Header';

const Cloud = () => {
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
        src={"/assets/audio/Final Fantasy VII Remake Main Theme.m4a"}
        autoplay='1'
        loop                
      />
      <div className='container-hidden-image'>
        <div className='hidden-image'>
          <img src='assets/images/bg_characters_cloud.jpg' alt='/' />
        </div>
      </div>
    <StyleHeader>
        <div className='text-header'>
          <h2>Characters</h2>
        </div>
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
            </div>
          </div>
       </div>  
       <ContainerCharacter>
      <div className='container'>
        <div className='character-art'>
          <span className='lazy-image'>
            <img src='/assets/images/characters_full_cloud.png' alt='/' />
          </span>
        </div>
        <div className='character-text'>
          <h2 className='character-name'>
            <span className='first-name'>Cloud</span>
            &nbsp;strife
          </h2>
        </div>
      </div>
    </ContainerCharacter>     
    </StyleHeader>    
    </Container>
  )
};

export default Cloud;

const Container = styled.div`
  width: 100%;
  height: 100%;

  .video-bg_2 {
    position: absolute;
    
    width: 100%;
    height: 0.60%;
    bottom: -487px;
    background-color: #000;

    object-fit: cover;
    -o-object-fit: cover;

    background: linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.6) 100%),
            linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%);
  }

  .container-hidden-image {
    margin: 0;
    width: 100%;
    height: 100%;
  }

  .hidden-image img {    
    width: 100%;
    height: 1200px; 
    margin-top: 142px;
    background-size: contain;
    
      @media(max-width: 1900px) {
      width: 100%;
      height: 100vh;
    }

    @media(max-width: 1900px) {
      .hidden-image img {
        width: 100%;
        height: 100%;
      }
    }

    @media(max-width: 1100px) {
        z-index: 1;
        height: 100vh;
        margin-top: 142px;  
    }

    @media(max-width: 790px) {
        z-index: 1;
        height: 100vh;     
    }

    @media(max-width: 750px) {
      margin-top: 133px;
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
    font-size: 2em;
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
`;

const ContainerCharacter = styled.div`
  width: 100%;
  max-width: 1100px;
  z-index: 0;
  position: relative;

  .container {
    display: flex;
    flex-direction: column;
    -moz-box-align: center;
    align-items: center;
    -moz-box-pack: center;
    justify-content: center;
    flex-wrap: wrap;
    text-align: left;
    padding: 0px 20px 20px;
    max-width: 1100px;
    width: 100%;
    margin-left: calc(100% - 1100px);
    position: relative;
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
    top: -70px;
    z-index: 0;
    right: -60%;
    position: absolute;
  }
  
  .lazy-image {
    width: 100%;
    height: 100%;
    color: transparent;
    display: inline-block;

    img {
      width: 90%;
      margin-top: 50px;
    }
  }

  .character-text {
    position: relative;
    color: #fff;
    text-align: left;
    left: 48rem;
    top: -50px;

    width: 60%;
    z-index: 1;
    padding-bottom: 50px;
    -ms-flex-item-align: start;
    align-self: flex-start;
    -webkit-transition: opacity .4s ease-in-out .55s,-webkit-transform .4s ease-in-out .55s;
    transition: opacity .4s ease-in-out .55s,-webkit-transform .4s ease-in-out .55s;
    transition: transform .4s ease-in-out .55s,opacity .4s ease-in-out .55s;
    transition: transform .4s ease-in-out .55s,opacity .4s ease-in-out .55s,-webkit-transform .4s ease-in-out .55s;
    margin: 30% auto;
  }

  .character-name {
    font-size: 2em;
    width: auto;
    max-width: 1100px;
    margin: 0 0 30px;
    color: #fff;
    text-align: left;
    line-height: 1;
    display: inline-block;
    text-transform: none;
    padding: 10px 20px;
    overflow: hidden;
    z-index: 0;
    font-weight: 600;
    text-shadow: 2px 2px 4px #000;    
  }

  
.character-name::after, .character-name::before {
      width: 30%;
      content: "";
      display: block;
      position: absolute;    
      bottom: 0;
      margin: 80px 10px;
}

    .character-name::before {
      height: 2px;
      bottom: 0;
      background: linear-gradient(90deg,rgba(129,205,243,0) 0,#81cdf3 25%,#81cdf3 75%,rgba(129,205,243,0));
    }

      .character-name::after {
      height: 100px;
      bottom: -20%;
      z-index: -1;
      background-color: rgba(0,0,0,0);
      background-position-x: 0%;
      background-position-y: 0%;
      background-repeat: repeat;
      background-attachment: scroll;
      background-image: radial-gradient(rgb(13,149,255) 0px,rgba(13,149,255,0) 60%);
      background-size: auto;
      background-origin: padding-box;
      background-clip: border-box;
    }

  .first-name {
    font-size: 1.5em;
  }
`;
