import React from 'react';
import { Button, Grid, Input, Text, Image } from '../elements';

import { AiOutlineLike, AiOutlineDislike } from 'react-icons/ai';
import { RiShareForwardLine } from 'react-icons/ri';
import { GiSaveArrow } from 'react-icons/gi';
import { MdOutlinePlaylistAdd, MdOutlineMoreHoriz } from 'react-icons/md';
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
        <Text color="#000" size="20px" bold>
          제목
        </Text>
      </Grid>

      <Grid is_flex>
        <Text width="200px" color="#606060" margin="1px">
          조회수 10,000회
        </Text>
        <Grid is_flex justifyContent="right">
          {/* 좋아요 */}
          <Button
            bg="#fff"
            width="80px"
            fontSize="15px"
            alignItems="center"
            display="flex"
            padding="0"
          >
            <AiOutlineLike color="#000" size="25" />{' '}
            <Text color="#000"> &nbsp;&nbsp;100</Text>
          </Button>
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
            display="flex"
            padding="0"
          >
            <MdOutlineMoreHoriz color="#000" size="25" />
          </Button>
        </Grid>
      </Grid>
      <Grid borderBottom="1px solid #e0e0e0" borderTop="1px solid #e0e0e0">
        <Grid is_flex>
          <Image shape="circle" />
          <Grid>
            <Text color="#000">채널명</Text>
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
