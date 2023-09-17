import React from "react";
import Card from "../../components/Card/Card";
import { CardWraper } from "../../components/CardList/CardList.styled";

const FavoritesPage = ({ addFavorite, favoriteCars }) => {
  return (
    <CardWraper>
      {favoriteCars.length > 0 && (
        favoriteCars.map((advert) => (
          <Card key={advert.id} advert={advert} addFavorite={addFavorite} favoriteCars={favoriteCars} />
        ))
        // <CardList adverts={favoriteCars} addFavorite={addFavorite} />
      )}
    </CardWraper>
  );
};

export default FavoritesPage;
