import React from "react";
import styled from "styled-components";
import product4 from "../../assets/product6.jpeg";
import { GlobalButton } from "../../Components/commons";
import { BsDot } from "react-icons/bs";

const SpecialShirts = () => {
  return (
    <div>
      <Container>
        <Wrapper>
          <Img>
            <img src={product4} alt="" />
          </Img>
          <Content>
            <Title>
              Special offer <br /> in Quality Shirts
            </Title>
            <Desc>
              Choose the one that flatters your body shape and enhances your
              confidence.
            </Desc>
            <Button>
              <GlobalButton
                text="Discover more"
                borderR="40px"
                CC="white"
                bgC="black"
                padding="12px 15px"
              />
            </Button>
          </Content>
        </Wrapper>
      </Container>
    </div>
  );
};

export default SpecialShirts;

const Button = styled.div`
  align-self: flex-start;
`;
const Title = styled.h1`
  line-height: 1.2;
  margin: 0;
  font-size: 3.7rem;
  font-weight: 900;
  color: white;
`;
const Desc = styled.p`
  display: flex;
  align-items: center;
  /* justify-content: center; */
  font-size: 30px;
  color: white;
`;

const Img = styled.div`
  width: 50%;
  height: 100%;
  /* background-color: yellow; */
  margin-right: 30px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;
const Content = styled.div`
  width: 40%;
  height: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  /* background-color: hotpink; */
`;

const Wrapper = styled.div`
  width: 90%;
  height: 600px;
  border-radius: 15px;
  background-color: #800080ac;
  display: flex;
  align-items: center;
  /* justify-content: center; */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;
const Container = styled.div`
  width: 100%;
  margin-top: 150px;
  padding: 60px 0px 20px 0px;
  /* background-color: red; */
  display: flex;
  align-items: center;
  justify-content: center;
`;
