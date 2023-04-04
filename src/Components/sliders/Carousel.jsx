import Slider from "react-slick";
import styled from "styled-components";

const SliderDiv = styled(Slider)`
  margin: auto;
  margin-top: 50px;
  width: 90%;
  div {
    height: 360px;
  }

  @media (min-width: 1400px) and (max-width: 1597px) {
    div {
      height: 400px;
    }
  }
  @media (max-width: 998px) {
    div {
      height: 300px;
    }
  }
  @media (max-width: 798px) {
    div {
      height: 250px;
    }
  }
  @media (max-width: 520px) {
    div {
      height: 200px;
    }
  }
  img {
    width: 100%;
    height: 100%;
  }
`;
export const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    lazyLoad: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div>
      <SliderDiv {...settings}>
        <div>
          <img src="./assets/img1.jpg" alt="image" />
        </div>
        <div>
          <img src="./assets/img2.jpg" alt="image" />
        </div>
        <div>
          <img src="./assets/img3.jpg" alt="image" />
        </div>
      </SliderDiv>
    </div>
  );
};
