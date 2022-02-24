import React from 'react';
import { Button, Grid, Input, Image, Text } from '../elements';

import { MdOutlineSort } from 'react-icons/md';

import { useDispatch, useSelector } from 'react-redux';
import { actionCreators as commentsActions } from '../redux/modules/comments';
import { history } from '../redux/configureStore';

import { actionCreators as userActions } from '../redux/modules/user';

const CommentWrite = (props) => {
  const dispatch = useDispatch();
  const { postId, profile } = props;
  const post_list = useSelector((state) => state.post.list);
  const post = post_list.find((p) => p.postId === postId);

  const myProfile = localStorage.getItem('profile');
  const comment_list = useSelector((state) => state.comments.list[postId]);
  //댓글 쓰기
  const [comment, setComment] = React.useState('');

  const onChange = (e) => {
    setComment(e.target.value);
  };

  //댓글 버튼 on/off
  const [commentButton, setCommentButton] = React.useState(false);

  const btnOn = () => {
    setCommentButton(true);
  };

  const btnOff = () => {
    setCommentButton(false);
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
    dispatch(commentsActions.addCommentDB(postId, content));
    setComment('');
  };

  React.useEffect(() => {
    dispatch(userActions.tokenCheck());
    dispatch(commentsActions.getCommentDB(postId));
  }, []);
  return (
    <>
      <Grid is_flex justifyContent="left">
        <Text color="#000" padding="10px" width="100px">
          {' '}
          댓글 {comment_list && comment_list.length}개
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
        <Image shape="circle" size="50" src={myProfile} />
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
            _onFocus={btnOn}
          />
          {commentButton ? (
            <Grid is_flex justifyContent="right">
              <Button width="80px" bg="#fff" color="#aaaaaa" _onClick={btnOff}>
                취소
              </Button>
              <Button
                width="80px"
                bg="#ececec"
                color="#6d6d6d"
                _onClick={write}
              >
                댓글
              </Button>
            </Grid>
          ) : (
            <Grid>
              <Button bg="#fff" color="#fff"></Button>
            </Grid>
          )}
        </Grid>
      </Grid>
    </>
  );
};

export default CommentWrite;
