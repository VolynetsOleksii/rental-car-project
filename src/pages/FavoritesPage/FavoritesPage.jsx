import React from 'react'
import CardList from '../../components/CardList/CardList';

const FavoritesPage = ({addFavorite, favoriteCars}) => {
  return (
    <div>
       {favoriteCars.length > 0 && <CardList adverts={favoriteCars} addFavorite={addFavorite}/>}
    </div>
  )
}

export default FavoritesPage;