import React from 'react'

import Fade from 'react-reveal/Fade';
import styled from 'styled-components';

const Avatars = () => {
  return (
    <StyleHeader>
      <Fade left>
        <div className='text-header'>
          <h2>Avatars</h2>
        </div>
        </Fade>
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
        
        <Container>
          <div className='download-section'>
           <Fade right>
            <div className='react-reveal'>
              <div className='avatar-content'>
                      {/* Session Cloud Avatar   */}              
                  <div className='avatar-content-wrapper'>
                    <div className='text-name'>Cloud Strife Pack</div>
                    <div className='avatar'>
                      <span className='avatar-thumb-wrapper'>
                        <img className='avatar-thumb' src='/assets/avatars/avatar_pack_cloud.jpg' alt='' />
                      </span>
                    </div>
                    <div className='info-download'>
                      <a className='download-link' href='/assets/avatars/avatar_pack_cloud.jpg' download="">400 X 400</a>
                    </div>
                  </div>
                        {/* Session Barret Avatar   */}
                <div className='avatar-content-wrapper'>
                  <div className='text-name'>Barret Wallace Pack</div>
                  <div className='avatar'>
                    <span className='avatar-thumb-wrapper'>
                      <img className='avatar-thumb' src='/assets/avatars/avatar_pack_barret.jpg' alt='' />
                    </span>
                  </div>
                  <div className='info-download'>
                    <a className='download-link' href='/assets/avatars/avatar_pack_barret.jpg' download="">400 X 400</a>
                  </div>
                </div>
                          {/* Session Tifa Avatar   */}
                <div className='avatar-content-wrapper'>
                  <div className='text-name'>Tifa Lockhart Pack</div>
                  <div className='avatar'>
                    <span className='avatar-thumb-wrapper'>
                      <img className='avatar-thumb' src='/assets/avatars/avatar_pack_tifa.jpg' alt='' />
                    </span>
                  </div>
                  <div className='info-download'>
                    <a className='download-link' href='/assets/avatars/avatar_pack_tifa.jpg' download="">400 X 400</a>
                  </div>
                </div>
                              {/* Session Aerith Avatar   */}
                <div className='avatar-content-wrapper'>
                  <div className='text-name'>Aerith Gainsborough Pack</div>
                  <div className='avatar'>
                    <span className='avatar-thumb-wrapper'>
                      <img className='avatar-thumb' src='/assets/avatars/avatar_pack_aerith.jpg' alt='' />
                    </span>
                  </div>
                  <div className='info-download'>
                    <a className='download-link' href='/assets/avatars/avatar_pack_aerith.jpg' download="">400 X 400</a>
                  </div>
                </div>
                            {/* Session Sephiroth Avatar   */}
                <div className='avatar-content-wrapper'>
                  <div className='text-name'>Sephiroth Pack</div>
                  <div className='avatar'>
                    <span className='avatar-thumb-wrapper'>
                      <img className='avatar-thumb' src='/assets/avatars/avatar_pack_sephiroth.jpg' alt='' />
                    </span>
                  </div>
                  <div className='info-download'>
                    <a className='download-link' href='/assets/avatars/avatar_pack_sephiroth.jpg' download="">400 X 400</a>
                  </div>
                </div>
                              {/* Session Red XIII Avatar  */}
                <div className='avatar-content-wrapper'>
                  <div className='text-name'>Red XIII Pack</div>
                  <div className='avatar'>
                    <span className='avatar-thumb-wrapper'>
                      <img className='avatar-thumb' src='/assets/avatars/avatar_pack_redxiii.jpg' alt='' />
                    </span>
                  </div>
                  <div className='info-download'>
                    <a className='download-link' href='/assets/avatars/avatar_pack_redxiii.jpg' download="">400 X 400</a>
                  </div>
                </div>
              </div>
            </div>
          </Fade>
        </div>
      </Container>
    </StyleHeader>
  )
}

export default Avatars;

const StyleHeader = styled.div`
  width: 100%; 
  margin-top: 89.4rem; 
  position: relative; 
  background-color: #000;

  @media(max-width: 834px) {
    top: 84rem;
  }

  @media(max-width: 500px) {
    top: 66rem;
  }

  @media(max-width: 400px) {
    top: 146.7rem;
    margin: 0 auto;
  }

  @media(max-width: 305px) {
    top: 131rem;
    margin: 0 auto;
  }

  .text-header {
    margin-top: 60px;
  }

  .text-header h2 {
    font-size: 1.7em;
    width: 100%;
    max-width: 1100px;
    margin-top: 50px;
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

const Container = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  max-width: 1100px;
  margin: 0px auto;
  padding: 0px 20px;
  background-color: #000;
  overflow: hidden;

  animation-fill-mode: both;
  animation-duration: 1000ms;
  animation-delay: 0ms;
  animation-iteration-count: 1;
  opacity: 1;
  animation-name: react-reveal-607813993386296-1;
  background-color: #000;

  .download-section {
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    width: 100%;
    max-width: 700px;
    margin: 0px auto;
    padding: 0px 20px;
  }

  .react-reveal {
    height: 100%;
    margin-top: 40px;
    display: flex;
    flex-wrap: wrap;
    -moz-box-pack: center;
    justify-content: center;
  }

  .avatar-content {
    margin-top: 40px;
    max-width: 700px;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    -moz-box-pack: center;
    justify-content: center;
  }

  .avatar-content-wrapper {
    box-sizing: border-box;
    margin-bottom: 30px;
    margin-left: 15px;
    margin-right: 15px;
  }

  .text-name {
    display: flex;
    flex-wrap: wrap;
    color: #fff;
    font-family: MyriadPro-Cond,Arial,sans-serif;
    font-size: 14px;
    font-weight: 600;
    -moz-box-pack: center;
    text-transform: uppercase;
  }

  .avatar {
    box-sizing: border-box;
    margin-top: 15px;
    margin-bottom: 15px;
  }
  .avatar-thumb-wrapper {
    color: transparent;
    display: inline-block;
  }

  .avatar-thumb {
    transition: opacity .3s;
  }

  .info-download {
    text-transform: lowercase;
  }

  .download-link {
    color: #fff;
  }
`;