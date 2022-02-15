
import React from 'react';
import styled from 'styled-components';

import { Link } from 'react-router-dom';

const Header = () => {
  return(
    <ContainerBar>
      <div className='square-logo'>
        <img src='/assets/images/square_logo.png' alt='' />
      </div>
      <div className='bar-items'>
        <img src='/assets/images/cart2.png' alt='' />
        <img src='assets/images/login.png' alt='' />      
        <h2>Support</h2>
        <h2>Store</h2>
        <h2>News</h2>
        <h2>Top Games</h2>
      </div>
      <ContainerHeader>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <img src='/assets/images/Final-Fantasy-VII-Remake-Logo-Transparent.png' alt='' />
        </Link>
      <ContainerItems>
        <img src='/assets/images/logo_white.png' alt='' />
          <div id='itemsHeader' className='header-items'>
            <Link to="home" style={{ textDecoration: 'none' }}>
              <h2>Story</h2>
            </Link>
            <Link to="/main" style={{ textDecoration: 'none' }}>
              <h2>Characters</h2>
            </Link>
            <Link to="/mechanics" style={{ textDecoration: 'none' }}>
              <h2>Mechanics</h2>
            </Link>
            <Link to="/media" style={{ textDecoration: 'none' }}>
              <h2>Media</h2>
            </Link>                  
              <h2>Download Demo</h2>
            <h3>Intergrade</h3>
          </div>
      </ContainerItems>
      </ContainerHeader>
      <ContainerDown>
        <div className='side-bar'>
          <h2>Buy Now</h2>
          <img src='assets/images/capa.png' alt='' />
        </div>
      </ContainerDown>
    </ContainerBar>
  )
};

export default Header;

const ContainerBar = styled.div`
  width: 100%;
  height: 40px;
  background-color: black;

  .square-logo img {
    position: relative;
    cursor: pointer;
    width: 180px;
  }

  .bar-items {
    position: relative;
    margin-top: -33px;

    img {
      cursor: pointer;
      width: 22px;
      margin: 0 10px;
      float: right;
      padding-top: 4px;
    }

    h2 {
      position: relative;
      display: inline;
      font-size: 15px;
      color: rgb(166, 166, 166);
      font-family: inherit;
      font-weight: 400;
      cursor: pointer;
      float: right;
      align-items: center;
      margin: 10px 27px;  
      text-transform: uppercase;    
      font-family: proxima-nova, sans-serif;
      
        &:hover {
          transition: 0.3s ease 0s;
          color: rgb(255, 255, 255);
        }
    }
  }

    img {
      width: 180px;
      margin-top: 8px;
      margin-left: 10px;
    } 

    @media(max-width:750px) {
      .bar-items h2 {
        display:none;
      }
    }

    @media(max-width: 750px) {
      .bar-items img {
        display: flex;
        position: relative;
        width: 20px;
      }
    }

    @media(max-width: 750px) {
      .square-logo {
        height: 40px;

        img {
          width: 140px;
        }
      }
    }
`;

const ContainerHeader = styled.section`
  width: 100%;
  height: 90px;
  display: flex;
  background-color: #05254e; 
  
    img {
      width: 200px;
      height: 140px;
      margin-top: -30px;
      margin-left: -15px;
      z-index: 10000;
      cursor: pointer;
    }

    @media(max-width: 430px) {
      img {
        display: none;
      }
    }
`;

const ContainerItems = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  margin: 0 auto;

    img {
      position: relative;
      width: 150px;
      height: 55px;
      margin-top: 18px;
      margin-left: -80px;
    }

    @media(max-width: 1550px) {
      img {
        margin-left: -255px;
      }
    }

    @media(max-width:1504px) {
      padding-left: 30px;
    }

    @media(max-width: 1420px) {
        img {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 250px;
          height: 90px;
          margin: 0 140px;
        }
      }

      @media(max-width: 1060px) {
        img {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 250px;
          height: 90px;
          margin: 0 10px;
        }
      }

    @media(max-width: 750px) {
        img {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 250px;
          height: 90px;
          margin: 0;
        }
      }

      @media(max-width: 460px) {
        img {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 250px;
          height: 90px;
          right: 50px;
        }
      }

      @media(max-width: 260px) {
        img {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 250px;
          height: 90px;
          right: 67px;
        }
      }

    .header-items {
      display: flex;

      h2 {
      cursor: pointer;
      display: flex;
      width: 140px;
      height: 45px;
      text-align: center;
      text-decoration: none;
      white-space: nowrap;
      margin: 16px 18px;
      padding: 1px 8px;     
      font-size: 14px;
      text-transform: uppercase;
      align-items: center;
      justify-content: center;
      font-weight: 600;
      color: #ffffff;
      padding-left: 10px;
      opacity: 3s;
      background: linear-gradient(90deg,#000 0,#000 85%,transparent);

      &::before {
          content: "";
          position: absolute;
          top: 0;
          margin-left: -150px;
          margin-top: 57px;
          width: 2px;
          background-color: #000;
          height: 45px;
        }

        &:hover {         
          transition: all .2s ease-in-out;
          border-left: 2px solid #fff;
          border-top: 2px solid #fff;
          border-bottom: 2px solid #fff;
          background: linear-gradient(90deg,#05254e 0,#05254e 95%,rgba(5,32,72,1));        
          color: #ffffff;
        }              
    }

    h3 {
      cursor: pointer;
      display: flex;
      width: 10;
      text-align: center;
      white-space: nowrap;
      height: 45px;
      margin: 16px 18px;
      padding: 1px 8px;
      font-family: MyriadPro-Cond,Arial,sans-serif;
      font-size: 14px;
      text-transform: uppercase;
      align-items: center;
      justify-content: center;
      font-weight: 600;
      color: #000000;
      padding-left: 10px;
      opacity: 3s;
      background: linear-gradient(90deg,#fff 0,#fff 75%,transparent);

      &::before {
          content: "";
          position: absolute;
          top: 0;
          left: -15px;
          width: 2px;
          background-color: #000;
          height: 100%;
        }

        &:hover {         
          transition: all .2s ease-in-out;
          border-left: 2px solid #fff;
          border-top: 2px solid #fff;
          border-bottom: 2px solid #fff;
          background: linear-gradient(90deg,#05254e 0,#05254e 95%,rgba(5,32,72,1));        
          color: #ffffff;
        }                
    }

      @media(max-width: 1420px) {
        h2, h3 {
          display: none;
        }         

        img {
          width: 250px;
          height: 80px;
          margin: 0 auto;
          padding: 15px 0; 
          align-items: center;
          justify-content: center;
        }
      }
    }    
`

export const ContainerDown = styled.div`
  
  padding: 10px 0;
  border: 3px solid #81c3bf;
  text-decoration: none;
  background: -webkit-linear-gradient(bottom,#14af95,#03856f 35%,#02816c 50%,#058873 65%,#14af95);
  background: linear-gradient(0deg,#14af95,#03856f 35%,#02816c 50%,#058873 65%,#14af95);
  text-transform: uppercase;
  color: #fff;
  cursor: pointer;
  transition: all .22s ease-in-out;
  -webkit-transition: all .22s ease-in-out;

  .side-bar {
    overflow: hidden;
    left: 0;

    h2 {
      font-size: 1.4em;
      font-weight: 700;
      font-family: MyriadPro-Cond,Arial,sans-serif;
      text-transform: uppercase;
      color: #fff;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      text-align: center;

        &:hover {
          transform: scale(1.2);
          transition: .6s;
        }
    }

    @media(max-width: 272px) {
      h2 {
        margin-left: 80px;
      }
    }

    img {
      object-fit: contain;
      position: absolute;
      width: 75px;
      height: 100px;
      margin-left: 32rem;
      margin-top: -50px;
      z-index: 1;
    }

    @media(max-width: 1415px) {
        img {
          margin-left: 0px;
        }
      } 

      @media(max-width: 1316px) {
        img {
          margin-left: 0px;
        }
      } 

      @media(max-width: 1100px) {
      img {
        z-index: 9;
      }
    } 
  }   
`;