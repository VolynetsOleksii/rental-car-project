import React from "react";
import Card from "../Card/Card";
import { CardWraper } from "./CardList.styled";

const CardList = ({ adverts, addFavorite, favoriteCars }) => {
  return (
    <CardWraper>
      {adverts.map((advert) => (
        <Card key={advert.id} advert={advert} addFavorite={addFavorite} favoriteCars={favoriteCars} />
      ))}
    </CardWraper>
  );
};

export default CardList;
