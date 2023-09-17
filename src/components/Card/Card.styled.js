import styled from "styled-components";

export const CardWraper = styled.div`
  width: 274px;
  height: 426px;
`;

export const ImgWraper = styled.div`
  position: relative;
  width: 274px;
  height: 268px;
  margin-bottom: 14px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 14px;
  }
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

export const TitleWraper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  margin-bottom: 8px;
`;
export const TitleContainer = styled.div`
white-space: nowrap;
overflow: hidden;
text-overflow: ellipsis;
`;

export const InfoList = styled.ul`
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: left;
  flex-wrap: wrap;
  margin-bottom: 28px;
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
export const LearnMoreBtn = styled.button`
  display: flex;
  width: 274px;
  height: 44px;
  padding: 12px 0;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  color: #ffffff;
  background: #3470ff;
  border: none;
  cursor: pointer;
  outline: none;
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    background: #0b44cd;
  }
`;
