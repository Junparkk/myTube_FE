import React from 'react';
import Video from '../components/Video';
import VideoList from '../components/VideoList';
import CategoryBar from '../components/CategoryBar';
import CommentWrite from '../components/CommentWrite';
import CommentList from '../components/CommentList';
import { Button, Grid, Input } from '../elements';

import styled from 'styled-components';
const Detail = () => {
  return (
    <>
      <Grid bg="white" height="100%" is_flex alignItems="flex-start">
        <Grid width="72%" padding="20px">
          <Video />
          <CommentWrite />
          <CommentList />
        </Grid>
        <PlayList>
          <CategoryBar />
          <VideoList />
          <VideoList />
          <VideoList />
          <VideoList />
          <VideoList />
          <VideoList />
          <VideoList />
          <VideoList />
        </PlayList>
      </Grid>
    </>
  );
};
const PlayList = styled.div`
  // align-items: center;
  justify-content: left;
  width: 28%;
  vertical-align: top;
  @media screen and (max-width: 1000px) {
    display: none;
  }
`;
export default Detail;
