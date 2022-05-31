import { Link } from "react-router-dom";
import styled from "styled-components";

const MainDiv = styled.div`
  border: 1px solid #d1d1d1;
  padding: 2rem;
  div {
    overflow: hidden;
    cursor: pointer;
  }
  h3 {
    padding: 0;
    margin: 0;
    padding-top: 1rem;
  }
  .big_text {
    background-color: white;
    font-size: 1.5rem;
    text-align: center;
  }
`;

export const BigCard = ({ img, txt, link }) => {
  return (
    <MainDiv className="big_card">
      <Link to={link}>
        <div className="big_img">
          <img src={img} alt="" />
        </div>
        <div className="big_text">
          <h3>{txt}</h3>
        </div>
      </Link>
    </MainDiv>
  );
};
