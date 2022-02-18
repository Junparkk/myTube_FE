import React from 'react';

import { Grid } from '../elements';
import Category from '../components/Category';
import PostCard from '../components/PostCard';

const Main = () => {
  return (
    <>
      <Category />
      <Grid bg="#123456" width="100vw" height="100vh">
        <PostCard></PostCard>
      </Grid>
    </>
  );
};

export default Main;
