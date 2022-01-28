import React from 'react';

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
    </Container>
  )
};

export default Main;

const Container = styled.section`
  overflow: hidden;
  object-fit: cover;
  height: 100%;
  width: 100%;
  opacity: 0.9;

  .video-bg {
    position: absolute;
    max-width: 1900px;
    width: 100%;
    height: 100%;
    margin-top: 140px;
    background-color: #000;

    object-fit: cover;
    -o-object-fit: cover;

    background: linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.6) 100%),
            linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%);
  }

  @media(max-width: 752px) {
    .video-bg {
      position: absolute;
      width: 100%;
      height: 100%;
      margin-top: 128px;
    }
  }

  @media(max-width: 440px) {
    .video-bg {
      position: absolute;
      width: 100%;
      height: 100%;
      margin-top: 128px;
    }
  }
`


