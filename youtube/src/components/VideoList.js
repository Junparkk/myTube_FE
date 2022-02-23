import React from 'react';

import { Button, Grid, Input, Text } from '../elements';
import { useDispatch, useSelector } from 'react-redux';
import HoverVideoPlayer from 'react-hover-video-player';
import { actionCreators as commentsActions } from '../redux/modules/comments';
import { actionCreators as postActions } from '../redux/modules/post';
const VideoList = (props) => {
  const dispatch = useDispatch();
  const postId = props.postId;
  const post_list = useSelector((state) => state.post.list);
  const post = post_list.find((p) => p.postId === postId);

  //마우스 오버시 동영상 실행
  const handleOnMouseOver = (e) => {
    e.currentTarget.play();
  };
  //마우스 아웃시 동영상 정지
  const handleOnMouseOut = (e) => {
    e.currentTarget.load();
  };
  const test = React.useRef(null);

  return (
    <Grid is_flex width="300px" margin="10px" alignItems="flex-start">
      <Grid height="100px" margin="0 10px 0 0">
        <video
          ref={test}
          style={{ width: '100%', height: '100%', objectFit: 'fill' }}
          loop
          muted
          poster={props.imageUrl}
          onMouseOver={handleOnMouseOver}
          onMouseOut={handleOnMouseOut}
        >
          <source width="100%" height="100%" src={props.videoUrl}></source>
        </video>
        {/* <HoverVideoPlayer
          // videoSrc="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
          videoSrc={`${props.videoUrl}`}
          videoStyle={{
            objectFit: 'scale-down',
            width: '150px',
            height: '100px',
          }}
          pausedOverlay={
            <img
              src={`${props.imageUrl}`}
              alt=""
              style={{
                // Make the image expand to cover the video's dimensions
                width: '100%',
                height: '100%',
                objectFit: 'fill',
              }}
              // sizingMode="container"
            />
          }
        /> */}
      </Grid>

      <Grid width="80%">
        <Text color="#000" bold size="15px" margin="3px 0px">
          {props.title}
        </Text>
        <Text color="#aaaaaa" size="10px " margin="0">
          {props.channelName}
        </Text>
        <Text color="#aaaaaa" size="10px " margin="0">
          조회수 {props.views}회 &nbsp;&nbsp;6년전
        </Text>
      </Grid>
    </Grid>
  );
};
export default VideoList;
