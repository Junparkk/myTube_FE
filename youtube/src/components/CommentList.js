import React from 'react';
import { Button, Grid, Input, Image, Text } from '../elements';
import { AiOutlineLike, AiOutlineDislike } from 'react-icons/ai';

import { useDispatch, useSelector } from 'react-redux';
import { actionCreators as commentsActions } from '../redux/modules/comments';

import { HiOutlinePencil } from 'react-icons/hi';
import { BsTrash } from 'react-icons/bs';

const CommentList = (props) => {
  const dispatch = useDispatch();
  const comment_list = useSelector((state) => state.comments.list);
  const { postId } = props;

  React.useEffect(() => {
    dispatch(commentsActions.getCommentDB(postId));
  }, []);
  if (!comment_list[postId]) {
    return null;
  }
  return (
    <>
      <Grid>
        {comment_list[postId].map((c, i) => {
          return <CommentItem postId={postId} key={i} {...c} />;
        })}
      </Grid>
    </>
  );
};

export default CommentList;

const CommentItem = (props) => {
  const dispatch = useDispatch();
  const { postId, key } = props;
  const comment_list = useSelector((state) => state.comments.list[postId]);

  return (
    <>
      <Grid is_flex padding="10px" alignItems="flex-start">
        {/* Profile */}
        <Image shape="circle" size="50" src={props.profile} />
        <Grid>
          <Grid is_flex justifyContent="left" height="10px" margin="0px">
            <Text width="50px" color="#000" padding="0px" margin="0px">
              {props.channelName}
            </Text>
            <Text width="100px" color="#999999" padding="0px" margin="0px">
              11시간 전
            </Text>
          </Grid>
          <Grid is_flex>
            <Text color="#000"> {props.comment} </Text>
            <Grid is_flex justifyContent="right">
              <Button
                bg="#fff"
                width="15px"
                fontSize="15px"
                alignItems="center"
                display="flex"
                padding="0"
              >
                <HiOutlinePencil color="#000" />
              </Button>
              <Button
                bg="#fff"
                width="15px"
                fontSize="15px"
                alignItems="center"
                display="flex"
                padding="0"
              >
                <BsTrash color="#000" />
              </Button>
            </Grid>
          </Grid>

          <Grid is_flex justifyContent="left">
            <Button
              bg="#fff"
              width="50px"
              fontSize="15px"
              alignItems="center"
              display="flex"
              padding="0"
              color="#000"
            >
              <AiOutlineLike color="#000" /> &nbsp; 2
            </Button>
            <Button
              bg="#fff"
              width="30px"
              fontSize="15px"
              alignItems="center"
              display="flex"
              padding="0"
            >
              <AiOutlineDislike color="#000" />
            </Button>
            <Button
              bg="#fff"
              width="30px"
              fontSize="15px"
              alignItems="center"
              display="flex"
              padding="0"
              color="#999999"
            >
              답글
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
