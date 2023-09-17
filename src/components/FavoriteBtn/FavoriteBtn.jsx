import { ButtonWraper } from "./FavoriteBtn.styled";
import sprite from "../../assets/images/sprite.svg";

export const FavoriteBtn = ({ advert, addFavorite, favoriteCars }) => {
  const carIsFavorite = favoriteCars.some(
    (favoriteCar) => favoriteCar.id === advert.id
  );
  console.log('carIsFavorite: ', carIsFavorite);

  const handleButtonLikeClick = (e) => {
     addFavorite(e.currentTarget);
  };

  return (
    <ButtonWraper
      onClick={handleButtonLikeClick}
      aria-label="like"
      id={advert.id}
      selected={carIsFavorite}
    >
      <svg>
        <use href={sprite + "#icon-like"}></use>
      </svg>
    </ButtonWraper>
  );
};
