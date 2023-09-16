import React from "react";
import {
  Description,
  Img,
  InfoList,
  InfoListWraper,
  InfoText,
  P,
  RentalBtn,
  RentalConditions,
  RentalConditionsWraper,
  Title,
  TitleWraper,
} from "./PopUp.styled";
import {
  getCityFromAddress,
  getCountryFromAddress,
  getDriverLicense,
  getFormatMileage,
  getFormatRentalPrice,
  getMinAge,
  getSecurityDeposit,
} from "../../helpers/utils";

const PopUp = ({ advert }) => {
  console.log("advert: ", advert);

  return (
    <>
      <Img
        src={advert.img}
        alt={`${advert.make} ${advert.model}`}
        loading="lazy"
      />
      <TitleWraper>
        <P>
          {advert.make} <span>{advert.model}</span>, {advert.year}
        </P>
      </TitleWraper>
      <InfoListWraper>
        <InfoList>
          <InfoText>{getCityFromAddress(advert)}</InfoText>
          <InfoText>{getCountryFromAddress(advert)}</InfoText>
          <InfoText>Id: {advert.id}</InfoText>
          <InfoText>Year: {advert.year}</InfoText>
          <InfoText>Type: {advert.type}</InfoText>
        </InfoList>

        <InfoList>
          <InfoText>Fuel Consumption: {advert.fuelConsumption}</InfoText>
          <InfoText>Engine Size: {advert.engineSize}</InfoText>
        </InfoList>
      </InfoListWraper>
      <Description>{advert.description}</Description>
      <Title>Accessories and functionalities:</Title>
      <InfoListWraper>
        <InfoList>
          {advert.accessories.map((item, index) => (
            <InfoText key={index}>{item}</InfoText>
          ))}
        </InfoList>
        <InfoList>
          {advert.functionalities.map((item, index) => (
            <InfoText key={index}>{item}</InfoText>
          ))}
        </InfoList>
      </InfoListWraper>
      <Title>Rental Conditions:</Title>
      <RentalConditionsWraper>
        <RentalConditions>
          {getMinAge(advert).key}:<span>{getMinAge(advert).value}</span>
        </RentalConditions>
        <RentalConditions>{getDriverLicense(advert)}</RentalConditions>
        <RentalConditions>{getSecurityDeposit(advert)}</RentalConditions>
        <RentalConditions>
          Mileage: <span>{getFormatMileage(advert)}</span>
        </RentalConditions>
        <RentalConditions>
          Price: <span>{getFormatRentalPrice(advert)}</span>
        </RentalConditions>
      </RentalConditionsWraper>
      <RentalBtn href="tel:+380730000000">Rental car</RentalBtn>
    </>
  );
};

export default PopUp;
