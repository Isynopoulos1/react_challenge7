import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  font-family: helvetica;
  color: #555;
  font-size: 15px;
  width: 50%;
  height: 338px;
  border: 1px solid #ccc;
  -webkit-transition: all 0.5s ease-in-out;
  &:hover {
    box-shadow: 0 8px 3px -6px #ccc;
  }
`;
export const CardBox = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  overflow: hidden;
`;
export const CardImage = styled.img`
  display: flex;
  width: 100%;
  height: auto;
  transition: all 0.5s ease-in-out;
  &:hover {
    transform: scale(1.4);
  }
`;
export const Products = styled.div`
  display: flex;
  justify-content: center;
  font-weight: lighter;
  margin-top: 20px;
`;
export const Price = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
  &:hover {
    color: #38bfc4;
  }
  cursor: pointer;
`;

export const Discount = styled.div`
  display: flex;
  position: absolute;
  z-index: 2;
  left: 10px;
  top: 10px;
  justify-content: center;
  align-items: center;
  width: 70px;
  height: 20px;
  background-color: #38bfc4;
  border: 1px solid #31a3a7;
  color: white;
`;
