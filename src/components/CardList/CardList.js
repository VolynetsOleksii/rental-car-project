import React from "react";
import Card from "../Card/Card";



const CardList = ({ adverts }) => {
  return (
    <div>
      {adverts.map((advert) => (
        <Card key={advert.id} advert={advert} />
      ))}
    </div>
  );
};

export default CardList;
