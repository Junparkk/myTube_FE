import React from 'react';

import { Button, Grid, Input } from '../elements';

const VideoList = () => {
  return (
    <Grid is_flex margin="10px">
      <img
        src="https://i.ytimg.com/vi/C6ifjmmxGr8/maxresdefault.jpg"
        width="200px"
        height="150px"
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
