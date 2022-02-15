import React from 'react'

import styled from 'styled-components'

const WallPapers = () => {
  return (
      <StyleHeader>
        <div className='text-header'>
            <h2>Wallpapers</h2>
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
          <Container>
            <div className='react-reveal'>
            { /* Section Cloud  */}
              <div className='wallpaper-item-wrapper'>
                <div className='text-name'>Cloud Strife</div>
                  <div className='container-wallpaper'>
                    <span className='wallpaper-thumb-wrapper'>
                      <img className='wallpaper-thumb' src='/assets/wallpapers/preview/wallpaper_preview_cloud.jpg' alt='' />
                    </span>
                  </div>
                  <div className='wallpaper-size-wrapper'>
                    <div className='wallpaper-container-desktop'>
                      <div className='text-container'>Desktop</div>
                        <div className='info-resolution'>
                          <a className="download-link" href="/assets/wallpapers/Cloud/CloudDesktop/cloud1280/cloud_wallpapers_1280x1024.jpg" download="">1280 X 1024</a>
                        </div>
                        <div className='info-resolution'>
                          <a className="download-link" href="/assets/wallpapers/Cloud/CloudDesktop/cloud1920/cloud_wallpapers_1920x1080.jpg" download="">1920 X 1080</a>
                        </div>
                        <div className='info-resolution'>
                          <a className="download-link" href="/assets/wallpapers/Cloud/CloudDesktop/cloud2560/cloud_wallpapers_2560x1600.jpg" download="">2560 X 1600</a>
                        </div>
                        <div className='info-resolution'>
                          <a className="download-link" href="/assets/wallpapers/Cloud/CloudDesktop/cloud3840/cloud_wallpapers_3840x2160.jpg" download="">3840 X 2160</a>
                        </div>
                    </div>
                    <div className='wallpaper-mobile-size'>
                      <div className='text-container'>Mobile</div>
                        <div className='info-resolution'>
                          <a className="download-link" href="/assets/wallpapers/cloud/CloudMobile/cloud1080/cloud_wallpapers_1080x1920.jpg" download="">1080 X 1920</a>
                        </div>
                        <div className='info-resolution'>
                          <a className="download-link" href="/assets/wallpapers/cloud/CloudMobile/cloud1125/cloud_wallpapers_1125x2436.jpg" download="">1125 X 2436</a>
                        </div>
                    </div>
                  </div>
                </div>              

              { /* Section Barret  */}
              <div className='wallpaper-item-wrapper'>
                <div className='text-name'>Barret Wallace</div>
                  <div className='container-wallpaper'>
                    <span className='wallpaper-thumb-wrapper'>
                      <img className='wallpaper-thumb' src='/assets/wallpapers/preview/wallpaper_preview_barret.jpg' alt='' />
                    </span>
                  </div>
                  <div className='wallpaper-size-wrapper'>
                    <div className='wallpaper-container-desktop'>
                      <div className='text-container'>Desktop</div>
                        <div className='info-resolution'>
                          <a className="download-link" href="/assets/wallpapers/Barret/BarretDesktop/barret1280/barret_wallpaper_1280x1024.jpg" download="">1280 X 1024</a>
                        </div>
                        <div className='info-resolution'>
                          <a className="download-link" href="/assets/wallpapers/Barret/BarretDesktop/barret1920/barret_wallpaper_1920x1080.jpg" download="">1920 X 1080</a>
                        </div>
                        <div className='info-resolution'>
                          <a className="download-link" href="/assets/wallpapers/Barret/BarretDesktop/barret2560/barret_wallpaper_2560x1600.jpg" download="">2560 X 1600</a>
                        </div>
                        <div className='info-resolution'>
                          <a className="download-link" href="/assets/wallpapers/Barret/BarretDesktop/barret3840/barret_wallpaper_3840x2160.jpg" download="">3840 X 2160</a>
                        </div>
                    </div>
                    <div className='wallpaper-mobile-size'>
                      <div className='text-container'>Mobile</div>
                        <div className='info-resolution'>
                          <a className="download-link" href="/assets/wallpapers/Barret/BarretMobile/barret1080/barret_wallpaper_1080x1920.jpg" download="">1080 X 1920</a>
                        </div>
                        <div className='info-resolution'>
                          <a className="download-link" href="/assets/wallpapers/Barret/BarretMobile/barret1125/barret_wallpaper_1125x2436.jpg" download="">1125 X 2436</a>
                        </div>
                    </div>
                  </div>
                </div>

                { /* Section Tifa  */}
                <div className='wallpaper-item-wrapper'>
                <div className='text-name'>Tifa Lockhart</div>
                  <div className='container-wallpaper'>
                    <span className='wallpaper-thumb-wrapper'>
                      <img className='wallpaper-thumb' src='/assets/wallpapers/preview/wallpaper_preview_tifa.jpg' alt='' />
                    </span>
                  </div>
                  <div className='wallpaper-size-wrapper'>
                    <div className='wallpaper-container-desktop'>
                      <div className='text-container'>Desktop</div>
                        <div className='info-resolution'>
                          <a className="download-link" href="/assets/wallpapers/Tifa/TifaDesktop/tifa1280/tifa_wallpaper_1280x1024.jpg" download="">1280 X 1024</a>
                        </div>
                        <div className='info-resolution'>
                          <a className="download-link" href="/assets/wallpapers/Tifa/TifaDesktop/tifa1920/tifa_wallpaper_1920x1080.jpg" download="">1920 X 1080</a>
                        </div>
                        <div className='info-resolution'>
                          <a className="download-link" href="/assets/wallpapers/Tifa/TifaDesktop/tifa2560/tifa_wallpaper_2560x1600.jpg" download="">2560 X 1600</a>
                        </div>
                        <div className='info-resolution'>
                          <a className="download-link" href="/assets/wallpapers/Tifa/TifaDesktop/tifa3840/tifa_wallpaper_3840x2160.jpg" download="">3840 X 2160</a>
                        </div>
                    </div>
                    <div className='wallpaper-mobile-size'>
                      <div className='text-container'>Mobile</div>
                        <div className='info-resolution'>
                          <a className="download-link" href="/assets/wallpapers/Tifa/TifaMobile/tifa1080/tifa_wallpaper_1080x1920.jpg" download="">1080 X 1920</a>
                        </div>
                        <div className='info-resolution'>
                          <a className="download-link" href="/assets/wallpapers/Tifa/TifaMobile/tifa11125/tifa_wallpaper_1125x2436.jpg" download="">1125 X 2436</a>
                        </div>
                    </div>
                  </div>
                </div>

                { /* Section Aerith  */}
                <div className='wallpaper-item-wrapper'>
                <div className='text-name'>Aerith Gainsborough</div>
                  <div className='container-wallpaper'>
                    <span className='wallpaper-thumb-wrapper'>
                      <img className='wallpaper-thumb' src='/assets/wallpapers/preview/wallpaper_preview_aerith.jpg' alt='' />
                    </span>
                  </div>
                  <div className='wallpaper-size-wrapper'>
                    <div className='wallpaper-container-desktop'>
                      <div className='text-container'>Desktop</div>
                        <div className='info-resolution'>
                          <a className="download-link" href="/assets/wallpapers/Aerith/AerithDesktop/aerith1280/aerith_wallpaper_1280x1024.jpg" download="">1280 X 1024</a>
                        </div>
                        <div className='info-resolution'>
                          <a className="download-link" href="/assets/wallpapers/Aerith/AerithDesktop/aerith1920/aerith_wallpaper_1920x1080.jpg" download="">1920 X 1080</a>
                        </div>
                        <div className='info-resolution'>
                          <a className="download-link" href="/assets/wallpapers/Aerith/AerithDesktop/aerith2560/aerith_wallpaper_2560x1600.jpg" download="">2560 X 1600</a>
                        </div>
                        <div className='info-resolution'>
                          <a className="download-link" href="/assets/wallpapers/Aerith/AerithDesktop/aerith3840/aerith_wallpaper_3840x2160.jpg" download="">3840 X 2160</a>
                        </div>
                    </div>
                    <div className='wallpaper-mobile-size'>
                      <div className='text-container'>Mobile</div>
                        <div className='info-resolution'>
                          <a className="download-link" href="/assets/wallpapers/Aerith/AerithMobile/aerith1080/aerith_wallpaper_1080x1920.jpg" download="">1080 X 1920</a>
                        </div>
                        <div className='info-resolution'>
                          <a className="download-link" href="/assets/wallpapers/Aerith/AerithMobile/aerith1125/aerith_wallpaper_1125x2436.jpg" download="">1125 X 2436</a>
                        </div>
                    </div>
                  </div>
                </div>

                { /* Section Sephiroth  */}
                <div className='wallpaper-item-wrapper'>
                <div className='text-name'>Sephiroth</div>
                  <div className='container-wallpaper'>
                    <span className='wallpaper-thumb-wrapper'>
                      <img className='wallpaper-thumb' src='/assets/wallpapers/preview/wallpaper_preview_sephiroth.jpg' alt='' />
                    </span>
                  </div>
                  <div className='wallpaper-size-wrapper'>
                    <div className='wallpaper-container-desktop'>
                      <div className='text-container'>Desktop</div>
                        <div className='info-resolution'>
                          <a className="download-link" href="/assets/wallpapers/Sephiroth/SephirothDesktop/sephiroth1280/sephiroth_wallpaper_1280x1024.jpg" download="">1280 X 1024</a>
                        </div>
                        <div className='info-resolution'>
                          <a className="download-link" href="/assets/wallpapers/Sephiroth/SephirothDesktop/sephiroth1920/sephiroth_wallpaper_1920x1080.jpg" download="">1920 X 1080</a>
                        </div>
                        <div className='info-resolution'>
                          <a className="download-link" href="/assets/wallpapers/Sephiroth/SephirothDesktop/sephiroth2560/sephiroth_wallpaper_2560x1600.jpg" download="">2560 X 1600</a>
                        </div>
                        <div className='info-resolution'>
                          <a className="download-link" href="/assets/wallpapers/Sephiroth/SephirothDesktop/sephiroth3840/sephiroth_wallpaper_3840x2160.jpg" download="">3840 X 2160</a>
                        </div>
                    </div>
                    <div className='wallpaper-mobile-size'>
                      <div className='text-container'>Mobile</div>
                        <div className='info-resolution'>
                          <a className="download-link" href="/assets/wallpapers/Sephiroth/SephirothMobile/sephiroth1080/sephiroth_wallpaper_1080x1920.jpg" download="">1080 X 1920</a>
                        </div>
                        <div className='info-resolution'>
                          <a className="download-link" href="/assets/wallpapers/Sephiroth/SephirothMobile/sephiroth1125/sephiroth_wallpaper_1125x2436.jpg" download="">1125 X 2436</a>
                        </div>
                    </div>
                  </div>
                </div>

                { /* Section RED XIII  */}
                <div className='wallpaper-item-wrapper'>
                <div className='text-name'>Red XIII</div>
                  <div className='container-wallpaper'>
                    <span className='wallpaper-thumb-wrapper'>
                      <img className='wallpaper-thumb' src='/assets/wallpapers/preview/wallpaper_preview_redxiii.jpg' alt='' />
                    </span>
                  </div>
                  <div className='wallpaper-size-wrapper'>
                    <div className='wallpaper-container-desktop'>
                      <div className='text-container'>Desktop</div>
                        <div className='info-resolution'>
                          <a className="download-link" href="/assets/wallpapers/Cloud/CloudDesktop/cloud1280/cloud_wallpaper_1280x1024.jpg" download="">1280 X 1024</a>
                        </div>
                        <div className='info-resolution'>
                          <a className="download-link" href="/assets/wallpapers/Cloud/CloudDesktop/cloud1920/cloud_wallpaper_1920x1080.jpg" download="">1920 X 1080</a>
                        </div>
                        <div className='info-resolution'>
                          <a className="download-link" href="/assets/wallpapers/Cloud/CloudDesktop/cloud2560/cloud_wallpaper_2560x1600.jpg" download="">2560 X 1600</a>
                        </div>
                        <div className='info-resolution'>
                          <a className="download-link" href="/assets/wallpapers/Cloud/CloudDesktop/cloud3840/cloud_wallpaper_3840x2160.jpg" download="">3840 X 2160</a>
                        </div>
                    </div>
                    <div className='wallpaper-mobile-size'>
                      <div className='text-container'>Mobile</div>
                        <div className='info-resolution'>
                          <a className="download-link" href="/assets/wallpapers/cloud/CloudMobile/cloud1080/cloud_wallpaper_1080x1920.jpg" download="">1080 X 1920</a>
                        </div>
                        <div className='info-resolution'>
                          <a className="download-link" href="/assets/wallpapers/cloud/CloudMobile/cloud1125/cloud_wallpaper_1125x2436.jpg" download="">1125 X 2436</a>
                        </div>
                    </div>
                  </div>
                </div>
            </div>
          </Container>        
      </StyleHeader>
  )
}

export default WallPapers;

const StyleHeader = styled.div`
  width: 100%;   
  position: absolute; 
  animation-fill-mode: both;
  animation-duration: 1000ms;
  animation-delay: 0ms;
  animation-iteration-count: 1;
  opacity: 1;
  animation-name: react-reveal-607813993386296-1;
  background-color: #000;

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

const Container  = styled.div`

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

  .react-reveal {
    height: 100%;
    margin-top: 40px;
    display: flex;
    flex-wrap: wrap;
    -moz-box-pack: center;
    justify-content: center;
  }

  .wallpaper-item {
    max-width: 1100px;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    -moz-box-pack: center;
    justify-content: center;
  }

  .wallpaper-item-wrapper {
    margin-left: 10px;
    margin-right: 10px;
    margin-top: 20px;
  }

  .text-name {
    display: flex;
    flex-wrap: wrap;
    color: #fff;
    font-family: MyriadPro-Cond,Arial,sans-serif;
    font-size: 15px;
    font-weight: 600;
    -moz-box-pack: center;
    text-transform: uppercase;
  }

  .wallpaper-thumb-wrapper {
    color: transparent;
    display: inline-block;
    box-sizing: border-box;
    margin-top: 15px;
    margin-bottom: 15px;
    width: 377px;
    height: 212px;

      span {
        color: transparent;
        display: inline-block;
      }
  }

  .wallpaper-thumb {
    max-width: 100%;
    margin-top: 20px;
  }

  .wallpaper-size-wrapper {
    display: flex;
  }

  .wallpaper-container-desktop, 
  .text-container {
    text-transform: uppercase;
    color: #fff;
    font-family: MyriadPro-Cond,Arial,sans-serif;
    font-size: 15px;
    margin-top: 10px;
    font-weight: 700;
  }

  .info-resolution {
    box-sizing: border-box;
    margin-top: 10px;
    margin-bottom: 10px;
  }

  .download-link {
    color: #fff;
    font-family: MyriadPro-Cond,Arial,sans-serif;
    font-size: 15px;
  }
  .wallpaper-mobile-size {
    margin-left: 30%;
    margin-top: 10px;
  }

  .wallpaper-mobile-size,
  .text-container {
    font-weight: 600;
  }
`;
