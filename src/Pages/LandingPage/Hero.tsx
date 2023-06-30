import React from "react";
import { GlobalButton } from "../../Components/commons";
import { styled } from "styled-components";
import { MdSlowMotionVideo } from "react-icons/md";

const Hero = () => {
  return (
    <div>
      <Container>
        <Wrapper>
          <TextContent>
            <MainText>
              Manage everything <br /> without any hassle 😃
            </MainText>
            <MiniText>
              We strive to provide you with a seamless and enjoyable shopping
              experience. <br /> We believe that great style shouldn't come at a
              hefty price
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
                <Icon>
                  <MdSlowMotionVideo />
                </Icon>
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
  height: calc(80vh - 70px);
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  width: 90%;
  height: 90%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
  background-color: red;
`;
const TextContent = styled.div`
  width: 50%;
  height: 80%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;
const MainText = styled.div`
  font-size: 50px;
`;
const MiniText = styled.div``;
const Button = styled.div``;
const Div = styled.div`
  display: flex;
  align-items: center;
`;
const Video = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
const Icon = styled.div`
  margin-right: 10px;
  margin-left: 20px;
`;
const ImageContent = styled.div`
  background-color: green;
`;
