import styled from "styled-components";

export const ButtonWraper = styled.button`
  position: absolute;
  right: 14px;
  top: 14px;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  border: none;
  background: transparent;
  cursor: pointer;
  &:hover: {
    color: #0b44cd;
    opacity: 1;
  }
  
  svg {
    width: 18px;
    height: 18px;
    stroke-width: 3;
    stroke: ${({ selected }) =>
      selected ? "#0B44CD" : "rgba(255, 255, 255, 0.8)"};
    fill: ${({ selected }) => (selected ? "#0B44CD" : "none")};
  }
`;


