import React from "react";

//IMPORT COMPONENTS
import Input from "../input/Input";
import Button from "../button/Button";

//IMPORT STYLES
import { NewsBlock, NewsText } from "./Newsletter.styles";

const Newsletter = () => {
  return (
    <NewsBlock>
      <NewsText>
        Sign up for our newsletter and get £5 off your next order!
      </NewsText>
      <Input />
      <Button />
    </NewsBlock>
  );
};

export default Newsletter;
