import image1 from "./Images/image1.webp";
import image2 from "./Images/image2.webp";
import image3 from "./Images/image3.webp";
import Slider from "react-slick";
import styled from "styled-components";

const SliderDiv = styled(Slider)`
  margin: auto;
  margin-top: 5%;
  width: 90%;
  div {
    height: 360px;
  }

  @media (min-width: 1300px) and (max-width: 1597px) {
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
        <div>
          <img
            src="https://ik.imagekit.io/thestylist/rba/pub/media_rb/HOMEPAGE_IMAGES/19_Mar_22/Desktop-Banner-Banner.jpg"
            alt=""
          />
        </div>
      </SliderDiv>
    </div>
  );
};
