import React from "react";
import { CardWraper, ImgWraper, InfoList, InfoText, LearnMoreBtn, P, TitleWraper } from "./Card.styled";

const Card = ({ advert }) => {
  const country = advert.address.split(",")[2];
  const city = advert.address.split(",")[1];
  return (
    <CardWraper>
      <ImgWraper>
        <img src={advert.img} alt="car" />
      </ImgWraper>
      <TitleWraper>
        <P>
          {advert.make} <span>{advert.model}</span>, {advert.year}
        </P>
        <P>{advert.rentalPrice}</P>
      </TitleWraper>

      <InfoList>
        <InfoText>{city}</InfoText>
        <InfoText>{country}</InfoText>
        <InfoText>{advert.rentalCompany}</InfoText>
        <InfoText>{advert.type}</InfoText>
        <InfoText>{advert.model}</InfoText>
        <InfoText>{advert.id}</InfoText>
        <InfoText>{advert.functionalities[0]}</InfoText>
      </InfoList>
      <LearnMoreBtn type="button">Learn more</LearnMoreBtn>
    </CardWraper>
  );
};

export default Card;
