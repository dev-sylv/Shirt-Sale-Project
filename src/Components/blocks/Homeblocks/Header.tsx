import React from "react";
import { GlobalButton } from "../../commons";
import styled from "styled-components";

const Header = () => {
  return (
    <div>
      <Container>
        <Wrapper>
          <Logo>Sylv-Shirts</Logo>
          <Navigations>
            <Navs>Home</Navs>
            <Navs>Products</Navs>
            <Navs>About us</Navs>
            <Navs>Features</Navs>
          </Navigations>
          <Buttons>
            <GlobalButton bgC="" borderR="" text="" CC="" />
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
const Logo = styled.div``;
const Navigations = styled.div``;
const Navs = styled.div``;
const Buttons = styled.div``;
