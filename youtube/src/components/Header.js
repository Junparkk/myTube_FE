import React from "react";
import { Button, Grid, Input } from "../elements";

const Header = (props) => {
  return (
    <>
      <Grid is_flex padding="10px">
        <Grid is_flex justifyContent="left" width="30%">
          <Button>=</Button>
          <Button>유튜브로고</Button>
        </Grid>
        <Grid is_flex justifyContent="center">
          <Input width="80%"></Input>
          <Button width="10%">검색</Button>
        </Grid>
        <Grid is_flex justifyContent="right" width="30%">
          <Button>동영상업로드</Button>
          <Button>로그인버튼</Button>
        </Grid>
      </Grid>
    </>
  );
};

export default Header;
