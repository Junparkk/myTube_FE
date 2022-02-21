import React from 'react';
import { Button, Grid, Input, Image, Text } from '../elements';

import { MdOutlineSort } from 'react-icons/md';

const CommentWrite = () => {
  return (
    <>
      <Grid is_flex justifyContent="left">
        <Text color="#000" padding="10px" width="100px">
          {' '}
          댓글 2개
        </Text>
        <Button
          width="150px"
          bg="#fff"
          fontSize="20px"
          alignItems="center"
          display="flex"
          padding="0"
        >
          <MdOutlineSort color="#000" />
          <Text color="#000" size="25" width="100px">
            &nbsp;정렬 기준
          </Text>
        </Button>
      </Grid>
      <Grid is_flex>
        {/* Profile */}
        <Image shape="circle" size="50" />
        <Grid justifyContent="left" alignItems="flex-start">
          <Input
            placeholder="공개 댓글 추가..."
            borderStyle="none none solid none"
            width="100%"
            bg="#fff"
            margin="10px 0px"
            color="#000"
          />
          <Grid is_flex justifyContent="right">
            <Button width="80px" bg="#fff" color="#aaaaaa">
              취소
            </Button>
            <Button width="80px" bg="#ececec" color="#6d6d6d">
              댓글
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default CommentWrite;
