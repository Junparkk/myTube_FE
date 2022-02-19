import React from 'react';
import { Button, Grid, Input } from '../elements';

const CommentWrite = () => {
  return (
    <>
      <Grid is_flex justifyContent="left">
        <h4 style={{ color: 'white', padding: '10px' }}> 댓글 2개</h4>
        <Button width="80px">정렬 기준</Button>
      </Grid>
      <Grid is_flex>
        <Button width="80px" margin="0 20px">
          프로필
        </Button>
        <Grid justifyContent="left" alignItems="flex-start">
          <Input
            placeholder="공개 댓글 추가..."
            borderStyle="none none solid none"
            width="100%"
            bg="#181818"
          />
          <Grid is_flex justifyContent="right">
            <Button width="80px">취소</Button>
            <Button width="80px">댓글</Button>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default CommentWrite;
