import React from 'react';
import Video from '../components/Video';
import VideoList from '../components/VideoList';
import CategoryBarDetail from '../components/CategoryBarDetail';
import CommentWrite from '../components/CommentWrite';
import CommentList from '../components/CommentList';
import { Button, Grid, Input } from '../elements';

import { useSelector, useDispatch } from 'react-redux';

import styled from 'styled-components';
const Detail = (props) => {
  const id = props.match.params.postId;
  console.log('Detail', props);
  const comment_list = useSelector((state) => state.comments.list);
  const post_list = useSelector((state) => state.post.list);
  console.log('Detail_comment_list', comment_list);
  return (
    <>
      <Grid bg="white" height="100%" is_flex alignItems="flex-start">
        <Grid width="72%" padding="20px">
          <Video postId={id} post_list={post_list} />
          <CommentWrite postId={id} comment_list={comment_list} />
          <CommentList postId={id} comment_list={comment_list} />
        </Grid>
        <PlayList>
          <CategoryBarDetail postId={id} />
          {post_list.map((post, idx) => {
            return <VideoList key={post.postId} {...post}></VideoList>;
          })}
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
