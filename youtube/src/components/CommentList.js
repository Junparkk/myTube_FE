import React, { useState } from 'react';
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
  const { postId, channelName, commentId, comment } = props;
  const comment_list = useSelector((state) => state.comments.list[postId]);

  //input 창
  let [input, setInput] = useState();
  const [editable, setEditable] = useState(false);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const editOn = () => {
    setEditable(true);
    setInput(comment);
  };
  const editOff = () => {
    setEditable(false);
  };
  const handleKeydown = (e) => {
    if (e.key === 'Enter') {
      editComment();
    }
  };
  //댓글 수정하기
  const editComment = () => {
    let content = {
      comment: input,
    };
    dispatch(commentsActions.editCommentDB(postId, commentId, content));
    setEditable(!editable);
  };

  //댓글 삭제하기
  const deleteComment = () => {
    dispatch(commentsActions.deleteCommentDB(postId, commentId));
  };
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
            <Text color="#000">
              {editable ? (
                <Grid>
                  <Grid>
                    <Input
                      type="text"
                      borderStyle="none none solid none"
                      width="100%"
                      bg="#fff"
                      margin="10px 0px"
                      color="#000"
                      value={input}
                      _onChange={handleChange}
                      _onKeyDown={handleKeydown}
                    />
                  </Grid>

                  <Grid is_flex justifyContent="right">
                    <Button
                      width="80px"
                      bg="#fff"
                      color="#aaaaaa"
                      _onClick={editOff}
                    >
                      취소
                    </Button>
                    <Button
                      width="80px"
                      bg="#ececec"
                      color="#6d6d6d"
                      _onClick={editComment}
                    >
                      댓글
                    </Button>
                  </Grid>
                </Grid>
              ) : (
                comment
              )}
            </Text>
            <Grid is_flex justifyContent="right">
              <Button
                bg="#fff"
                width="15px"
                fontSize="15px"
                alignItems="center"
                display="flex"
                padding="0"
                _onClick={editOn}
                style={{ cursor: 'pointer' }}
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
                _onClick={deleteComment}
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
