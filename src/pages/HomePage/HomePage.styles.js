import styled from "styled-components";
import BackgroundImage from "../../assets/images/images.jpg";

export const BackgroundWrapper = styled.div`
  background-image: url(${BackgroundImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 100vh;
  paddingtop: 200px;
`;

export const Header = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 150px;
  margin-bottom: 40px;
  font-family: Manrope;
  font-size: 50px;
  font-style: normal;
  line-height: 18px;
  font-weight: 800;
  color: #ffffff;
`;

export const Text = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  gap:30px;
  
  font-family: Manrope;
  font-size: 20px;
  font-style: normal;
  line-height: 18px;
  font-weight: 800;
  color: #ffffff;
`;
