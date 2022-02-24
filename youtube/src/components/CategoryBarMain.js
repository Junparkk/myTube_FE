import React from 'react';
import styled from 'styled-components';
import { actionCreators as postActions } from '../redux/modules/post';
import { useDispatch, useSelector } from 'react-redux';

const CategoryBarMain = () => {
  const dispatch = useDispatch();
  //#f4f4f4
  const [clickedCategory, setclickedCategory] = React.useState(0);
  const checkLoadAll = useSelector((state) => state.post.checkLoadAll);

  React.useEffect(() => {
    if (checkLoadAll) {
      setclickedCategory(0);
    }
  }, [checkLoadAll]);
  const categoryList = [
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
    <CategoryBox>
      {categoryList.map((e, i) => (
        <CategoryCircle
          key={i}
          onClick={() => {
            setclickedCategory(i);

            i === 0
              ? dispatch(postActions.getPostAPI())
              : dispatch(postActions.getPostCategory(e));
          }}
          style={{
            backgroundColor: i === clickedCategory ? '#303030' : '#ececec',
            color: i === clickedCategory ? '#fff' : '#000',
          }}
        >
          {e}
        </CategoryCircle>
      ))}
    </CategoryBox>
  );
};

const CategoryBox = styled.div`
  height: 5vh;
  max-width: 100%;
  display: flex;
  justify-content: left;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 10px;
  @media only screen and (max-width: 768px) {
    margin-bottom: 35px;
    padding-bottom: 0px;
  }
  //center
  justify-content: center;
  border-bottom: 1px solid #e3e3e3;
  border-top: 1px solid #e3e3e3;
`;
const CategoryCircle = styled.p`
  margin: 10px;
  font-size: 17px;
  padding: 5px 15px;

  background-color: #303030;
  border-radius: 30px;
  //   @media only screen and (max-width: 768px) {
  //     padding: 9px 9px;
  //     font-size: 14px;
  //   }
  cursor: pointer;
  color: #ffffff;
`;

export default CategoryBarMain;
