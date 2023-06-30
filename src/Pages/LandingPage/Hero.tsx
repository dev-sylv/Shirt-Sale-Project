import React from "react";
import { GlobalButton } from "../../Components/commons";
import { styled } from "styled-components";

const Hero = () => {
  return (
    <div>
      <Container>
        <Wrapper>
          <TextContent>
            <MainText>Manage everything without any hassle</MainText>
            <MiniText>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro
              ratione vero quis, ad fugiat totam nulla inventore cum
            </MiniText>
            <Div>
              <Button>
                <GlobalButton
                  bgC="#800080ac"
                  borderR="8px"
                  text="Start for Free"
                  CC="white"
                />
              </Button>
              <Video>
                <Icon></Icon>
                <p>Watch Video</p>
              </Video>
            </Div>
          </TextContent>
          <ImageContent></ImageContent>
        </Wrapper>
      </Container>
    </div>
  );
};

export default Hero;

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
