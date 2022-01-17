import React from "react";

//IMPORT COMPONENTS
import Input from "../input/Input";
import { NewsBlock, NewsText } from "./Newsletter.styles";

const Newsletter = () => {
  return (
    <NewsBlock>
      <NewsText>
        Sign up for our newsletter and get £5 off your next order!
      </NewsText>
      <Input />
    </NewsBlock>
  );
};

export default Newsletter;
