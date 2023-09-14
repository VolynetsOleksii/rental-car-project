import React from "react";

const Card = ({advert}) => {
  return (
    <>
      <img src={advert.img} alt="car" />
      <div>
        <p>
          {advert.make} <span>{advert.model}</span>, {advert.year}
        </p>
        <p>{advert.rentalPrice}</p>
      </div>

      <ul>
        <li>{advert.address}</li>
        <li>{advert.rentalCompany}</li>
        <li>{advert.type}</li>
        <li>{advert.model}</li>
        <li>{advert.id}</li>
        <li>{advert.accessories[1]}</li>
      </ul>
      <button type="button">Learn more</button>
    </>
  );
};

export default Card;