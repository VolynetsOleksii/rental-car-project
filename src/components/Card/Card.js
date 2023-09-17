import React, { useState } from "react";
import {
  CardWraper,
  ImgWraper,
  InfoList,
  InfoText,
  LearnMoreBtn,
  P,
  TitleContainer,
  TitleWraper,
} from "./Card.styled";
import { Modal } from "../Modal/Modal";
import PopUp from "../PopUp/PopUp";
import { getCityFromAddress, getCountryFromAddress } from "../../helpers/utils";
import { FavoriteBtn } from "../FavoriteBtn/FavoriteBtn";

const Card = ({ advert, addFavorite }) => {
  const [showModal, setShowModal] = useState(false);
  
  
  return (
    <CardWraper>
      <ImgWraper>
      <FavoriteBtn id={advert.id} addFavorite={addFavorite}/>
        <img
          src={advert.img}
          alt={`${advert.make} ${advert.model}`}
          loading="lazy"
        />
        
      </ImgWraper>
      <TitleWraper>
        <TitleContainer>
          <P>
            {advert.make} <span>{advert.model}</span>, {advert.year}
          </P>
        </TitleContainer>
        <P>{advert.rentalPrice}</P>
      </TitleWraper>

      <InfoList>
        <InfoText>{getCityFromAddress(advert)}</InfoText>
        <InfoText>{getCountryFromAddress(advert)}</InfoText>
        <InfoText>{advert.rentalCompany}</InfoText>
        <InfoText>{advert.type}</InfoText>
        <InfoText>{advert.model}</InfoText>
        <InfoText>{advert.id}</InfoText>
        <InfoText>{advert.functionalities[0]}</InfoText>
      </InfoList>
      <LearnMoreBtn type="button" onClick={() => setShowModal(true)}>
        Learn more
      </LearnMoreBtn>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <PopUp advert={advert}></PopUp>
        </Modal>
      )}
    </CardWraper>
  );
};

export default Card;
