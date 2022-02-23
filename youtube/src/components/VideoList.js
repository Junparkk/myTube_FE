import React from 'react';

import { Button, Grid, Input, Text } from '../elements';

import HoverVideoPlayer from 'react-hover-video-player';

import { transformDate } from '../shared/transformDate';

const VideoList = (props) => {
  console.log('VideoList', props, props.videoUrl);
  return (
    <Grid is_flex margin="10px">
      <Grid width="200px" height="100px" margin="10px">
        <HoverVideoPlayer
          // videoSrc="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
          videoSrc={`https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4`}
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
        />
      </Grid>

      <Grid>
        <Text color="#000" bold size="15px" margin="3px 0px">
          {props.title}
        </Text>
        <Text color="#aaaaaa" size="10px " margin="0">
          {props.channelName}
        </Text>
        <Text color="#aaaaaa" size="10px " margin="0">
          조회수 {props.views}회 &nbsp;&nbsp;{transformDate(props.createdAt)}
        </Text>
      </Grid>
    </Grid>
  );
};
export default VideoList;
