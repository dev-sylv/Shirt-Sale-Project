import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { BsFillStarFill } from "react-icons/bs";
import shirt from "../../assets/product3.jpeg";
import product1 from "../../assets/product2.jpeg";
import product2 from "../../assets/product6.jpeg";
import styled from "styled-components";

const Products = () => {
  return (
    <div>
      <Container>
        <Wrapper>
          <h1>
            Best Products <span>Quality T-shirts</span>
          </h1>

          <Div>
            <AllProducts>
              <Display>
                <First>
                  <Wishlist>
                    <Heart>
                      <span>
                        <AiOutlineHeart />
                      </span>
                    </Heart>
                  </Wishlist>
                  <ProductImg>
                    <img src={shirt} alt="" />
                  </ProductImg>
                </First>
                <Second>
                  <One>
                    <h2>Heavy Weight Shoes</h2>
                  </One>
                  <Two>
                    <h3>Perfect Fit for All</h3>
                  </Two>
                  <Three>
                    <Four>2000</Four>
                    <Five>
                      <span>
                        <BsFillStarFill style={{ color: "#800080ac" }} />
                      </span>
                      <p>4.5 (40 reviews)</p>
                    </Five>
                  </Three>
                </Second>
              </Display>
            </AllProducts>
            <AllProducts>
              <Display>
                <First>
                  <Wishlist>
                    <Heart>
                      <span>
                        <AiOutlineHeart />
                      </span>
                    </Heart>
                  </Wishlist>
                  <ProductImg>
                    <img src={product1} alt="" />
                  </ProductImg>
                </First>
                <Second>
                  <One>
                    <h2>Heavy Weight Shoes</h2>
                  </One>
                  <Two>
                    <h3>Perfect Fit for All</h3>
                  </Two>
                  <Three>
                    <Four>2000</Four>
                    <Five>
                      <span>
                        <BsFillStarFill style={{ color: "#800080ac" }} />
                      </span>
                      <p>4.5 (40 reviews)</p>
                    </Five>
                  </Three>
                </Second>
              </Display>
            </AllProducts>
            <AllProducts>
              <Display>
                <First>
                  <Wishlist>
                    <Heart>
                      <span>
                        <AiOutlineHeart />
                      </span>
                    </Heart>
                  </Wishlist>
                  <ProductImg>
                    <img src={product2} alt="" />
                  </ProductImg>
                </First>
                <Second>
                  <One>
                    <h2>Heavy Weight Shoes</h2>
                  </One>
                  <Two>
                    <h3>Perfect Fit for All</h3>
                  </Two>
                  <Three>
                    <Four>2000</Four>
                    <Five>
                      <span>
                        <BsFillStarFill style={{ color: "#800080ac" }} />
                      </span>
                      <p>4.5 (40 reviews)</p>
                    </Five>
                  </Three>
                </Second>
              </Display>
            </AllProducts>
          </Div>
        </Wrapper>
      </Container>
    </div>
  );
};

export default Products;
const Div = styled.div`
  display: flex;
  /* background-color: red; */
  align-items: center;
  justify-content: space-between;
`;

const Five = styled.div`
  height: 5vh;
  width: 200px;
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    font-size: 20px;
    margin-top: 5px;
    margin-right: 5px;
  }
  p {
    color: white;
    font-weight: 600;
  }
`;

const Four = styled.div`
  height: 5vh;
  width: 80px;
  border: 3px solid #800080ac;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 900;
  color: #800080ac;
`;

const Three = styled.div`
  height: 10vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Two = styled.div`
  h3 {
    margin: 0;
    font-weight: 500;
    color: white;
    font-size: 16px;
    margin-top: 10px;

    width: 300px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;
const One = styled.div`
  h2 {
    margin: 0;
    color: white;
    font-size: 20px;
    font-weight: 600;
  }
`;
const ProductImg = styled.div`
  width: 100%;
  height: calc(100% - 40px);
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    margin-bottom: 100px;
  }
`;

const Heart = styled.div`
  width: 40px;
  height: 40px;
  background-color: #800080ac;
  margin-right: 20px;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    font-size: 20px;
    color: #800080ac;
    margin-top: 5px;
  }
`;
const Wishlist = styled.div`
  width: 100%;
  height: 8vh;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
const Second = styled.div`
  width: 100%;
  height: 35%;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  color: white;
`;

const First = styled.div`
  width: 350px;
  height: 65%;
  background-color: #e2dfdf;
  border-radius: 30px;
  overflow: hidden;
  cursor: pointer;
`;

const Display = styled.div`
  width: 350px;
  height: 100%;
  text-decoration: none;
  margin: 20px;
  /* background-color: orange; */
`;
const AllProducts = styled.div`
  width: 100%;
  height: 65vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  width: 100%;
  padding: 20px 0px 20px 0px;

  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  width: 90%;
  padding: 10px 0px 10px 0px;

  display: flex;
  flex-direction: column;
  color: white;
  span {
    color: gray;
    font-weight: 600;
  }

  h1 {
    font-weight: 600;
  }

  hr {
    width: 100%;
    border: 1px solid #e2dfdf;
    margin-top: 40px;
  }
`;
