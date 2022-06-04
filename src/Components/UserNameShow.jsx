import styled from "styled-components";

const Div = styled.div`
  width: auto;
  position: absolute;
  top: 18%;
  left: 43%;
  background-color: white;
  color: green;
  padding: 10px 30px;
  border-radius: 5px;
  z-index: 20;

  p {
    font-size: 20px;
  }
`;

export const UserNameShow = ({ name }) => {
  <Div className="massage_card">
    <p>Welcome {name}</p>
  </Div>;
};
