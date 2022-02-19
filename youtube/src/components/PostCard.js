import React from 'react';
import styled from 'styled-components';
import { Grid, Input } from '../elements';

const PostCard = () => {
  //360 200
  return (
    <>
      <Wrap>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </Wrap>
    </>
  );
};

const Wrap = styled.div`
  width: 90%;
  margin: auto;
  display: flex;
  flex-wrap: wrap;

  align-items: center;
  @media screen and (min-width: 1607px) {
    width: 70%;
  }
  @media screen and (min-width: 960px) and (max-width: 1607px) {
  }
  @media screen and (min-width: 551px) and (max-width: 960px) {
  }
  @media screen and (min-width: 0px) and (max-width: 551px) {
    flex-direction: column;
    width: 100%;
  }
`;

const Card = styled.div`
  width: 300px;
  height: 300px;
  border: 2px solid black;
  margin: 10px;
`;
export default PostCard;
