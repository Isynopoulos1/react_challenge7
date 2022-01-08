import React from "react";
//IMPORT COMPONENTS
import Container from "../../elements/container/Container";
import Photo from "../../elements/photo/Photo";
import Toggle from "../../elements/toggle/Toggle";
import Filter from "../../elements/filter/Filter";

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
  Sections,
  ToggleBar
} from "./Main.styles";

const Main = ({ icon2, icon3 }) => {
  return (
    <MainContainer>
      <MainMenu>
        <MainImg
          src="https://ik.imagekit.io/ppayaz/react_challenge7/Captura_de_Pantalla_2021-12-12_a_la_s__20.01.25_b1cOpCp6V.png?updatedAt=1639360933226"
          alt="logo"
        />
        <Filter icon3="navigate_next" />
      </MainMenu>
      <Container icon2="navigate_next" />
      <PromoBar>
        <Sections>
          <Text1>Up to 60% off selected products</Text1>
          <Text2>
            Code: <Sales>SALES60</Sales>
          </Text2>
          <Text3> Ends 05:59pm, 06-01</Text3>
        </Sections>
        <ToggleBar>
          <Toggle placeholder="Offer Details" icon3="navigate_next" />
        </ToggleBar>
      </PromoBar>
      <Photo />
    </MainContainer>
  );
};

export default Main;
