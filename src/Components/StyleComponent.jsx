import styled from "styled-components";
const Buttons = styled.button`
  background-color: ${(props) => props.bg};
  color: ${(props) => props.cl};
  padding: ${(p) => p.defaultBtn.padding};
  border: ${(p) => p.bd};
  border-radius: ${(p) => p.bdr};
  margin: ${(p) => p.defaultBtn.margin};
  cursor: pointer;
`;

const SizeDiv = styled.div``;

export { Buttons, SizeDiv };
