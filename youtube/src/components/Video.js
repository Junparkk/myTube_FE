import React from 'react';
import { Button, Grid, Input, Text, Image } from '../elements';

import { useDispatch, useSelector } from 'react-redux';

import { AiFillLike, AiOutlineLike, AiOutlineDislike } from 'react-icons/ai';
import { RiShareForwardLine } from 'react-icons/ri';
import { GiSaveArrow } from 'react-icons/gi';
import { MdOutlinePlaylistAdd, MdOutlineMoreHoriz } from 'react-icons/md';

import { actionCreators as commentsActions } from '../redux/modules/comments';
import { actionCreators as postActions } from '../redux/modules/post';
import { actionCreators as userActions } from '../redux/modules/user';

const Video = (props) => {
  const dispatch = useDispatch();
  const postId = props.postId;
  const check = props.check.user.check;
  const checkOne = props.one_list.channelName;
  const videoOne = props.one_list.videoUrl;
  console.log('비디오 유알엘', videoOne);
  const post_list = useSelector((state) => state.post.list);
  const post = post_list.find((p) => p.postId === postId);
  const postOne = useSelector((state) => state.post.post);
  console.log(props, '프롭스');

  //좋아요 버튼 on/off
  const [likeButton, setlikeButton] = React.useState(false);
  const [isLogin, setIsLogin] = React.useState(false);

  console.log(checkOne, check.channelName);

  console.log('isLogin', isLogin);
  const btnLikeOn = () => {
    setlikeButton(true);
  };

  const btnLikeOff = () => {
    setlikeButton(false);
  };

  React.useEffect(() => {
    dispatch(userActions.loginCheckAPI());
  }, []);

  return (
    <section>
      <video
        width="100%"
        height="800px"
        frameBorder="0"
        // allowFullScreen
        controls
        autoPlay="autoplay"
        muted="muted"
      >
        <source src={`${post && post.videoUrl}`} type="video/mp4" />
      </video>
      <Grid>
        <Text color="#000" size="20px" bold>
          {post && post.title}
        </Text>
      </Grid>

      <Grid is_flex>
        <Text width="200px" color="#606060" margin="1px">
          조회수 {post && post.views}회
        </Text>
        <Grid is_flex justifyContent="right">
          {/* 좋아요 */}
          {likeButton ? (
            <Button
              bg="#fff"
              width="80px"
              fontSize="15px"
              alignItems="center"
              display="flex"
              padding="0"
            >
              <AiFillLike color="#000" size="25" onClick={btnLikeOff} />{' '}
              <Text color="#000"> &nbsp;&nbsp;100</Text>
            </Button>
          ) : (
            <Button
              bg="#fff"
              width="80px"
              fontSize="15px"
              alignItems="center"
              display="flex"
              padding="0"
            >
              <AiOutlineLike color="#000" size="25" onClick={btnLikeOn} />{' '}
              <Text color="#000"> &nbsp;&nbsp;100</Text>
            </Button>
          )}

          {/* 싫어요 */}
          <Button
            bg="#fff"
            width="80px"
            alignItems="center"
            display="flex"
            padding="0"
          >
            <AiOutlineDislike color="#000" size="25" />{' '}
            <Text color="#000"> &nbsp;&nbsp;싫어요</Text>
          </Button>
          {/* 공유 */}
          <Button
            bg="#fff"
            width="70px"
            alignItems="center"
            display="flex"
            padding="0"
          >
            <RiShareForwardLine color="#000" size="25" />{' '}
            <Text color="#000"> &nbsp;&nbsp;공유</Text>
          </Button>
          {/* 오프라인 저장 */}
          <Button
            bg="#fff"
            width="120px"
            alignItems="center"
            display="flex"
            padding="0"
          >
            <GiSaveArrow color="#000" size="25" />{' '}
            <Text color="#000"> &nbsp;&nbsp;오프라인 저장</Text>
          </Button>
          {/* 저장 */}
          <Button
            bg="#fff"
            width="70px"
            alignItems="center"
            display="flex"
            padding="0"
          >
            <MdOutlinePlaylistAdd color="#000" size="25" />{' '}
            <Text color="#000"> &nbsp;&nbsp;저장</Text>
          </Button>
          {/* 메뉴 */}
          <Button
            bg="#fff"
            width="25px"
            alignItems="center"
            padding="0"
            _onClick={() => {
              dispatch(postActions.clappingDeleteAPI(postId));
            }}
            display={checkOne === check.channelName ? '' : 'none'}
          >
            {/* <MdOutlineMoreHoriz color="#000" size="25" /> */}
            <Text color="#000"> 삭제</Text>
          </Button>
        </Grid>
      </Grid>
      <Grid borderBottom="1px solid #e0e0e0" borderTop="1px solid #e0e0e0">
        <Grid is_flex>
          <Image shape="circle" src={post && post.profile} />
          <Grid>
            <Text color="#000">{post && post.channelName}</Text>
            <Text color="#000">구독자 123만명</Text>
          </Grid>
          <Button width="100px" bg="#cc0a00" color="#ffffff">
            구독
          </Button>
        </Grid>
        <Grid>
          <pre style={{ color: 'gray', margin: '10px 0 10px 120px' }}>
            더보기
          </pre>
        </Grid>
      </Grid>
    </section>
  );
};

export default Video;
