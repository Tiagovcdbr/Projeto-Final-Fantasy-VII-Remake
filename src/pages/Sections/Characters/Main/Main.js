import React from 'react';
// import { Link } from 'react-router-dom';

import Header from '../../../../components/Header/Header';
import styled from 'styled-components';

const Main = () => {
  return (    
    <Container>
      <Header />
        <div className='container-hidden-image'>
          <div className='hidden-image'>
            <img src='assets/images/bg2_shinra.jpg' alt='/' />
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
                <img src='assets/cards/chara_thumb_cloud.png' alt='' />
              </div>
              <div className='character-thumbnail-1'>
                <img src='assets/cards/chara_thumb_aerith.png' alt='' />
              </div>
              <div className='character-thumbnail-2'>
                <img src='assets/cards/chara_thumb_tifa.png' alt='' />
              </div>
              <div className='character-thumbnail-3'>
                <img src='assets/cards/chara_thumb_barret.png' alt='' />
              </div>
              <div className='character-thumbnail-4'>
                <img src='assets/cards/chara_thumb_redxiii.png' alt='' />
              </div>
              <div className='character-thumbnail-5'>
                <img src='assets/cards/chara_thumb_jessie.png' alt='' />
              </div>
              <div className='character-thumbnail-6'>
                <img src='assets/cards/chara_thumb_wedge.png' alt='' />
              </div>
              <div className='character-thumbnail-7'>
                <img src='assets/cards/chara_thumb_biggs.png' alt='' />
              </div>
                <div className='division'></div>
              <div className='villains'>
              <div className='character-thumbnail-villain-8'>
              <img src='assets/cards/chara_thumb_sephiroth.png' alt='' />
              </div>
              <div className='character-thumbnail-villain-9'>
                <img src='assets/cards/chara_thumb_reno.png' alt='' />
              </div>
              <div className='character-thumbnail-villain-10'>
                <img src='assets/cards/chara_thumb_rude.png' alt='' />
              </div>
              <div className='character-thumbnail-villain-11'>
                <img src='assets/cards/chara_thumb_shinra.png' alt='' />
              </div>
              <div className='character-thumbnail-villain-12'>
                <img src='assets/cards/chara_thumb_heidegger.png' alt='' />
              </div>
              <div className='character-thumbnail-villain-13'>
                <img src='assets/cards/chara_thumb_rocche.png' alt='' />
              </div>
              <div className='character-thumbnail-villain-14'>
                <img src='assets/cards/chara_thumb_hojo.png' alt='' />
              </div>
              </div>
            </div>
           </div>        
        </StyleHeader>
    </Container>    
  )
};

export default Main;


const Container = styled.div`
  width: 100%;
  height: 100%;

  .container-hidden-image {
    margin: 0;
    width: 100%;
    height: 100%;
  }

  .hidden-image img {    
    width: 100%;
    height: 100%; 
    margin-top: 142px;
    
      @media(max-width: 1900px) {
      width: 100%;
      height: 100vh;
    }

    @media(max-width: 1900px) {
      .hidden-image img {
        width: 100%;
        height: 1550px;
        top: 180px;
      }
    }

    @media(max-width: 1100px) {
        z-index: 1;
        height: 100vh;
        margin-top: 550px;  
    }

    @media(max-width: 750px) {
      margin-top: 540px;
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
      margin-top: -90px;
    }
  }

  @media(max-width: 1900px) {
    position: relative;
    top: -50.5rem;
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

