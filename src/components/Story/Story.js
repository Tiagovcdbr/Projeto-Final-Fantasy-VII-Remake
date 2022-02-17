import React from 'react';

import Fade from 'react-reveal/Fade';
import styled from 'styled-components';

const Story = () => {
  return (
    <Container>
      <div className='container-hidden-image'>
        <div className='hidden-image'>
          <img src='assets/images/bg_story_top.jpg' alt='/' />
        </div>
      </div>
      <StyleHeader>
        <div className='text-header'>
        <Fade left>
          <h2>Story</h2>
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
        <Fade left>
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
                  <span>Mako─the lifeblood of the planet and the fuel that powers the city of Midgar...</span>
                          
                  <span>By exploiting this resource through their Mako Reactors, the Shinra Electric Power
                  Company has all but seized control of the entire world. A ragtag group of idealists, known
                  as Avalanche, are one of the last bastions of resistance.</span> 

                  <span>Cloud, an elite SOLDIER operative turned mercenary, takes part in an Avalanche operation 
                  to destroy Mako Reactor 1 in the city of Midgar.</span> 

                  <span>The bombing plunges the city into fiery chaos, and amidst the raging inferno, Cloud is 
                  tormented by visions of a bitter enemy long thought dead.</span> 

                  <span>After this hallucination fades, he meets a young woman selling flowers, who offers him a single yellow blossom. </span>   
                        
                  <span>In that instant, a host of swirling shadows surround them.</span>  

                  <span>Once more begins a story that will shape the destiny of an entire world.</span>          
              </div>
            </div>
          </div>
        </Fade>
      </StyleHeader>        
    </Container>
  )
};

export default Story;

const Container = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 65rem;

  animation-fill-mode: both;
  animation-duration: 1000ms;
  animation-delay: 0ms;
  animation-iteration-count: 1;
  opacity: 1;
  animation-name: react-reveal-607813993386296-1;

  .container-hidden-image {
    margin: 0;
    width: 100%;
    height: 100%;
  }

  @media(max-width: 1900px) {
    .container-hidden-image {
      margin-top: -60px;
    }
  }

  .hidden-image img {    
    width: 100%;
    height: 100%;    
  }

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

`;

const StyleHeader = styled.div`
  position: absolute;
  width: 100%;
  bottom: 0;
  bottom: -599px;
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
    font-family: MyriadPro-Cond,Arial,sans-serif;
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
      margin-top: -30px;
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
    top: 38.5em;    
    width: 660px;
    height: 370px;
    -webkit-transition: all .33s ease-in-out;
    transition: all .33s ease-in-out;

    font-family: MyriadPro-Cond,Arial,sans-serif;
  }

  @media(max-width: 1900px) {
    .bg-history {
      position: relative;
      top: 420px;
      height: 360px;
    }
  }

  @media(max-width: 1100px) {
    .bg-history {
      position: relative;
      top: 920px;
      height: 450px;
    }
  }

  @media(max-width: 640px) {
    .bg-history {
      width: 100%;
      position: relative;
      top: 930px;
      height: 440px;
    }
  }

  @media(max-width: 550px) {
    .bg-history {
      top: 740px;
      height: 550px;
    }
  }

  @media(max-width: 310px) {
    .bg-history {
      top: 600px;
      height: 550px;
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

