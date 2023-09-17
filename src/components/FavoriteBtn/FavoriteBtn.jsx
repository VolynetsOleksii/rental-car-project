import { ButtonWraper } from './FavoriteBtn.styled';
import sprite from '../../assets/images/sprite.svg';
import { useState } from 'react';

export const FavoriteBtn = ({ id, addFavorite }) => {
  const [isLiked, setIsLiked] = useState(false);

  const handleButtonLikeClick = e => {
    setIsLiked(!isLiked);
    addFavorite(e.currentTarget);
    console.log('e.currentTarget: ', e.currentTarget);
    
  };

  return (
    <ButtonWraper
      onClick={handleButtonLikeClick}
      aria-label="like"
      id={id}
      selected={isLiked}
      
    >
      <svg>
        <use href={sprite + '#icon-like'}></use>
      </svg>
    </ButtonWraper>
  );
};