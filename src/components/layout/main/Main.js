import React from "react";
//IMPORT COMPONENTS
import Container from "../../elements/container/Container";
import Photo from "../../elements/photo/Photo";
import Toggle from "../../elements/toggle/Toggle";
import Filter from "../../elements/filter/Filter";
import Card from "../../elements/card/Card";
import Items from "../../elements/items/Items";
import Newsletter from "../../elements/newsletter/Newsletter";

//IMPORT STYLES
import {
  MainContainer,
  MainWrapper,
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
  ToggleBar,
  Card1,
  ProductBlock,
  CtaBlock,
  Cta,
  MainTitle,
  MainText,
} from "./Main.styles";

//IMPORT DATA
import { list1, list2 } from "../../elements/data/cards";

const Main = () => {
  return (
    <MainWrapper>
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
        <ProductBlock>
          <Items list={list1} />
          <Items list={list2} />
        </ProductBlock>
        <CtaBlock>
          <MainTitle>Give your photos the treatment they deserve</MainTitle>
          <MainText>
            If your pictures are scattered all over social media and various
            devices, why not print them? With bonusprint you can print your
            photo products with the highest quality...
          </MainText>
          <Cta>Read More</Cta>
        </CtaBlock>
        <Newsletter />
      </MainContainer>
    </MainWrapper>
  );
};

export default Main;
