import React from 'react';

import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';

const Shortcuts = () => {
  return (
    <Container>
      <div className='container-hidden-image'>
        <div className='hidden-image'>
          <img src='' alt='' />
        </div>
      </div>
      <StyleHeader>
        <div className='text-header'>
          <Fade left>
            <h2>SHORTCUTS</h2>
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
            <Zoom>
              <div className='bg-history'>
                <div className='info-history'>
                  <div className='top-border'>
                    <span className='left-diamond'>
                      <img src='/assets/images/diamond.png' alt='/' />
                    </span>
                    <span className='right-diamond'>
                      <img src='/assets/images/diamond.png' alt='/' />
                    </span>            
                  </div>          
                    <div className='text-history'>
                      <span>Commands can be mapped to button shortcuts, enabling 
                      you to execute them in battle instantly, without having to 
                      access your commands menu. Employ your favorite abilities 
                      quickly and effortlessly so you can stay in the thick of 
                      the action.</span>         
                    </div>
                  </div>
              </div>
          </Zoom>
      </StyleHeader>        
    </Container>
  )
};

export default Shortcuts;

const Container = styled.div`
  width: 100%;
  height: 80%;
  max-height: 1100px;
  position: relative;

  animation-fill-mode: both;
  animation-duration: 1000ms;
  animation-delay: 0ms;
  animation-iteration-count: 1;
  opacity: 1;
  animation-name: react-reveal-607813993386296-1;

/*    .video-bg_2 {
    position: absolute;
    
    width: 100%;
    height: 1.3%;
    bottom: -26.6rem;
    background-color: #000;

    object-fit: cover;
    -o-object-fit: cover;

    background: linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.6) 100%),
            linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%);
  }

  @media(max-width: 1870px) {
    .video-bg_2 {
      bottom: -19.5rem;
    }
  }

  @media(max-width: 1100px) {
    .video-bg_2 {
      bottom: -19rem;
    }
  }

  @media(max-width: 750px) {
    .video-bg_2 {
      bottom: -19rem;
    }
  }

  @media(max-width: 660px) {
    .video-bg_2 {
      bottom: -19rem;
    }
  }

  @media(max-width: 640px) {
    .video-bg_2 {
      bottom: -20.2222rem;
    }
  }

  @media(max-width: 550px) {
    .video-bg_2 {
      bottom: -16rem;
    }
  }

  @media(max-width: 390px) {
    .video-bg_2 {
      bottom: -9.6rem;
    }
  }

  @media(max-width: 310px) {
    .video-bg_2 {
      bottom: -3.5rem;
    }
  }  */

  .container-hidden-image {

    background-image: url("/assets/images/bg_mechanics_shortcuts.jpg");
    background-position: center top;
    background-size: auto;
    background-repeat: no-repeat;
    background-color: rgb(0, 0, 0);
    position: relative;
    margin: 0;
    width: 100%;
    height: 80vh;
  }

  .hidden-image {  
    width: 100%;
    height: 80vh;
    
    img {      
      width: 100%;
      height: 100%;
      min-height: 85%;      
    }
  }

  @media(max-width: 1900px) {
    width: 100%;
    height: 500px;
  }

  @media(max-width: 1900px) {
    .hidden-image img {
      width: 100%;
      height: 800px;
      top: 180px;
    }
  }

  @media(max-width: 1100px) {
      z-index: 1;
      height: 500px;  
  }

  @media(max-width: 1100px) {
    .hidden-image img {
      width: 100%;
      height: 600px;
      top: 180px;
    }
  }

  @media(max-width: 750px) {
    .hidden-image {
      position: relative;
      margin-top: -8px;
    }
  }

  @media(max-width: 310px) {
    width: 100%;
    height: 500px;
  }
`;

const StyleHeader = styled.div`
  position: absolute;
  width: 100%;
  top: 0;
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
    top: 0;
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

  @media(max-width: 1850px) {
    .text-header {
      position: relative;
      margin-top: -500px;
    }
  }

  @media(max-width: 1850px) {
    position: relative;
    top: -11rem;
  }

  @media(max-width: 1100px) {
    position: relative;
  }

  @media(max-width: 1100px) {
    .text-header {
      position: relative;
      top: 0;
    }
  }

  @media(max-width: 750px) {
    .text-header {
      position: relative;
      top: 0;
    }
  }

  @media(max-width: 290px) {
    .text-header {
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

    @media(max-width: 1100px) {
      .border-bottom {
        width: 50%;
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
    top: 27rem;    
    width: 660px;
    height: 120px;
    -webkit-transition: all .33s ease-in-out;
    transition: all .33s ease-in-out;
  }

  @media(max-width: 1850px) {
    .bg-history {
      position: relative;
      top: 16rem;
      height: 140px;
    }
  }

  @media(max-width: 1100px) {
    .bg-history {
      position: relative;
      top: 18rem;
      height: 120px;
    }
  }

  @media(max-width: 640px) {
    .bg-history {
      width: 100%;
      position: relative;
      top: 18rem;
      height: 130px;
    }
  }

  @media(max-width: 600px) {
    .bg-history {
      width: 100%;
      position: relative;
      top: 18rem;
      height: 130px;
    }
  }

  @media(max-width: 550px) {
    .bg-history {
      top: 18rem;
      height: 130px;
    }
  }

  @media(max-width: 390px) {
    .bg-history {
      top: 18rem;
      height: 130px;
    }
  }

  @media(max-width: 310px) {
    .bg-history {
      top: 15rem;
      height: 170px;
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
      margin: 6px auto;
      color: #fff;
      font-size: 14px;
      text-align: center;
      font-family: MyriadPro-Cond,Arial,sans-serif;
    }
  }
`;

