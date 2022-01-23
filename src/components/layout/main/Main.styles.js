import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  max-width: 1440px;
  margin: 0 auto;
`;
export const MainWrapper = styled.div`
  width: 100%;
`;
export const MainMenu = styled.div`
  display: flex;
  width: 100%;
  max-width: 1440px;
  align-items: center;
  position: relative;
  justify-content: space-between;
`;
export const ToggleBar = styled.div`
  display: flex;
  margin-right: 20px;
`;
export const MainImg = styled.img`
  display: flex;
  position: relative;
  width: 20%;
  margin-left: 20px;
`;
export const NavMain = styled.div`
  display: flex;
  margin-right: 20px;
  grid-gap: 10px;
  font-size: 13px;
  font-weight: 600;
  font-family: helvetica;
`;
export const PromoBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #38bfc4;
  width: 97%;
  height: 60px;
  margin-top: 10px;
  grid-gap: 5px;
`;
export const Sections = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 360px;
`;
export const Text1 = styled.div`
  display: flex;
  justify-content: center;
  color: white;
  font-weight: 500;
  font-family: helvetica;
  width: 250px;
  border-right: 1px solid white;
  padding-right: 6px;
`;
export const Text2 = styled.div`
  display: flex;
  justify-content: center;
  color: white;
  font-weight: lighter;
  font-family: helvetica;
  border-right: 1px solid white;
  padding-right: 6px;
  width: 150px;
`;
export const Text3 = styled.div`
  display: flex;
  color: white;
  font-weight: lighter;
  font-family: helvetica;
  width: 250px;
  justify-content: left;
  margin-left: 10px;
  font-family: helvetica;
`;
export const Sales = styled.div`
  font-weight: bolder;
  font-family: helvetica;
`;
export const Card1 = styled.div`
  display: flex;
`;
export const ProductBlock = styled.div`
  display: flex;
  flex-direction: column;
  width: 95%;
`;
export const Items = styled.div`
  display: flex;
`;
export const CtaBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-top: 20px;
  width: 100%;
  margin-left: 70px;
`;
export const MainTitle = styled.div`
  display: flex;
  font-size: 25px;
  font-family: helvetica;
  font-weight: 500;
  margin-bottom: 20px;
`;

export const mainTitle = styled.p`
  display: flex;
  text-align: left;
  font-size: 15px;
  font-family: helvetica;
  color: orange;
`;
export const MainText = styled.div`
  display: flex;
  font-size: 15px;
  font-family: helvetica;
  color: #555;
  margin-bottom: 20px;
`;
export const Cta = styled.div`
  display: flex;
  color: #f57652;
  font-size: 15px;
  font-family: helvetica;
  margin-bottom: 20px;
  cursor: pointer;
`;
