import React from "react";
import CardList from "../../components/CardList/CardList";
import { limit } from "../../services/advertsApi";
import { LoadMoreButton } from "./CatalogPage.styled";

const CatalogPage = ({
  adverts,
  handleLoadMoreClick,
  addFavorite,
  favoriteCars,
  updateFavoriteCars,
}) => {
  return (
    <div>
      {adverts.length > 0 && <CardList adverts={adverts} addFavorite={addFavorite}/>}
      {adverts.length > 0 && adverts.length % limit === 0 && (
        <LoadMoreButton type="button" onClick={handleLoadMoreClick}>
          Load more
        </LoadMoreButton>
      )}
    </div>
  );
};

export default CatalogPage;
