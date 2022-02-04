
import styled from 'styled-components';

const Main = () => {
  return (
    <Container>
      <video
        className='video-bg'
        src={"/assets/video/video.mp4"}
        autoplay='1'
        allowfullscreen="1"
        loop
        muted
      />
      <audio
        src={"/assets/audio/FFVII REMAKE - Opening-Intro-Bombing Mission Theme.mp3"}
        autoplay='1'
        loop
        muted
      />
      <ContainerLogo>
        <div className='logo'>
          <img src='/assets/images/Final-Fantasy-VII-Remake-Logo-Transparent.png' alt='logo' />
        </div>
      </ContainerLogo>
      <ContentTraillers>
        <div className='video-thumb'>
          <div className='video-still'>
            <img className='trailler-1' src='/assets/images/the-game-awards-2019-trailer-still.jpg' alt='/' />
          </div>
          <div className='play-btn-home'>
            <img className='play-btn' src='/assets/images/play_btn.png' alt='/' />
            <h3 className='trailler-title'>The Game Awards 2019 Trailer</h3>
          </div>
          <div className='video-border-decoration-top-left'>
            <img className='video-border-decoration' src='/assets/images/trailer_frame_corner.png' alt='/' />
          </div>
          <div className='video-border-decoration-top-right'>
            <img className='video-border-decoration' src='/assets/images/trailer_frame_corner.png' alt='/' />
          </div>
          <div className='video-border-decoration-bottom-left'>
            <img className='video-border-decoration' src='/assets/images/trailer_frame_corner.png' alt='/' />
          </div>
          <div className='video-border-decoration-bottom-right'>
            <img className='video-border-decoration' src='/assets/images/trailer_frame_corner.png' alt='/' />
          </div>
        </div>
        <div className='video-thumb'>
          <div className='video-still'>
            <img src='/assets/images/tokyo-game-show-trailer-still.jpg' alt='/' />
          </div>
          <div className='play-btn-home'>
            <img className='play-btn' src='/assets/images/play_btn.png' alt='/' />
            <h3 className='trailler-title'>Tokyo Game Show 2019 Trailer</h3>
          </div>
          <div className='video-border-decoration-top-left'>
            <img className='video-border-decoration' src='/assets/images/trailer_frame_corner.png' alt='/' />
          </div>
          <div className='video-border-decoration-top-right'>
            <img className='video-border-decoration' src='/assets/images/trailer_frame_corner.png' alt='/' />
          </div>
          <div className='video-border-decoration-bottom-left'>
            <img className='video-border-decoration' src='/assets/images/trailer_frame_corner.png' alt='/' />
          </div>
          <div className='video-border-decoration-bottom-right'>
            <img className='video-border-decoration' src='/assets/images/trailer_frame_corner.png' alt='/' />
          </div>
        </div>
        <div className='video-thumb'>
          <div className='video-still'>
            <img src='/assets/images/e3-long-trailer-still.jpg' alt='/' />
          </div>
          <div className='play-btn-home'>
            <img className='play-btn' src='/assets/images/play_btn.png' alt='/' />
            <h3 className='trailler-title'>E3 2019 Trailer</h3>
          </div>
          <div className='video-border-decoration-top-left'>
            <img className='video-border-decoration' src='/assets/images/trailer_frame_corner.png' alt='/' />
          </div>
          <div className='video-border-decoration-top-right'>
            <img className='video-border-decoration' src='/assets/images/trailer_frame_corner.png' alt='/' />
          </div>
          <div className='video-border-decoration-bottom-left'>
            <img className='video-border-decoration' src='/assets/images/trailer_frame_corner.png' alt='/' />
          </div>
          <div className='video-border-decoration-bottom-right'>
            <img className='video-border-decoration' src='/assets/images/trailer_frame_corner.png' alt='/' />
          </div>
        </div>
      </ContentTraillers>
    </Container>
  )
};

export default Main;

const Container = styled.section`
  overflow: hidden;
  object-fit: cover;
  width: 100%;
  opacity: 1;

  .video-bg {
    position: absolute;
    
    width: 100%;
    height: 100%;
    margin-top: 142px;
    background-color: #000;

    object-fit: cover;
    -o-object-fit: cover;

    background: linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.6) 100%),
            linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%);
  }

  @media(max-width: 1100px) {
    .video-bg {
      position: absolute;
      width: 100%;
      height: 50%;
      margin-top: 142px;
    }
  }

  @media(max-width: 750px) {
    .video-bg {
      position: absolute;
      width: 100%;
      height: 50%;
      margin-top: 132px;
    }
  }

`

const ContainerLogo = styled.div`  
  .logo img {
    position: absolute;
    width: 44rem;
    right: 0;
    margin-right: 170px;
    margin-top: 200px;   
  }

  @media(max-width: 1100px) {
    .logo img {
      margin-top: 10px;
    }
  }

  @media(max-width: 964px) {
    .logo img {
      margin-top: 10px;
      margin-right: 80px;
    }
  }

  @media(max-width: 800px) {
    .logo img {
      margin-top: 10px;
      margin: 0 auto;
    }
  }

  @media(max-width: 730px) {
    .logo img {
      margin-top: 10px;
      margin: 0;
    }
  }

  @media(max-width: 640px) {
    .logo img {
      width: 550px;
      margin-top: 50px;
      margin: 0;
    }
  }

  @media(max-width: 580px) {
    .logo img {
      margin-top: 10px;
    }
  }

  @media(max-width: 410px) {
    .logo img {
      width: 450px;
      margin-top: 150px;
      margin-right: -25px;
    }
  }

  @media(max-width: 330px) {
    .logo img {
      display: none;
    }
  }
`;

const ContentTraillers = styled.div`
  width: 100%;
  position: absolute;
  margin-left: 20px;
  bottom: 0;
  max-width: 1090px;
  right: 0;
  
    .video-thumb {
      display: inline-block;
      padding: 0;
      margin-left: 40px;
      margin-top: 100px;
      max-width: 300px;
      width: 100%;
      height: 169px;
      position: relative;
      z-index: 0;
      cursor: pointer;
      border: 2px solid #1e9de3;
      -webkit-transition: all .33s ease-in-out;
      transition: all .33s ease-in-out;
    }

    @media(max-width: 1100px) {
      .video-thumb {
        position: relative;
        max-width: 500px;
        height: 280px;
        top: 600px;
        margin: 50px auto;
        display: block;
        justify-content: space-around;
        -webkit-transition: all .33s ease-in-out;
        transition: all .33s ease-in-out;
      }
    }

    @media(max-width: 964px) {
      .video-thumb {
        position: relative;
        max-width: 500px;
        height: 280px;
        margin-top: 50px;
        top: 600px;
        margin-right: 180px;
        display: block;
        justify-content: space-around;
        -webkit-transition: all .33s ease-in-out;
        transition: all .33s ease-in-out;
      }
    }

    @media(max-width: 800px) {
      .video-thumb {
        position: relative;
        max-width: 500px;
        height: 280px;
        margin-top: 50px;
        top: 600px;
        margin-right: 90px;
        display: block;
        justify-content: space-around;
        -webkit-transition: all .33s ease-in-out;
        transition: all .33s ease-in-out;
      }
    }

    @media(max-width: 640px) {
      .video-thumb {
        position: relative;
        max-width: 500px;
        height: 280px;
        margin-top: 50px;
        top: 600px;
        margin-right: 70px;
        display: block;
        justify-content: space-around;
        -webkit-transition: all .33s ease-in-out;
        transition: all .33s ease-in-out;
      }
    }

    @media(max-width: 580px) {
      .video-thumb {
        position: relative;
        max-width: 500px;
        height: 280px;
        margin-top: 50px;
        top: 600px;
        align-items: center;
        justify-content: center;
        margin-right: 40px;
        display: block;
        justify-content: space-around;
        -webkit-transition: all .33s ease-in-out;
        transition: all .33s ease-in-out;
      }
    }

    @media(max-width: 550px) {
      .video-thumb {
        position: relative;
        max-width: 400px;
        height: 225px;
        margin-top: 50px;
        top: 400px;
        align-items: center;
        justify-content: center;
        margin-right: 70px;
        display: block;
        justify-content: space-around;
        -webkit-transition: all .33s ease-in-out;
        transition: all .33s ease-in-out;
      }
    }

    @media(max-width: 410px) {
      .video-thumb {
        position: relative;
        max-width: 250px;
        height: 140px;
        margin-top: 50px;
        top: 250px;
        align-items: center;
        justify-content: center;
        margin-right: 70px;
        display: block;
        justify-content: space-around;
        -webkit-transition: all .33s ease-in-out;
        transition: all .33s ease-in-out;
      }
    }

    .video-still {
      overflow: hidden;
      display: block;
      width: 100%;
      position: relative;
      overflow: hidden;
      margin-bottom: 0;

        img {
          width: 100%;
        }
    }

    @media(max-width: 1100px) {
      .video-still {
        width: 100%; 
        position: absolute;          
      }
    }

    .play-btn-home {
      width: 75%;
      height: auto;
      position: absolute;
      bottom: calc(0% - 35px);
      left: 9%;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      justify-content: center;
      -webkit-box-orient: horizontal;
      -webkit-box-direction: normal;
      -ms-flex-direction: row;
      flex-direction: row;
      background-color: #377e9a;
      padding: 10px;
    }

    .play-btn {
      width: 50px;
      height: 50px;
      display: inline-block;
      border-right: 1px solid #46a3be;
      padding: 0;
      margin-right: 10px;
    }

    .trailler-title {
      text-transform: uppercase;
      font-family: Arial,sans-serif;
      text-shadow: none;
      font-weight: 700;
      font-size: .80em;
      color: #fff;
      text-align: center;
    }

    .video-border-decoration-top-left {
      position: absolute;
      top: -21.5px;
      left: -23.5px;
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }

    .video-border-decoration {
      opacity: 1;
      -webkit-transition: opacity .3s;
      transition: opacity .3s;
    }

    .video-border-decoration-top-right {
      position: absolute;
      top: -24.5px;
      right: -20px;
      -webkit-transform: rotate(90deg);
      transform: rotate(90deg);
    }

    .video-border-decoration {
      opacity: 1;
      -webkit-transition: opacity .3s;
      transition: opacity .3s;
    }

    .video-border-decoration-bottom-left {
      position: absolute;
      bottom: -23.5px;
      left: -20px;
      -webkit-transform: rotate(270deg);
      transform: rotate(270deg);
    }

    .video-border-decoration {
      opacity: 1;
      -webkit-transition: opacity .3s;
      transition: opacity .3s;
    }


    .video-border-decoration-bottom-right {
      position: absolute;
      bottom: -20.5px;
      right: -22.5px;
      -webkit-transform: rotate(180deg);
      transform: rotate(180deg);
    }

    .video-border-decoration {
      opacity: 1;
      -webkit-transition: opacity .3s;
      transition: opacity .3s;
    }
`;