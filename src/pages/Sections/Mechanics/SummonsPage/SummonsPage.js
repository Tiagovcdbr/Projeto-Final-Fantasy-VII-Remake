import React from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';

const SummonsPage = () => {
  return (    
    <Container>
    <audio
        src={""}
        autoplay='1'
        loop                
      />
        <div className='container-hidden-image'>
          <div className='hidden-image'>
            <img src='assets/images/summons_bg.jpg' alt='/' />
          </div>
        </div>
        <StyleHeader>
            <div className='text-header'>
              <Fade left>
                <h2>SUMMONS SESSION</h2>
              </Fade>
            </div>
              <Fade left>
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
            </Fade>
           <div className='container-characters'>
            <Fade bottom>
                <div className='heroes'>
                  <div className='character-thumbnail-0'>
                    <Link to="/ifrit" style={{ textDecoration: 'none' }}>
                      <img src='assets/cards/Ifrit_from_FFVII_Remake.png' alt='' />
                    </Link>
                  </div>
                  <div className='character-thumbnail-1'>
                    <Link to="/shiva" style={{ textDecoration: 'none' }}>
                      <img src='assets/cards/shiva.png' alt='' />
                    </Link>
                  </div>
                  <div className='character-thumbnail-2'>
                    <Link to="/leviathan" style={{ textDecoration: 'none' }}>
                      <img src='assets/cards/Leviathan_FFVII_Remake.png' alt='' />
                    </Link>
                  </div>
                  <div className='character-thumbnail-3'>
                    <Link to="/bahamut" style={{ textDecoration: 'none' }}>
                      <img src='assets/cards/bahamut.png' alt='' />
                    </Link>
                  </div>
                  <div className='character-thumbnail-4'>
                    <Link to="/fatchocobo" style={{ textDecoration: 'none' }}>
                      <img src='assets/cards/fatchocobo.png' alt='' />
                    </Link>
                  </div>
                  <div className='character-thumbnail-5'>
                    <Link to="/chocobomoogle" style={{ textDecoration: 'none' }}>
                      <img src='assets/cards/Chocobo_&_Moogle_FFVIIR.png' alt='' />
                    </Link>
                  </div>
                  <div className='character-thumbnail-6'>
                    <Link to="/chick" style={{ textDecoration: 'none' }}>
                      <img src='assets/cards/chocobo-chick-summon-from-ffvii-remake-article_m-1.png' alt='' />
                    </Link>
                  </div>
                  <div className='character-thumbnail-7'>
                    <Link to="/cactuar" style={{ textDecoration: 'none' }}>
                      <img src='assets/cards/Cactuar_from_FFVII_Remake.png' alt='' />
                    </Link>
                  </div>
                  <div className='character-thumbnail-8'>
                    <Link to="/carbuncle" style={{ textDecoration: 'none' }}>
                      <img src='assets/cards/carbuncle-summon-from-ffvii-remake-article_m-1.png' alt='' />
                    </Link>
                  </div>
                    <div className='division'></div>
                </div>
              </Fade>
           </div>
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

                    <span>Equip summoning materia to call a legendary entity into battle. 
                    The summoned creature will also provide stat bonuses for the character 
                    equipped with their materia. This special materia can only be set to 
                    a specific slot in a character's weapon.</span>
                              
                    <span>Summons are fearsome creatures that are the embodiment of 
                    ancient knowledge, condensed into materia.</span> 
              
                  </div>
                </div>
            </div>
          </Zoom>     
        </StyleHeader>
        <video
          className='video-bg_2'
          src={"/assets/video/lifestream.mp4"}
          autoplay='1'
          allowfullscreen="1"
          loop    
        />  
    </Container>    
  )
};

export default SummonsPage;


const Container = styled.div`
  width: 100%;
  height: 100%;
  margin-top: -142px;

  .video-bg_2 {
    position: absolute;
    top: 437.8rem;
    width: 100%;
    height: 0.60%;
    background-color: #000;

    object-fit: cover;
    -o-object-fit: cover;

    background: linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.6) 100%),
            linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%);
  }

  @media(max-width: 1900px) {
    .video-bg_2 {
      top: 327.4rem;      
    }
  }

  @media(max-width: 1850px) {
    .video-bg_2 {
      top: 314.1rem;      
    }
  }

  @media(max-width: 750px) {
    .video-bg_2 {
      margin-top: -74px;
    }
  }

  @media(max-width: 460px) {
    .video-bg_2 {
      bottom: -11rem;
    }
  }

  .container-hidden-image {
    margin: 0;
    width: 100%;
    height: 100%;
  }

  @media(max-width: 1900px) {
    width: 100%;
    height: 100%;
  }

  .hidden-image img {    
    width: 100%;
    height: 100%; 
    margin-top: 142px;
    
      @media(max-width: 1850px) {
      width: 100%;
      height: 100%;
    }

    @media(max-width: 1850px) {
      .hidden-image img {
        z-index: 1;
        width: 100%;
        height: 100%;
      }
    }

    @media(max-width: 1850px) {
        z-index: 1;
        height: 100vh;
        margin-top: 142px;  
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
  top: 370.9rem;
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
    bottom: 0;
    margin-top: -91.5rem;     
  }

  @media(max-width: 1850px) {
    position: absolute;
    bottom: 0; 
    margin-top: -91.5rem;   
  }

  @media(max-width: 750px) {
    position: absolute;
    bottom: 0;
    margin-top: -95.5rem;
  }

  @media(max-width: 1100px) {
    .text-header h2 {
      
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
    top: 5rem;
    align-items: center;
    justify-content: center;
    position: relative;
    z-index: 1;
    flex-wrap: wrap;
    
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

  .character-thumbnail-8 {
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

   /*  .villains {
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
  }  */

  .bg-history {
    position: relative;
    margin: 0 auto;
    top: 20rem;    
    width: 660px;
    height: 190px;
    -webkit-transition: all .33s ease-in-out;
    transition: all .33s ease-in-out;
  }

  @media(max-width: 1850px) {
    .bg-history {
      position: relative;
      top: 15rem;
      height: 200px;
    }
  }

  @media(max-width: 1100px) {
    .bg-history {
      position: relative;
      top: 270px;
      height: 220px;
    }
  }

  @media(max-width: 810px) {
    .bg-history {
      position: relative;
      top: 200px;
      height: 200px;
    }
  }

  @media(max-width: 790px) {
    .bg-history {
      position: relative;
      top: 150px;
      height: 180px;
    }
  }

  @media(max-width: 750px) {
    .bg-history {
      position: relative;
      top: 180px;
      height: 180px;
    }
  }

  @media(max-width: 640px) {
    .bg-history {
      width: 100%;
      position: relative;
      top: 190px;
      height: 190px;
    }
  }

  @media(max-width: 600px) {
    .bg-history {
      width: 100%;
      position: relative;
      top: 200px;
      height: 180px;
    }
  }

  @media(max-width: 550px) {
    .bg-history {
      top: 220px;
      height: 190px;
    }
  }
  @media(max-width: 450px) {
    .bg-history {
      top: 110px;
      height: 190px;
    }
  }

  @media(max-width: 390px) {
    .bg-history {
      display: none;
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
    background: linear-gradient(120deg,rgba(5,37,78,.5) 0,rgba(5,37,78,.5) 75%,rgba(5,37,78,0));

    & span {
      position: relative;
      top: 2rem;
      margin: 6px auto;
      color: #fff;
      font-weight: 600;
      font-size: 14px;
      text-align: center;
      font-family: MyriadPro-Cond,Arial,sans-serif;
    }
  }
`;

