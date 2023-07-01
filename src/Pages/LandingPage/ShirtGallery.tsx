import React from "react";

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
            />
          </Button>
        </Wrapper>
      </Container>
    </div>
  );
};

export default ShirtGallery;
