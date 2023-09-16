import styled from "styled-components";


export const Img = styled.img`
width: 461px;
height: 248px;
border-radius: 14px;
background: #f3f3f2;
object-fit: cover;
margin-bottom: 14px;
  }
`;

export const TitleWraper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  margin-bottom: 8px;
`;

export const P = styled.p`
  font-family: Manrope;
  font-size: 16px;
  line-height: 24px;
  font-weight: 600;
  
  
  span {
    color: #3470ff;
  }
`;
export const InfoListWraper = styled.div`
display: flex;
flex-direction: column;
gap: 4px;
margin-bottom: 28px;
`;
export const InfoList = styled.ul`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: left;
  flex-wrap: wrap;
  
  font-family: Manrope;
  font-size: 12px;
  font-style: normal;
  line-height: 18px;
  font-weight: 400;
  color: rgba(18, 20, 23, 0.5);
`;
export const InfoText = styled.li`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-right: 6px;
  padding-right: 6px;
  border-right: 1px solid #ccc;
  &:last-child {
    border-right: none;
  }
`;
export const Description = styled.p`
  color: #121417;
  line-height: 20px;
  font-size: 14px;
  margin-bottom: 24px;
`;

export const Title = styled.p`
  color: #121417;
  line-height: 20px;
  font-size: 14px;
  margin-bottom: 8px;
`;
export const RentalConditionsWraper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 24px;
`;

export const RentalConditions = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 7px 14px;
  border-radius: 35px;
  color: #363535;
  background: #f9f9f9;
  font-size: 12px;
  span {
    color: #3470ff;
  }
`;

export const RentalBtn = styled.a`
  display: flex;
  width: 168px;
  padding: 12px 50px;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  color: #FFFFFF;
  background: #3470ff;
  font-family: Manrope;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  transition: all 0.3s ease;
  text-decoration: none;

  &:hover {
    background: #0b44cd;
  }
  &:focus {
    background: #0b44cd;
    box-shadow: 0 0 5px rgba(169, 169, 169, 0.8);
  }
`;