import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  width: 100%;

  height: 50px;
  background-color: #ff6a13;
`;

export const NavContainer = styled.div`
  display: flex;
  position: relative;
  justify-content: flex-end;
width: 100%;
  margin: 0 auto;
  max-width: 1440px;
  align-items: center;
  border-left: thin solid #ff8a46;
`;
export const Customer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 50px;
  color: white;
  font-family: helvetica;
  border-right: thin solid #ff8a46;
`;

export const MyAccount = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 50px;
  color: white;
  font-size: 13px;
  font-family: helvetica;
  border-right: thin solid #ff8a46;
  padding-left: 10px;
`;
export const MyCart = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  color: white;
  height: 50px;
  font-size: 13px;
  font-family: helvetica;
  padding-left: 10px;
`;
