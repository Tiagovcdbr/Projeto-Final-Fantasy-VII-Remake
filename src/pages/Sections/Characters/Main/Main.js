
import { Link, Switch } from 'react-router-dom';

import useSound from 'use-sound';

import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import Header from '../../../../components/Header/Header';
import styled from 'styled-components';

const Main = () => {
  const [effect] = useSound('/assets/audio/FF7CursorReady.mp3');

  function Cloud (props) {
    const CharacterCloud = props.CharacterCloud;
    if (CharacterCloud) {
      return <Cloud />
    }
  }

  function Aerith(props) {
    const CharacterAerith = props.CharacterAerith;
    if (CharacterAerith) {
      return <Aerith />
    }
  }

  function Tifa (props) {
    const CharacterTifa = props.CharacterTifa;
    if (CharacterTifa) {
      return <Tifa />
    }
  }

  function Barret (props) {
    const CharacterBarret = props.CharacterBarret;
    if (CharacterBarret) {
      return <Barret />
    }
  }

  function RedXIII (props) {
    const CharacterRedXIII = props.CharacterRedXIII;
    if (CharacterRedXIII) {
      return <RedXIII />
    }
  }

  function Jessie (props) {
    const CharacterJessie = props.CharacterJessie;
    if (CharacterJessie) {
      return <Jessie />
    }
  }

  function Wedge (props) {
    const CharacterWedge = props.CharacterWedge;
    if (CharacterWedge) {
      return <Wedge />
    }
  }

  function Biggs (props) {
    const CharacterBiggs = props.CharacterBiggs;
    if (CharacterBiggs) {
      return <Biggs />
    }
  }

  function Sephiroth (props) {
    const CharacterSephiroth = props.CharacterSephiroth;
    if (CharacterSephiroth) {
      return <Sephiroth />
    }
  }

  function Reno (props) {
    const CharacterReno = props.CharacterReno;
    if (CharacterReno) {
      return <Reno />
    }
  }

  function Rude (props) {
    const CharacterRude = props.CharacterRude;
    if (CharacterRude) {
      return <Rude />
    }
  }

  function President (props) {
    const CharacterPresident = props.CharacterPresident;
    if (CharacterPresident) {
      return <President />
    }
  }

  function Heidegger (props) {
    const CharacterHeidegger = props.CharacterHeidegger;
    if (CharacterHeidegger) {
      return <Heidegger />
    }
  }

  function Rocche (props) {
    const CharacterRocche = props.CharacterRocche;
    if (CharacterRocche) {
      return <Rocche />
    }
  }

  function Hojo (props) {
    const CharacterHojo = props.CharacterHojo;
    if (CharacterHojo) {
      return <Hojo />
    }
  }

  function Rufus (props) {
    const CharacterRufus = props.CharacterRufus;
    if (CharacterRufus) {
      return <Rufus />
    }
  }

  return (    
    <Container>
    <video
        className='video-bg_2'
        src={"/assets/video/lifestream.mp4"}
        autoplay='1'
        allowfullscreen="1"
        loop    
      />
    <audio
        src={"/assets/audio/FF-VII_Remake_opening.m4a"}
        autoplay='1'
        loop                
      />
      <Header />
        <div className='container-hidden-image'>
          <div className='hidden-image'>
            <img src='assets/images/bg2_shinra.jpg' alt='/' />
          </div>
        </div>
        <StyleHeader>
            <div className='text-header'>
              <Fade left duration={2500}>
                <h2>Characters</h2>
              </Fade>
            </div>
            <Fade left duration={2500}>
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
           <div className='container-characters'>
            {/*  <Fade top duration={3000} > */}
              <div className='heroes'>
                <div className='character-thumbnail-0'>
                <Switch>
                  <Link to="/cloud" return={Cloud} style={{ textDecoration: 'none' }} spy={true}      onClick={effect}>
                    <img src='assets/cards/chara_thumb_cloud.png' alt='' />
                  </Link>
                </Switch>
                </div>
                <div className='character-thumbnail-1'>
                <Switch>
                  <Link to="/aerith" return={Aerith} style={{ textDecoration: 'none' }} spy={true} onClick={effect}>
                    <img src='assets/cards/chara_thumb_aerith.png' alt='' />
                  </Link>
                </Switch>
                </div>
                <div className='character-thumbnail-2'>
                <Switch>
                  <Link to="/tifa" return={Tifa} style={{ textDecoration: 'none' }} spy={true} onClick={effect}>
                    <img src='assets/cards/chara_thumb_tifa.png' alt='' />
                  </Link>
                </Switch>
                </div>
                <div className='character-thumbnail-3'>
                <Switch>
                  <Link to="/barret" return={Barret} style={{ textDecoration: 'none' }} spy={true} onClick={effect}>
                    <img src='assets/cards/chara_thumb_barret.png' alt='' />
                  </Link>
                </Switch>
                </div>
                <div className='character-thumbnail-4'>
                <Switch>
                  <Link to="/redxiii" return={RedXIII} style={{ textDecoration: 'none' }} spy={true} onClick={effect}>
                    <img src='assets/cards/chara_thumb_redxiii.png' alt='' />
                  </Link>
                </Switch>
                </div>
                <div className='character-thumbnail-5'>
                <Switch>
                  <Link to="/jessie" return={Jessie} style={{ textDecoration: 'none' }} spy={true} onClick={effect}>
                    <img src='assets/cards/chara_thumb_jessie.png' alt='' />
                  </Link>
                </Switch>
                </div>
                <div className='character-thumbnail-6'>
                <Switch>
                  <Link to="/wedge" return={Wedge} style={{ textDecoration: 'none' }} spy={true} onClick={effect}>
                    <img src='assets/cards/chara_thumb_wedge.png' alt='' />
                  </Link>
                </Switch>
                </div>
                <div className='character-thumbnail-7'>
                <Switch>
                  <Link to="/biggs" return={Biggs} style={{ textDecoration: 'none' }} spy={true} onClick={effect}>
                    <img src='assets/cards/chara_thumb_biggs.png' alt='' />
                  </Link>
                </Switch>
                </div>
                  <div className='division'></div>
                {/* <Fade top duration={3000}> */}
                  <div className='villains'>
                    <div className='character-thumbnail-villain-8'>
                    <Switch>
                      <Link to="/sephiroth" return={Sephiroth} style={{ textDecoration: 'none' }} spy={true} onClick={effect}>
                        <img src='assets/cards/chara_thumb_sephiroth.png' alt='' />
                      </Link>
                    </Switch>
                    </div>
                    <div className='character-thumbnail-villain-9'>
                    <Switch>
                      <Link to="/reno" return={Reno} style={{ textDecoration: 'none' }} spy={true} onClick={effect}>
                        <img src='assets/cards/chara_thumb_reno.png' alt='' />
                      </Link>
                    </Switch>
                    </div>
                    <div className='character-thumbnail-villain-10'>
                    <Switch>
                      <Link to="/rude" return={Rude} style={{ textDecoration: 'none' }} spy={true} onClick={effect}>
                        <img src='assets/cards/chara_thumb_rude.png' alt='' />
                      </Link>
                    </Switch>
                    </div>
                    <div className='character-thumbnail-villain-11'>
                    <Switch>
                      <Link to="/president" return={President} style={{ textDecoration: 'none' }} spy={true} onClick={effect}>
                        <img src='assets/cards/chara_thumb_shinra.png' alt='' />
                      </Link>
                    </Switch>
                    </div>
                    <div className='character-thumbnail-villain-12'>
                    <Switch>
                      <Link to="/heidegger" return={Heidegger} style={{ textDecoration: 'none' }} spy={true} onClick={effect}>
                        <img src='assets/cards/chara_thumb_heidegger.png' alt='' />
                      </Link>
                    </Switch>
                    </div>
                    <div className='character-thumbnail-villain-13'>
                    <Switch>
                      <Link to="/rocche" return={Rocche} style={{ textDecoration: 'none' }} spy={true} onClick={effect}>
                        <img src='assets/cards/chara_thumb_rocche.png' alt='' />
                      </Link>
                    </Switch>
                    </div>
                    <div className='character-thumbnail-villain-14'>
                    <Switch>
                      <Link to="/hojo" return={Hojo} style={{ textDecoration: 'none' }} spy={true} onClick={effect}>
                        <img src='assets/cards/chara_thumb_hojo.png' alt='' />
                      </Link>
                    </Switch>
                    </div>
                    <div className='character-thumbnail-villain-15'>
                    <Switch>
                      <Link to="/rufus" return={Rufus} style={{ textDecoration: 'none' }} spy={true} onClick={effect}>
                        <img src='assets/cards/characters_full_rufus.png' alt='' />
                      </Link>
                    </Switch>
                    </div>
                  </div>
                {/*</Fade> */}
              </div>
            {/*</Fade> */}
           </div>
           <Zoom duration={3500}> 
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

                  <span>This section shows all the characters that exist in the game, click on the image 
                  to access its information and get to know a little about these outstanding characters.</span>
                            
                  <span>of this incredible game that is Final Fantasy VII Remake, being the first part of 
                  an extensive game you will have many surprises and you will remember exciting moments</span> 
  
                  <span>The story of this first, standalone game in the FINAL FANTASY VII REMAKE project 
                  covers up to the party’s escape from Midgar, and goes deeper into the events occurring 
                  in Midgar than the original FINAL FANTASY VII.</span> 
            
                </div>
              </div>
            </div>
         </Zoom>       
        </StyleHeader>
    </Container>    
  )
};

export default Main;


const Container = styled.div`
  width: 100%;
  height: 100%;

  animation-fill-mode: both;
  animation-duration: 3000ms;
  animation-delay: 0ms;
  animation-iteration-count: 1;
  opacity: 1;
  animation-name: react-reveal-607813993386296-1;

  .video-bg_2 {
    position: absolute;
    
    width: 100%;
    height: 0.60%;
    bottom: -20.3rem;
    background-color: #000;

    object-fit: cover;
    -o-object-fit: cover;

    background: linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.6) 100%),
            linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%);
  }

  @media(max-width: 1900px) {
    .video-bg_2 {
      bottom: -11.7rem;
    }
  }

  @media(max-width: 750px) {
    .video-bg_2 {
      bottom: -11.1rem;
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

  .hidden-image img {    
    width: 100%;
    height: 100%; 
    margin-top: 142px;
    
      @media(max-width: 1900px) {
      width: 100%;
      height: 100vh;
    }

    @media(max-width: 1900px) {
      .hidden-image img {
        width: 100%;
        height: 100%;
      }
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
  top: 182px;
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
    font-weight: 500;
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
    top: 18.6rem;
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

  .container-characters {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    position: relative;
    z-index: 1;
    flex-wrap: wrap;
    margin-top: 50px;
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

  .division {
    width: 100%;
    text-align: center;
  }

  .villains {
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
  }

  .bg-history {
    position: relative;
    margin: 0 auto;
    top: 10rem;    
    width: 660px;
    height: 240px;
    -webkit-transition: all .33s ease-in-out;
    transition: all .33s ease-in-out;
  }

  @media(max-width: 1850px) {
    .bg-history {
      position: relative;
      top: 15rem;
      height: 240px;
    }
  }

  @media(max-width: 1100px) {
    .bg-history {
      position: relative;
      top: 300px;
      height: 240px;
    }
  }

  @media(max-width: 790px) {
    .bg-history {
      position: relative;
      top: 200px;
      height: 240px;
    }
  }

  @media(max-width: 750px) {
    .bg-history {
      position: relative;
      top: 150px;
      height: 240px;
    }
  }

  @media(max-width: 640px) {
    .bg-history {
      width: 100%;
      position: relative;
      top: 80px;
      height: 220px;
    }
  }

  @media(max-width: 600px) {
    .bg-history {
      width: 100%;
      position: relative;
      top: 80px;
      height: 220px;
    }
  }

  @media(max-width: 550px) {
    .bg-history {
      top: 50px;
      height: 280px;
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
      font-size: 14px;
      text-align: center;
      font-family: MyriadPro-Cond,Arial,sans-serif;
    }
  }
`;

