import React from 'react';
import { Button, Grid, Input } from '../elements';

const CommentList = () => {
  return (
    <>
      <Grid is_flex padding="10px">
        <Button width="80px" margin="0 20px">
          프로필
        </Button>
        <Grid>
          <Grid is_flex justifyContent="left" height="10px" margin="0px">
            <h5 style={{ color: 'white', padding: '0px', margin: '0px' }}>
              아이디
            </h5>
            <h5 style={{ color: 'white', padding: '0px 10px', margin: '0px' }}>
              11시간 전
            </h5>
          </Grid>
          <h5 style={{ color: 'white', padding: '0px', margin: '15px 0px' }}>
            댓글이당!
          </h5>
          <h5 style={{ color: 'white', padding: '0px', margin: ' 0px' }}>
            좋아요 싫어요 답글
          </h5>
        </Grid>
      </Grid>
    </>
  );
};

export default CommentList;
