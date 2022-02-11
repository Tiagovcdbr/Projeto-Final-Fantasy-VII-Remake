import React from 'react';

import styled from 'styled-components';

const About = () => {
  return (
    <Container>
      <div className='container-hidden-image'>
        <div className='hidden-image'>
          <img src='assets/images/bg_home_story.jpg' alt='/' />
        </div>
      </div>
      <StyleHeader>
        <div className='text-header'>
          <h2>What is FINAL FANTASY VII Remake?</h2>
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
                <span>The world has fallen under the control of the Shinra Electric Power Company, a 
                shadowy corporation controlling the planet’s very life force as mako energy.</span>
                         
                <span>In the sprawling city of Midgar, an anti-Shinra organization calling themselves 
                Avalanche have stepped up their resistance. Cloud Strife, a former member of Shinra’s 
                elite SOLDIER unit now turned mercenary, lends his aid to the group, unaware of the epic 
                consequences that await him.</span> 

                <span>The story of this first, standalone game in the FINAL FANTASY VII REMAKE project 
                covers up to the party’s escape from Midgar, and goes deeper into the events occurring 
                in Midgar than the original FINAL FANTASY VII.</span> 
         
              </div>
            </div>
        </div>
        <video
        className='video-bg_2'
        src={"/assets/video/lifestream.mp4"}
        autoplay='1'
        allowfullscreen="1"
        loop    
          />
      </StyleHeader>     
    </Container>
  )
};

export default About;

const Container = styled.div`
  width: 100%;
  height: 100%;
  margin-top: -5px;

  .video-bg_2 {
    position: absolute;
    
    width: 100%;
    height: 1.3%;
    bottom: -33.6rem;
    background-color: #000;

    object-fit: cover;
    -o-object-fit: cover;

    background: linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.6) 100%),
            linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%);
  }

  @media(max-width: 1850px) {
    .video-bg_2 {
      bottom: -27.5rem;
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
  }

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
      margin-top: 470px;  
  }

  @media(max-width: 1100px) {
    .hidden-image img {
      width: 100%;
      height: 600px;
      top: 180px;
    }
  }

  @media(max-width: 750px) {
    margin-top: 470px;
  }

  @media(max-width: 310px) {
    width: 100%;
    height: 500px;
  }
`;

const StyleHeader = styled.div`
  position: absolute;
  width: 100%;
  top: 135.5rem;
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

  @media(max-width: 1900px) {
    position: relative;
    top: 0;
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
    top: 32rem;    
    width: 660px;
    height: 300px;
    -webkit-transition: all .33s ease-in-out;
    transition: all .33s ease-in-out;
  }

  @media(max-width: 1900px) {
    .bg-history {
      position: relative;
      top: 26rem;
      height: 320px;
    }
  }

  @media(max-width: 1100px) {
    .bg-history {
      position: relative;
      top: 300px;
      height: 300px;
    }
  }

  @media(max-width: 640px) {
    .bg-history {
      width: 100%;
      position: relative;
      top: 300px;
      height: 280px;
    }
  }

  @media(max-width: 600px) {
    .bg-history {
      width: 100%;
      position: relative;
      top: 300px;
      height: 280px;
    }
  }

  @media(max-width: 550px) {
    .bg-history {
      top: 250px;
      height: 350px;
    }
  }

  @media(max-width: 390px) {
    .bg-history {
      top: 50px;
      height: 450px;
    }
  }

  @media(max-width: 310px) {
    .bg-history {
      top: 40px;
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

