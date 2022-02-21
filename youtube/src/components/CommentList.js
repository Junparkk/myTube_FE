import React from 'react';
import { Button, Grid, Input, Image, Text } from '../elements';
import { AiOutlineLike, AiOutlineDislike } from 'react-icons/ai';

import { useDispatch, useSelector } from 'react-redux';
import { actionCreators as commentsActions } from '../redux/modules/comments';

import { HiOutlinePencil } from 'react-icons/hi';
import { BsTrash } from 'react-icons/bs';
const CommentList = (props) => {
  const dispatch = useDispatch();
  const comment_list = useSelector((state) => state);
  const { postId } = props;
  console.log('commentList', comment_list, postId, props);
  // 댓글 작성자만 삭제 및 수정 가능하게

  React.useEffect(() => {
    dispatch(commentsActions.getCommentDB('621195dc8fa68aed4d558fc1'));
  }, []);
  return (
    <>
      <Grid is_flex padding="10px" alignItems="flex-start">
        {/* Profile */}
        <Image shape="circle" size="50" />
        <Grid>
          <Grid is_flex justifyContent="left" height="10px" margin="0px">
            <Text width="50px" color="#000" padding="0px" margin="0px">
              아이디
            </Text>
            <Text width="100px" color="#999999" padding="0px" margin="0px">
              11시간 전
            </Text>
          </Grid>
          <Grid is_flex>
            <Text color="#000">댓글이당!</Text>
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

export default CommentList;
