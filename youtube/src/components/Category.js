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
  ];
  return (
    <>
      <Grid is_category_box is_flex width="90vw" margin="1rem auto">
        {CATEGORYNAME.map((c, idx) => {
          return (
            <Button
              padding="5px 0"
              text={c}
              borderRadius="5rem"
              margin="0 .3rem 0 0"
            ></Button>
          );
        })}
      </Grid>
    </>
  );
};

export default Category;
