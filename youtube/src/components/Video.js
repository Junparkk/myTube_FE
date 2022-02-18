import React from 'react';
import { Button, Grid, Input } from '../elements';

const Video = (props) => {
  return (
    <section>
      <iframe
        src={`https://www.youtube.com/embed/4OtkJ3X_gAQ`}
        width="100%"
        height="800px"
        frameBorder="0"
        allowFullScreen
      ></iframe>
      <Grid>
        <h1 style={{ color: 'white' }}>제목</h1>
      </Grid>

      <Grid is_flex>
        <h4 style={{ color: 'white' }}>조회수 10,000회</h4>
        <Grid is_flex justifyContent="right">
          <Button width="75px">좋아요</Button>
          <Button width="75px">싫어요</Button>
          <Button width="75px">공유</Button>
          <Button width="75px">오프라인 저장</Button>
          <Button width="75px">저장</Button>
          <Button width="75px">...</Button>
        </Grid>
      </Grid>
      <Grid is_flex borderStyle="solid none">
        <Button width="100px" margin="20px">
          프로필
        </Button>
        <Grid>
          <h1 style={{ color: 'white' }}>채널명</h1>
          <h3 style={{ color: 'white' }}>구독자 123만명</h3>
        </Grid>
        <Button width="100px">구독</Button>
      </Grid>
      <pre>설명</pre>
    </section>
  );
};

export default Video;
