import React from 'react';

import { Grid, Button } from '../elements';

const Category = (prpos) => {
  const CATEGORYNAME = [
    '전체',
    '음악',
    '요리',
    '스포츠',
    '여행',
    '동물',
    '게임',
    '기타',
  ];
  return (
    <>
      <Grid
        is_category_box
        is_flex
        width="100vw"
        margin=".5rem auto"
        padding=".3rem 0"
        borderTop="1px solid black"
        borderBottom="1px solid black"
      >
        {CATEGORYNAME.map((c, idx) => {
          return (
            <Button
              width="none"
              key={idx}
              padding=".2rem .3rem"
              text={c}
              borderRadius="5rem"
              margin="0 .3rem 0 0"
              fontSize=".4rem"
            ></Button>
          );
        })}
      </Grid>
    </>
  );
};

export default Category;
