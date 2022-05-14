import image1 from "./Images/image1.webp";
import image2 from "./Images/image2.webp";
import image3 from "./Images/image3.webp";
import Slider from "react-slick";
import styled from "styled-components";

const SliderDiv = styled(Slider)`
  margin: auto;
  margin-top: 7%;
  width: 90%;
  div {
    height: 390px;
  }
  img {
    /* width: 100%; */
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
      <h2> Single Item</h2>
      <SliderDiv {...settings}>
        <div>
          <img src={image3} alt="" />
        </div>
        <div>
          <img src={image2} alt="" />
        </div>
        <div>
          <img src={image1} alt="" />
        </div>
      </SliderDiv>
    </div>
  );
};
