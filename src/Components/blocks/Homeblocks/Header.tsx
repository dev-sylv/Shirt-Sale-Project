import React from "react";
import { GlobalButton } from "../../commons";
import styled from "styled-components";

const Header = () => {
  return (
    <div>
      <Container>
        <Wrapper>
          <Logo>
            Sylv-Shirts <span>.</span>
          </Logo>
          <Navigations>
            <Navs>Home</Navs>
            <Navs>Products</Navs>
            <Navs>About us</Navs>
            <Navs>Features</Navs>
          </Navigations>
          <Buttons>
            <GlobalButton
              bgC="#800080ac"
              borderR="8px"
              text="Start for Free"
              CC="white"
            />
          </Buttons>
        </Wrapper>
      </Container>
    </div>
  );
};

export default Header;

const Container = styled.div`
  width: 100%;
  height: 70px;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  width: 90%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Logo = styled.div`
  font-size: 35px;
  color: white;
  span {
    color: #800080ac;
  }
`;
const Navigations = styled.div`
  width: 30%;
  height: 50px;
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: #8080809e;
  color: white;
`;
const Navs = styled.div`
  cursor: pointer;
`;
const Buttons = styled.div``;
