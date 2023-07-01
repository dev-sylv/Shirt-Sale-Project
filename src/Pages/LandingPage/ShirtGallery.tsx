import React from "react";
import shirt1 from "../../assets/shirt1.jpg";
import shirt2 from "../../assets/shirt2.jpg";
import shirt3 from "../../assets/shirt3.jpeg";
import { styled } from "styled-components";
import { GlobalButton } from "../../Components/commons";

const ShirtGallery = () => {
  return (
    <div>
      <Container>
        <Wrapper>
          <Image>
            <img src={shirt1} alt="" />

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
              padding="12px 15px"
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
  background-color: red;
  width: 90%;
  height: 350px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
`;
const Image = styled.div`
  width: 100%;
  background-color: green;
  display: flex;
  align-items: center;
  justify-content: space-between;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const MainText = styled.div`
  font-size: 20px;
  width: 800px;
  color: white;
  text-align: center;
  margin-top: 20px;
`;
const Button = styled.div`
  margin-top: 20px;
`;
