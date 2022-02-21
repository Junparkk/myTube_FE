import React from 'react';

import { Button, Grid, Input, Text } from '../elements';

import HoverVideoPlayer from 'react-hover-video-player';

const VideoList = () => {
  return (
    <Grid is_flex margin="10px">
      <Grid width="200px" height="100px" margin="10px">
        <HoverVideoPlayer
          // videoSrc="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
          videoSrc={`https://response-mz-0.s3.ap-northeast-2.amazonaws.com/original/1645201205383KakaoTalk_20220219_011720432.mp4`}
          videoStyle={{
            objectFit: 'scale-down',
            width: '150px',
            height: '100px',
          }}
          pausedOverlay={
            <img
              src="https://i.ytimg.com/vi/C6ifjmmxGr8/maxresdefault.jpg"
              alt=""
              style={{
                // Make the image expand to cover the video's dimensions
                width: '100%',
                height: '100%',
                objectFit: 'fill',
              }}
              sizingMode="container"
            />
          }
        />
      </Grid>

      <Grid>
        <Text color="#000" bold size="15px" margin="3px 0px">
          제목입니다.
        </Text>
        <Text color="#aaaaaa" size="10px " margin="0">
          채널명
        </Text>
        <Text color="#aaaaaa" size="10px " margin="0">
          조회수 100만회 &nbsp;&nbsp;6년전
        </Text>
      </Grid>
    </Grid>
  );
};
export default VideoList;
