import React from "react";
import { GlobalButton } from "../../Components/commons";

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
            <Button>
              <GlobalButton
                bgC="#800080ac"
                borderR="8px"
                text="Start for Free"
                CC="white"
              />
            </Button>
          </TextContent>
          <ImageContent></ImageContent>
        </Wrapper>
      </Container>
    </div>
  );
};

export default Hero;
