import React from "react";
import styled from "styled-components";
import {
  BsFillTelephoneFill,
  BsArrowUpSquare,
  BsBoxArrowDown,
  BsDot,
} from "react-icons/bs";
import { AiOutlineInstagram } from "react-icons/ai";
import { FiFacebook } from "react-icons/fi";
import { TfiLinkedin } from "react-icons/tfi";
import { TbBrandTwitter } from "react-icons/tb";
import { BiLocationPlus } from "react-icons/bi";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <FirstDiv>
          <Logo>
            Sylv-Shirts{" "}
            <span>
              <BsDot />
            </span>
          </Logo>
          <p>
            Sylv Shirts, best selling <br />
            best shirt sales deals <br />
            get your unique shirts <br />
          </p>
          <p>Connect with us on all our social media</p>
          <Icons>
            <Circle>
              <TbBrandTwitter />
            </Circle>
            <Circle>
              <FiFacebook />
            </Circle>
            <Circle>
              <TfiLinkedin />
            </Circle>
            <Circle>
              <AiOutlineInstagram />
            </Circle>
          </Icons>
        </FirstDiv>
        <SecondDiv>
          <Box>
            <h3>SOURCES</h3>
            <Nav>About us</Nav>
            <Nav>Services</Nav>
            <Nav>Features</Nav>
            <Nav>Buy a shirt</Nav>
          </Box>

          <Box2>
            <h3>Support</h3>
            <Nav>Business</Nav>
            <Nav>Blog</Nav>
            <Nav>Creative</Nav>
            <Nav>Community</Nav>
            <Nav>Contact Us</Nav>
          </Box2>

          <Box2>
            <h3>Contact Info</h3>
            <div>
              <BiLocationPlus />
              <Nav1>Prince Fadina street</Nav1>
            </div>
            <div>
              <MdEmail />
              <Nav1>nicsylvia@gmail.com</Nav1>
            </div>
            <div>
              <BsFillTelephoneFill />
              <Nav1>09061180473</Nav1>
            </div>
          </Box2>
        </SecondDiv>
        <br />
        <br />
        <br />
        <CopyRg>
          <p>
            Copyright @2023 Sylv Shirt Sales. All Rights Reserved <br />{" "}
            <span>
              <a href="https://wa.me/09061180473">Sylvia Adimike</a>
            </span>
          </p>
        </CopyRg>
      </Wrapper>
      {/* <ArrowToTop to="Hero">
        <BsArrowUpSquare />
      </ArrowToTop> */}
    </Container>
  );
};

export default Footer;

const Logo = styled.div`
  font-size: 35px;
  color: white;
  span {
    color: white;
    font-size: 40px;
    margin-top: 25px;
  }
`;

const ArrowToTop = styled.div`
  position: fixed;
  right: 30px;
  font-size: 35px;
  cursor: pointer;
  color: white;
  transition: all 350ms;
  :hover {
    margin-top: -5px;
  }
`;

const Container = styled.div`
  width: 100%;
  background-color: #800080ac;
  margin: 0;
  position: relative;
`;
const Wrapper = styled.div`
  display: flex;
  /* justify-content: space-around; */
  align-items: center;
  flex-wrap: wrap;
  font-size: 18px;
`;
const FirstDiv = styled.div`
  width: 300px;
  margin-top: 50px;
  margin-left: 90px;
  @media screen and (max-width: 425px) {
    margin-left: 30px;
  }

  p {
    font-size: 18px;
    color: white;
    line-height: 23px;
  }
`;
const SecondDiv = styled.div`
  width: 65%;
  margin-top: 50px;
  display: grid;
  color: white;
  grid-template-columns: repeat(3, 1fr);
  @media screen and (max-width: 1024px) {
    margin-left: 90px;
  }
  @media screen and (max-width: 425px) {
    margin-left: 30px;
    grid-template-columns: 1fr;
  }
`;
const Box2 = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 768px) {
    margin-left: 80px;
  }
  @media screen and (max-width: 425px) {
    margin-left: 0px;
  }
  div {
    display: flex;
    margin-left: 15px;
  }
`;
const Box = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 768px) {
    /* margin-left: 60px; */
  }
  div {
    display: flex;
    margin-left: 15px;
  }
`;
const Nav = styled.div`
  padding-bottom: 20px;
  font-size: 18px;
  color: white;
  transition: all 400ms;
  cursor: pointer;
  text-decoration: none;
  :hover {
    text-decoration: underline;
    margin-top: -1px;
  }
`;
const CopyRg = styled.div`
  width: 100%;
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 13px;
  color: white;
  background-color: black;
  margin-top: 70px;
  span {
    a {
      color: white;
      text-decoration: none;
    }
  }
`;
const Nav1 = styled.div`
  padding-bottom: 20px;
  font-size: 18px;
  color: white;
  transition: all 400ms;
`;
const Icons = styled.div`
  display: flex;
  color: white;
`;
const Circle = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 350ms;
  color: white;
  border: 3px solid black;
  margin: 10px;
  cursor: pointer;
`;
