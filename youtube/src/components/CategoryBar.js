import React from 'react';
import styled from 'styled-components';

const CategoryBar = () => {
  return (
    <CategoryBox>
      <CategoryCircle>모두</CategoryCircle>
      <CategoryCircle>관련 컨텐츠</CategoryCircle>
    </CategoryBox>
  );
};

const CategoryBox = styled.div`
  height: 10vh;
  max-width: 100%;
  display: flex;
  justify-content: left;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: -10px;
  @media only screen and (max-width: 768px) {
    margin-bottom: 35px;
    padding-bottom: 0px;
  }
`;
const CategoryCircle = styled.p`
  margin: 10px;
  font-size: 17px;
  padding: 5px 15px;
  color: #000;
  background-color: #303030;
  border-radius: 30px;
  //   @media only screen and (max-width: 768px) {
  //     padding: 9px 9px;
  //     font-size: 14px;
  //   }
  cursor: pointer;
`;

export default CategoryBar;
