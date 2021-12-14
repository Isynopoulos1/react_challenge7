import React from "react";

import {
  MainContainer,
  MainImg,
  NavMain,
  Photobooks,
  Calendars,
  Cards,
  Prints,
  WallArt,
  Products,
  Blog
} from "./Main.styles";

const Main = () => {
  return (
    <MainContainer>
      <MainImg
        src="https://ik.imagekit.io/ppayaz/react_challenge7/Captura_de_Pantalla_2021-12-12_a_la_s__20.01.25_b1cOpCp6V.png?updatedAt=1639360933226"
        alt="logo"
      />
      <NavMain>
        <Photobooks>Photo books</Photobooks>
        <Calendars>Photo calendars</Calendars>
        <Cards>Personalised cards</Cards>
        <Prints>Photo prints</Prints>
        <WallArt>Wall arts</WallArt>
        <Products>More products</Products>
        <Blog>Blog</Blog>
      </NavMain>
    </MainContainer>
  );
};

export default Main;
