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
      <StyleHeader>
        <div className='text-header'>
          <h2>Story</h2>
        </div>
        <div className='border-bottom'>
          <span className='left-diamond'>
            <img src='/assets/diamond_side_left.png' alt='/' />
          </span>
          <span className='center-diamond'>
            <img src='/assets/diamond.png' alt='/' />
          </span>
          <span className='right-diamond'>
            <img src='/assets/diamond_side_right.png' alt='/' />
          </span>
        </div>
        <div className='bg-history'>
          <div className='info-history'>
            <div className='top-border'>
              <span className='left-diamond'>
                <img src='/assets/diamond.png' alt='/' />
              </span>
              <span className='right-diamond'>
                <img src='/assets/diamond.png' alt='/' />
              </span>            
            </div>          
              <div className='text-history'>
                <span>Mako─the lifeblood of the planet and the fuel that powers the city of Midgar...</span>          
                <span></span>          
                <span></span>          
                <span></span>          
                <span></span>          
                <span></span>          
                <span></span>          
              </div>
            </div>
        </div>
      </StyleHeader>        
    </Container>
  )
};

export default HiddenPage;

const Container = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 65rem;

  .container-hidden-image {
    margin: 0;
    width: 100%;
    height: 100%;
  }

  .hidden-image img {    
    width: 100%;
    height: 100%;    
  }

  @media(max-width: 1900px) {
    width: 100%;
    height: 100vh;
    margin-top: 950px;
  }

  @media(max-width: 1900px) {
    .hidden-image img {
      width: 100%;
      height: 1300px;
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
`;

const StyleHeader = styled.div`
  position: absolute;
  width: 100%;
  bottom: 0;
  bottom: -650px;
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

  .bg-history {
    position: relative;
    margin: 0 auto;
    top: 37.5em;    
    width: 660px;
    height: 420px;
    -webkit-transition: all .50s ease-in-out;
      transition: all .50s ease-in-out;
  }

  @media(max-width: 1900px) {
    .bg-history {
      position: relative;
      top: 740px;
    }
  }

  @media(max-width: 1100px) {
    .bg-history {
      position: relative;
      top: 850px;
    }
  }

  @media(max-width: 640px) {
    .bg-history {
      width: 100%;
      position: relative;
      top: 850px;
    }
  }

  @media(max-width: 550px) {
    .bg-history {
      top: 700px;
    }
  }
  
   .info-history {
    position: relative;
    width: 100%; 
    height: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    -moz-box-align: center;
    align-items: center;
    -moz-box-pack: end;
    justify-content: flex-end;
  }

  .top-border {
    margin: 0 auto;
    width: 520px;
    height: 2px;
    position: relative;
    background-color: #1e9de3;       
  }

  @media(max-width: 640px) {
    .top-border {
      width: 79%;
    }
  }

  span.left-diamond img {
    opacity: 1;
    margin-top: -2px;
  }  

  .text-history {
    display: flex;
    flex-direction: column;
    width: 80%;
    height: 100%;
    max-width: 600px;
    margin: 0 auto;

    background: -webkit-linear-gradient(top,rgba(5,37,78,.5),rgba(5,37,78,.5) 75%,rgba(5,37,78,0));
    background: linear-gradient(180deg,rgba(5,37,78,.5) 0,rgba(5,37,78,.5) 75%,rgba(5,37,78,0));

    & span {
    position: relative;
    top: 2rem;
    margin: 0 auto;
    color: #fff;
    font-size: 14px;
    text-align: center;
    background: -webkit-linear-gradient(top,rgba(5,37,78,.5),rgba(5,37,78,.5) 75%,rgba(5,37,78,0));
    background: linear-gradient(180deg,rgba(5,37,78,.5) 0,rgba(5,37,78,.5) 75%,rgba(5,37,78,0));
    }
  }
`;

