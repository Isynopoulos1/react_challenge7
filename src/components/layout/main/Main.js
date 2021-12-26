import React from "react";
//IMPORT COMPONENTS
import Container from "../../elements/container/Container";

//IMPORT STYLES
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
  Blog,
  MainMenu,
  PromoBar,
  Text1,
  Text2,
  Text3,
  Sales,
  Offer,
  Sections
} from "./Main.styles";

const Main = () => {
  return (
    <MainContainer>
      <MainMenu>
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
      </MainMenu>
      <Container />
      <PromoBar>
        <Sections>
          <Text1>Up to 60% off selected products</Text1>
          <Text2>
            Code: <Sales>SALES60</Sales>
          </Text2>
          <Text3> Ends 05:59pm, 06-01</Text3>
        </Sections>
        <Offer>Offer Details</Offer>
      </PromoBar>
    </MainContainer>
  );
};

export default Main;
