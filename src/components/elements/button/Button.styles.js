import styled from "styled-components";

export const BtnWrapper = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: none;
  font-weight: bold;
  border: 1px solid #38bfc4;
  border-radius: 100px;
  color: #38bfc4;
  width: 100px;
  height: 40px;
  margin-left: 20px;
  &:hover {
    background-color: #38bfc4;
    color: white;
  }
`;
