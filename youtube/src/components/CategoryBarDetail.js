import React from 'react';
import styled from 'styled-components';
import { actionCreators as postActions } from '../redux/modules/post';
import { useDispatch, useSelector } from 'react-redux';

const CategoryBarDetail = (props) => {
  const dispatch = useDispatch();
  //#f4f4f4
  const [clickedCategory, setclickedCategory] = React.useState(0);
  const checkLoadAll = useSelector((state) => state.post.checkLoadAll);

  React.useEffect(() => {
    if (checkLoadAll) {
      setclickedCategory(0);
    }
  }, [checkLoadAll]);
  const categoryList = ['모두', '관련 컨텐츠'];
  //카테고리 선정
  const { postId } = props;
  const post_list = useSelector((state) => state.post.list);
  const post = post_list.find((p) => p.postId === postId);
  console.log('categoryBarDetail', postId, post_list, post);
  return (
    <CategoryBox>
      {categoryList.map((e, i) => (
        <CategoryCircle
          key={i}
          onClick={() => {
            setclickedCategory(i);

            i === 0
              ? dispatch(postActions.getPostAPI())
              : dispatch(postActions.getPostCategory(post.category));
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
  height: 10vh;
  max-width: 100%;
  display: flex;
  justify-content: left;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: -10px;
  @media only screen and (max-width: 768px) {
    margin-bottom: 35px;
    padding-bottom: 0px;
  }
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

export default CategoryBarDetail;
