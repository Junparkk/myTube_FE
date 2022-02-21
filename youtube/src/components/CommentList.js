import React from 'react';
import { Button, Grid, Input, Image, Text } from '../elements';
import { AiOutlineLike, AiOutlineDislike } from 'react-icons/ai';

const CommentList = () => {
  return (
    <>
      <Grid is_flex padding="10px" alignItems="flex-start">
        {/* Profile */}
        <Image shape="circle" size="50" />
        <Grid>
          <Grid is_flex justifyContent="left" height="10px" margin="0px">
            <Text width="50px" color="#000" padding="0px" margin="0px">
              아이디
            </Text>
            <Text width="100px" color="#999999" padding="0px" margin="0px">
              11시간 전
            </Text>
          </Grid>
          <Text color="#ececec">댓글이당!</Text>
          <Grid is_flex justifyContent="left">
            <Button
              bg="#fff"
              width="50px"
              fontSize="15px"
              alignItems="center"
              display="flex"
              padding="0"
              color="#000"
            >
              <AiOutlineLike color="#000" /> &nbsp; 2
            </Button>
            <Button
              bg="#fff"
              width="30px"
              fontSize="15px"
              alignItems="center"
              display="flex"
              padding="0"
            >
              <AiOutlineDislike color="#000" />
            </Button>
            <Button
              bg="#fff"
              width="30px"
              fontSize="15px"
              alignItems="center"
              display="flex"
              padding="0"
              color="#999999"
            >
              답글
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default CommentList;
