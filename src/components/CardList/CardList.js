import React from "react";
import Card from "../Card/Card";
import { CardWraper } from "./CardList.styled";



const CardList = ({ adverts }) => {
  return (
    <CardWraper>
      {adverts.map((advert) => (
        <Card key={advert.id} advert={advert} />
      ))}
    </CardWraper>
  );
};

export default CardList;
