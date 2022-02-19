import React from 'react';
import { Button, Grid, Input } from '../elements';

const Video = (props) => {
  return (
    <section>
      <video
        // src={`https://www.youtube.com/embed/4OtkJ3X_gAQ`}

        width="100%"
        height="800px"
        frameBorder="0"
        // allowFullScreen
        controls
        autoPlay="autoplay"
        muted="muted"
      >
        <source
          src={`https://response-mz-0.s3.ap-northeast-2.amazonaws.com/original/1645201205383KakaoTalk_20220219_011720432.mp4`}
          type="video/mp4"
        />
      </video>
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

          <pre style={{ color: 'gray' }}>더보기</pre>
        </Grid>
        <Button width="100px">구독</Button>
      </Grid>
    </section>
  );
};

export default Video;
