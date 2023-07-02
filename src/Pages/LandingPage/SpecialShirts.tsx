import React from "react";
import styled from "styled-components";
import specialkid from "../Assets/specialkid.png";
import wrapbg from "../Assets/wrap-bg.svg";
import logo from "../Assets/sylvialogo.png";

const SpecialShirts = () => {
  return (
    <div>
      <Container>
        <Wrapper>
          <Img>
            <img src={specialkid} alt="" />
          </Img>
          <Content>
            <Desc>
              <img src={logo} alt="" />
            </Desc>
            <Title>
              Special offer <br /> in kids products
            </Title>
            <Desc>
              Fashion is a form of self-expression and autonomy at a particular
              period and place.
            </Desc>
            <Button>Discover more</Button>
          </Content>
        </Wrapper>
      </Container>
    </div>
  );
};

export default SpecialShirts;

const Button = styled.button`
  width: 200px;
  height: 65px;
  background-color: #0f172a;
  color: #fff;
  margin-top: 70px;
  border-radius: 40px;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
const Title = styled.h1`
  line-height: 1.2;
  margin: 0;
  font-size: 3.7rem;
  font-weight: 900;
`;
const Desc = styled.p`
  font-size: 1.2rem;
  font-weight: 500;
  line-height: 1.8rem;

  img {
    width: 100px;
    height: 50px;
    object-fit: contain;
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
