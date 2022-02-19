import React from 'react';

import { Button, Grid, Input } from '../elements';

import HoverVideoPlayer from 'react-hover-video-player';

const VideoList = () => {
  return (
    <Grid is_flex margin="10px">
      <HoverVideoPlayer
        videoSrc="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
        pausedOverlay={
          <img
            src="https://i.ytimg.com/vi/C6ifjmmxGr8/maxresdefault.jpg"
            alt=""
            style={{
              // Make the image expand to cover the video's dimensions
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
        }
        loadingOverlay={
          <div className="loading-overlay">
            <div className="loading-spinner" />
          </div>
        }
      />

      <Grid>
        <h3 style={{ color: 'white', margin: '2px' }}>제목입니다.</h3>
        <h5 style={{ color: 'white', margin: '0px' }}>채널명</h5>
        <h5 style={{ color: 'white', margin: '0px' }}>
          조회수 100만회 &nbsp;&nbsp;6년전
        </h5>
      </Grid>
    </Grid>
  );
};
export default VideoList;
