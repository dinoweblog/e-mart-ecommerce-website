import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import "./Slider.css";
import { ProductCard } from "../productPage/ProductCard";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductsData } from "../../Redux/Products/action";

const SliderDiv = styled(Slider)`
  margin: auto;
  width: 90%;
  margin-top: 20px;
  .product_card {
    max-width: 265px;
  }
  @media (max-width: 798px) {
    .product_card {
      width: 220px;
    }
  }
  @media (max-width: 520px) {
    .product_card {
      width: 180px;
    }
  }

  img {
    width: 100%;
  }

  .slick-list {
    margin: 0 -0px;
    padding: 0 20% 0 0 !important;
  }
  .slick-slide {
    padding: 0 10px;
  }
  .slick-list {
    padding: 0 20% 0 0;
  }
  .slick-prev {
    left: 2% !important;
    z-index: 1;
  }
  .slick-next {
    right: 2% !important;
    z-index: 1;
  }
  .slick-prev:before {
    font-size: 25px;
    textalign: "center";
  }
  .slick-next:before {
    font-size: 25px;
  }
`;

export const WomenSlider = ({ products }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductsData());
  }, []);

  const settings = {
    infinite: false,
    speed: 500,
    lazyLoad: false,
    slidesToShow: 5,
    slidesToScroll: 4,
    initialSlide: 4,
    variableWidth: true,
    adaptiveHeight: true,
    infinite: true,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        },
      },
    ],
  };

  return (
    <div>
      <SliderDiv {...settings}>
        {products.map((e) => (
          <ProductCard
            key={e._id}
            id={e._id}
            imageURL={e.imageURL}
            name={e.name}
            oldPrice={e.oldPrice}
            newPrice={e.newPrice}
            off={e.off}
            category={e.category}
            color={e.color}
            size={e.size}
          />
        ))}
      </SliderDiv>
    </div>
  );
};

// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";
// import "./Slider.css";
// import { ProductCard } from "./ProductCard";
// import styled from "styled-components";
// import { Link } from "react-router-dom";
// import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { getProductsData } from "../Redux/Products/action";

// const SampleNextArrow = (props) => {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{ ...style, display: "block" }}
//       onClick={onClick}
//     />
//   );
// };

// const SamplePrevArrow = (props) => {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{ ...style, display: "block" }}
//       onClick={onClick}
//     />
//   );
// };

// const SliderDiv = styled(Slider)`
//   margin: auto;
//   width: 100%;
//   margin-top: 20px;
//   .product_card {
//     max-width: 265px;
//   }
//   @media (max-width: 798px) {
//     .product_card {
//       width: 220px;
//     }
//   }
//   @media (max-width: 520px) {
//     .product_card {
//       width: 180px;
//     }
//   }

//   img {
//     width: 100%;
//   }

//   .slick-list {
//     margin: 0 -0px;
//     padding: 0 20% 0 0 !important;
//   }
//   .slick-slide {
//     padding: 0 10px;
//   }
//   .slick-list {
//     padding: 0 20% 0 0;
//   }
//   .slick-prev {
//     left: 2% !important;
//     z-index: 1;
//   }
//   .slick-next {
//     right: 2% !important;
//     z-index: 1;
//   }
//   .slick-prev:before {
//     font-size: 30px;
//   }
//   .slick-next:before {
//     font-size: 30px;
//   }
// `;

// export const ProductsSlider = ({ type }) => {
//   const dispatch = useDispatch();
//   const { products } = useSelector((state) => state.products);

//   useEffect(() => {
//     dispatch(getProductsData(1, 20, type));
//   }, [dispatch, type]);

//   const settings = {
//     // dots: true,
//     infinite: false,
//     speed: 500,
//     lazyLoad: true,
//     slidesToShow: 6,
//     slidesToScroll: 5,
//     initialSlide: 4,
//     variableWidth: true,
//     adaptiveHeight: true,
//     infinite: true,
//     nextArrow: <SampleNextArrow />,
//     prevArrow: <SamplePrevArrow />,

//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 4,
//           slidesToScroll: 4,
//           infinite: true,
//           dots: true,
//         },
//       },
//       {
//         breakpoint: 600,
//         settings: {
//           slidesToShow: 3,
//           slidesToScroll: 3,
//           infinite: true,
//         },
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 2,
//           infinite: true,
//         },
//       },
//     ],
//   };

//   return (
//     <div>
//       <SliderDiv {...settings}>
//         {products.map((e) => (
//           <ProductCard
//             key={e._id}
//             id={e._id}
//             imageURL={e.imageURL}
//             name={e.name}
//             oldPrice={e.oldPrice}
//             newPrice={e.newPrice}
//             off={e.off}
//             category={e.category}
//             color={e.color}
//             size={e.size}
//           />
//         ))}
//       </SliderDiv>
//     </div>
//   );
// };
