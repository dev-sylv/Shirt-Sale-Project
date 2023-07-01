import React from "react";
import shirt1 from "../../assets/shirt1.jpg";
import shirt2 from "../../assets/shirt2.jpg";
import shirt3 from "../../assets/shirt3.jpeg";
import { styled } from "styled-components";

const ShirtGallery = () => {
  return (
    <div>
      <Container>
        <Wrapper>
          <Image>
            <Img>
              <img src={shirt1} alt="" />
            </Img>
            <img src={shirt2} alt="" />
            <img src={shirt3} alt="" />
          </Image>
          <MainText>
            Ready to upgrade your wardrobe? Start exploring our shirt collection
            now and discover the perfect shirts that reflect your unique style
            and personality.
          </MainText>
          <Button>
            <GlobalButton
              bgC="#800080ac"
              borderR="8px"
              text="Get Started"
              CC="white"
            />
          </Button>
        </Wrapper>
      </Container>
    </div>
  );
};

export default ShirtGallery;

const Container = styled.div`
  width: 100%;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  width: 90%;
  height: 350px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
`;
const Image = styled.div``;
const Img = styled.div`
  width: 30%;
  height: 50%;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const MainText = styled.div``;
const Button = styled.div``;
