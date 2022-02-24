import React from 'react';
import Video from '../components/Video';
import VideoList from '../components/VideoList';
import CategoryBarDetail from '../components/CategoryBarDetail';
import CommentWrite from '../components/CommentWrite';
import CommentList from '../components/CommentList';
import { Button, Grid, Input } from '../elements';

import { useSelector, useDispatch } from 'react-redux';
import { actionCreators as commentsActions } from '../redux/modules/comments';
import { actionCreators as postActions } from '../redux/modules/post';

import styled from 'styled-components';
const Detail = (props) => {
  const dispatch = useDispatch();
  const id = props.match.params.postId;
  const comment_list = useSelector((state) => state.comments.list);
  const post_list = useSelector((state) => state.post.list);

  const one_list = useSelector((state) => state.post.post);
  const check = useSelector((state) => state);

  console.log('check', check.user.check);

  const post = post_list.filter((p) => p.postId !== id);
  const postOne = useSelector((state) => state.post.post);

  // const post = post_list.find((p) => p.postId === id);
  console.log('Detail', post_list);
  //새로고침 시 리덕스 데이터가 날아 갔을 때 주소창에서 포스트 아이디를 받아서 하나만 다시 요청
  React.useEffect(() => {
    dispatch(postActions.getOnePostDB(id));
    dispatch(commentsActions.getCommentDB(id));
    if (!postOne) {
      dispatch(postActions.getOnePostDB(id));
    }
  }, []);
  React.useEffect(() => {
    dispatch(commentsActions.getCommentDB(id));
  }, [post_list]);
  React.useEffect(() => {
    dispatch(postActions.getPostAPI());
  }, []);
  return (
    <>
      <Grid bg="white" height="100%" is_flex alignItems="flex-start">
        <Grid width="72%" padding="20px">
          <Video
            postId={id}
            post_list={post_list}
            check={check}
            one_list={one_list}
            postOne={postOne}
          />
          <CommentWrite postId={id} comment_list={comment_list} />
          <CommentList postId={id} comment_list={comment_list} />
        </Grid>
        <PlayList>
          <CategoryBarDetail postId={id} />
          {post.map((post, idx) => {
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
