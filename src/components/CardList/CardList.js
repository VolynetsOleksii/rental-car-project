import React from "react";
import Card from "../Card/Card";
import { CardWraper } from "./CardList.styled";



const CardList = ({ adverts, addFavorite }) => {
  return (
    <CardWraper>
      {adverts.map((advert) => (
        <Card key={advert.id} advert={advert} addFavorite={addFavorite}/>
      ))}
    </CardWraper>
  );
};

export default CardList;
