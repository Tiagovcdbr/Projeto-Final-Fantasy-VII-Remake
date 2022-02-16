import React from 'react'
import styled from 'styled-components';

import Carousel from '../../../../lib/components/Carousel';

const data = [
  {
    image: "/assets/screenshots/01_reno.jpg",
  },
  {
    image: "/assets/screenshots/02_rude.jpg",    
  },
  {
    image: "/assets/screenshots/03_biggs.jpg",    
  },
  {
    image: "/assets/screenshots/04_wedge.jpg",    
  },
  {
    image: "/assets/screenshots/05_jessie.jpg",    
  },
  {
    image: "/assets/screenshots/06_setting_classic_EN.jpg",    
  },
  {
    image: "/assets/screenshots/07_assaultmode_EN.jpg",    
  },
  {
    image: "/assets/screenshots/08_bravemode_EN.jpg",   
  },
  {
    image: "/assets/screenshots/09_cloud_rapid_EN.jpg",    
  },
  {
    image: "/assets/screenshots/10_cloud_hakogeki_EN.jpg",
  },
  {
    image: "/assets/screenshots/11_weapon_upgrade_core_02_EN_UI.jpg",    
  },
  {
    image: "/assets/screenshots/12_weapon_learning_EN.jpg",    
  },
  {
    image: "/assets/screenshots/13_burstslash.jpg",    
  },
  {
    image: "/assets/screenshots/14_fire2_EN.jpg",    
  },
  {
    image: "/assets/screenshots/15_miyaburu_EN.jpg",    
  },
  {
    image: "/assets/screenshots/17_hissatsuwaza.jpg",    
  },
  {
    image: "/assets/screenshots/18_church.jpg",   
  },
  {
    image: "/assets/screenshots/19_aerithhouse_out.jpg",    
  },
  {
    image: "/assets/screenshots/20_aerithhouse_in.jpg",    
  },
  {
    image: "/assets/screenshots/21_darts_01.jpg",    
  },
  {
    image: "/assets/screenshots/22_darts_02.jpg",    
  },
  {
    image: "/assets/screenshots/23_motorbike_EN.jpg",    
  },
  {
    image: "/assets/screenshots/gallery_full_screen_07.jpg",    
  },
  {
    image: "/assets/screenshots/gallery_full_screen_08.jpg",    
  },
  {
    image: "/assets/screenshots/gallery_full_screen_09.jpg",    
  },
  {
    image: "/assets/screenshots/gallery_full_screen_10.jpg",    
  },
  {
    image: "/assets/screenshots/gallery_full_screen_11.jpg",    
  },
  {
    image: "/assets/screenshots/gallery_full_screen_12.jpg",    
  },
  {
    image: "/assets/screenshots/gallery_full_screen_13.jpg",    
  },
  {
    image: "/assets/screenshots/gallery_full_screen_14.jpg",    
  },
  {
    image: "/assets/screenshots/gallery_full_screen_15.jpg",    
  },
  {
    image: "/assets/screenshots/gallery_full_screen_16.jpg",    
  },
  {
    image: "/assets/screenshots/gallery_full_screen_17.jpg",    
  },
  {
    image: "/assets/screenshots/gallery_full_screen_18.jpg",    
  },
  {
    image: "/assets/screenshots/gallery_full_screen_19.jpg",    
  },
  {
    image: "/assets/screenshots/gallery_full_screen_20.jpg",    
  },
  {
    image: "/assets/screenshots/gallery_full_screen_21.jpg",    
  },
  {
    image: "/assets/screenshots/gallery_full_screen_22.jpg",    
  },
  {
    image: "/assets/screenshots/gallery_full_screen_23.jpg",    
  },
  {
    image: "/assets/screenshots/gallery_full_screen_24.jpg",    
  },
  {
    image: "/assets/screenshots/gallery_full_screen_25.jpg",    
  },
  {
    image: "/assets/screenshots/gallery_full_screen_26.jpg",    
  },
  {
    image: "/assets/screenshots/gallery_full_screen_27.jpg",    
  },
  {
    image: "/assets/screenshots/gallery_full_screen_01.jpg",    
  },
  {
    image: "/assets/screenshots/gallery_full_screen_02.jpg",    
  },
  {
    image: "/assets/screenshots/gallery_full_screen_03.jpg",    
  },
  {
    image: "/assets/screenshots/gallery_full_screen_04.jpg",    
  },
  {
    image: "/assets/screenshots/gallery_full_screen_05.jpg",    
  },
  {
    image: "/assets/screenshots/gallery_full_screen_06.jpg",    
  },
];

const ScreenShots = () => {

  return (
    <Container>
    <div className='text-header'>
      <h2>ScreenShots</h2>
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

    <div style={{ textAlign: "center" }}>   
    <div style={{
      padding: "0 20px"
    }}>
      <Carousel className=""
        data={data}
        time={3000}
        width="950px"
        height="500px"        
        radius="2px"
        slideNumber={false}        
        captionPosition="bottom"
        automatic={false}
        dots={true}
        pauseIconColor="white"
        pauseIconSize="40px"
        slideBackgroundColor="darkgrey"
        slideImageFit="cover"
        thumbnails={true}
        thumbnailWidth="180px"
        style={{
          textAlign: "center",
          maxWidth: "950px",
          maxHeight: "500px",
          margin: "40px auto",
        }}
      />
    </div>
  </div>
    </Container>
  )
}

export default ScreenShots;

const Container = styled.div`
  width: 100%;
  min-height: 770px;
  height: 100%;
  color: #fff;
  background: #000;
  margin-top: -4px;

  @media(max-width: 1850px) {
    margin-top: 56.2rem;
  }

  @media(max-width: 800px) {
    margin-top: 105rem;
  }

  @media(max-width: 590px) {
    margin-top: 107rem;
  }

  @media(max-width: 440px) {
    margin-top: 82rem;
  }

  @media(max-width: 290px) {
    margin-top: 58rem;
  }

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

  @media(max-width: 1850px) {
    .text-header {
      position: relative;
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
`;