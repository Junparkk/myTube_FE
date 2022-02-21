import React from 'react';
import { Button, Grid, Input, Image, Text } from '../elements';

import { MdOutlineSort } from 'react-icons/md';

import { useDispatch } from 'react-redux';
import { actionCreators as commentsActions } from '../redux/modules/comments';
import { history } from '../redux/configureStore';

const CommentWrite = (props) => {
  const dispatch = useDispatch();
  const { postId } = props;
  console.log(postId);
  //댓글 쓰기
  const [comment, setComment] = React.useState('');

  const onChange = (e) => {
    setComment(e.target.value);
  };

  const write = () => {
    // if (loginUserId === null) {
    //   window.alert(
    //     "회원이 아닌 경우, 댓글 작성이 불가능합니다. 로그인 해주세요~!"
    //   )
    //   history.replace("/login")
    //   return
    // }
    let content = {
      comment: comment,
    };
    dispatch(commentsActions.addCommentDB('621195dc8fa68aed4d558fc1', content));
    setComment('');
  };
  return (
    <>
      <Grid is_flex justifyContent="left">
        <Text color="#000" padding="10px" width="100px">
          {' '}
          댓글 2개
        </Text>
        <Button
          width="150px"
          bg="#fff"
          fontSize="20px"
          alignItems="center"
          display="flex"
          padding="0"
        >
          <MdOutlineSort color="#000" />
          <Text color="#000" size="25" width="100px">
            &nbsp;정렬 기준
          </Text>
        </Button>
      </Grid>
      <Grid is_flex>
        {/* Profile */}
        <Image shape="circle" size="50" />
        <Grid justifyContent="left" alignItems="flex-start">
          <Input
            placeholder="공개 댓글 추가..."
            borderStyle="none none solid none"
            width="100%"
            bg="#fff"
            margin="10px 0px"
            color="#000"
            value={comment}
            _onChange={onChange}
          />
          <Grid is_flex justifyContent="right">
            <Button width="80px" bg="#fff" color="#aaaaaa">
              취소
            </Button>
            <Button width="80px" bg="#ececec" color="#6d6d6d" _onClick={write}>
              댓글
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default CommentWrite;
