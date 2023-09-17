import React from "react";
import { BackgroundWrapper, Header, Text } from "./HomePage.styles";

const HomePage = () => {
  return (
    <BackgroundWrapper>
      <section>
        <Header>Car Rental – Search, Compare & Save</Header>
        <Text>
        <p>Free cancellations on most bookings</p>
        <p>60,000+ locations</p>
        <p>Customer support in 40+ languages</p>
        </Text>
      </section>
    </BackgroundWrapper>
  );
};

export default HomePage;
