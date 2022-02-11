import React from 'react'

import styled from 'styled-components';

const Trailers = () => {
  return (
    <Container>
      <div className='container-hidden-image'>
      <div className='hidden-image'>
        <img src='assets/images/bg_gallery_top.jpg' alt='' />
      </div>
    </div>
      <StyleHeader>
        <div className='text-header'>
          <h2>Trailers</h2>
        </div>
        <div className='border-bottom'>
          <span className='left-diamond'>
            <img src='/assets/images/diamond_side_left.png' alt='' />
          </span>
          <span className='center-diamond'>
            <img src='/assets/images/diamond.png' alt='' />
          </span>
          <span className='right-diamond'>
            <img src='/assets/images/diamond_side_right.png' alt='' />
          </span>
        </div>
        <div className='container-trailer'>
          <div className='session-trailer'>
            <div className='trailers'>
                
            </div>
          </div>
        </div>
      </StyleHeader>
    </Container>
  )
}

export default Trailers;

const Container = styled.div`
  width: 100%;
  height: 100%;

  @media(max-width: 1850px) {
    width: 100%;
    height: 500px;
  }

  @media(max-width: 1100px) {
      z-index: 1;
      height: 500px;      
  }

  @media(max-width: 750px) {
    max-width: 800px;
    margin-top: -10px;
  }

  @media(max-width: 310px) {
    width: 100%;
    height: 500px;
  }


  .container-hidden-image {
    margin-top: 142px;
    width: 100%;
    height: 100%;
  }

  .hidden-image img {    
    width: 100%;
    height: 100%;    
  }

  @media(max-width: 1850px) {
    .hidden-image img {
      width: 100%;
      height: 900px;
      
    }
  }

  @media(max-width: 1100px) {
    .hidden-image img {
      width: 100%;
      height: 900px;
    }
  }

  @media(max-width: 750px) {
    .hidden-image img {
      max-width: 800px;
      width: 100%;
      height: 860px;
    }
  }

`;

const StyleHeader = styled.div`
  width: 100%;
  height: 100%;   
  position: absolute;
  top: 11.4rem;  
  animation-fill-mode: both;
  animation-duration: 1000ms;
  animation-delay: 0ms;
  animation-iteration-count: 1;
  opacity: 1;
  animation-name: react-reveal-607813993386296-1;

  .text-header h2 {
    font-size: 1.7em;
    width: 100%;
    max-width: 1100px;
    text-align: center;
    margin: 0 auto;
    line-height: 1;
    display: block;
    position: relative;
    color: #fff;
    font-family: MyriadPro-Cond,Arial,sans-serif;
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
      margin-top: -500px;
    }
  }

  @media(max-width: 1100px) {
    .text-header h2 {
      display: none;
    }
  }

  .border-bottom {
    margin-top: 250px;
    height: 2px;
    width: 50%;
    margin: 0 auto;
    position: relative;
    background-color: #1e9de3;
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

  .container-trailer {
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    width: 100%;
    max-width: 1100px;
    margin: 0px auto;
    padding: 0px 20px;
  }

  .session-trailer {
    width: 100%;
    position: relative;
    margin-top: 0;
    -webkit-transition: all .33s ease-in-out;
    transition: all .33s ease-in-out;
    text-align: center;
  }

  .trailer {
    position: relative;
    width: calc(100% - 62px);
    margin: 30px auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }

`;