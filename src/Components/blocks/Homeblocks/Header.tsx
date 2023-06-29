import React from "react";
import { GlobalButton } from "../../commons";

const Header = () => {
  return <div>
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
  </div>;
};

export default Header;

const Container = 
