import React from "react";
import styled from "styled-components";
import product4 from "../../assets/product4.jpeg";
import { GlobalButton } from "../../Components/commons";

const SpecialShirts = () => {
  return (
    <div>
      <Container>
        <Wrapper>
          <Img>
            <img src={product4} alt="" />
          </Img>
          <Content>
            <Desc>
              {/* <img src={logo} alt="" /> */}
              Sylv-Shirts{" "}
              <span>
                <BsDot />
              </span>
            </Desc>
            <Title>
              Special offer <br /> in Quality Shirts
            </Title>
            <Desc>
              choose the one that flatters your body shape and enhances your
              confidence.
            </Desc>
            <Button>
              <GlobalButton
                text="Discover more"
                borderR="40px"
                CC="white"
                bgC="#800080ac"
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

const Button = styled.div``;
const Title = styled.h1`
  line-height: 1.2;
  margin: 0;
  font-size: 3.7rem;
  font-weight: 900;
`;
const Desc = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 35px;
  color: white;
  span {
    color: purple;
    font-size: 40px;
    margin-top: 25px;
  }
`;

const Img = styled.div`
  width: 50%;
  height: 100%;
  /* background-color: yellow; */
  margin-right: 30px;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    margin-top: -70px;
  }
`;
const Content = styled.div`
  width: 40%;
  height: 80%;
  /* background-color: hotpink; */
`;

const Wrapper = styled.div`
  width: 90%;
  height: 600px;
  border-radius: 15px;
  background-color: #fefce8f4;
  display: flex;
  align-items: center;
  /* justify-content: center; */
  background-image: url(${wrapbg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;
const Container = styled.div`
  width: 100%;
  padding: 60px 0px 20px 0px;
  /* background-color: red; */
  display: flex;
  align-items: center;
  justify-content: center;
`;
