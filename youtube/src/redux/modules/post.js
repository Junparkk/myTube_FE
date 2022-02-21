import { createAction, handleActions } from 'redux-actions';
import { immerable, produce } from 'immer';

import { apis } from '../../shared/Request';

// post
const SET_POST = 'SET_POST';
const ADD_POST = 'ADD_POST';
const EDIT_POST = 'EDIT_POST';
const DELETE_POST = 'DELETE_POST';
const ONE_POST = 'ONE_POST';
const STATE_POST = 'STATE_POST';

// Image
const IMAGE_URL = 'IMAGE_URL';

const setPost = createAction(SET_POST, (post_list) => ({ post_list }));
const addPost = createAction(ADD_POST, (post) => ({ post }));
const editPost = createAction(EDIT_POST, (post_id, post) => ({
  post_id,
  post,
}));
const deletePost = createAction(DELETE_POST, (post_id) => ({ post_id }));
const getOnePost = createAction(ONE_POST, (post, comments) => ({
  post,
  comments,
}));
const statePost = createAction(STATE_POST, () => ({}));

// 이미지 url 저장
const getImageUrl = createAction(IMAGE_URL, (img_url) => ({ img_url }));

const initialPost = {
  postId: '_id',
  channelName: '홍길동',
  videoUrl: 'ur',
  imageUrl: 'url',
  title: '제목',
  createdAt: '2022-2-18 22',
  views: 0,
  category: '게임',
  content: '내용',
  likes: ['user_id', 'user_id'],
  comments: [],
};

const initialState = {
  list: [initialPost],
  post: [],
  comments: [],
  img: 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FlOeQ2%2Fbtrtys8M1UX%2FEXvjbkD77erg12mnimKaK0%2Fimg.png',
  filterState: 0, // 0 : 전체보기 1 : 판매 중 2: 판매 완료
};

//middleware

//전체 상품 조회
const getPostAPI = () => {
  return async function (dispatch, useState, { history }) {
    await apis.posts().then(function (res) {
      console.log(res);
      dispatch(setPost(res.data.posts));
    });
  };
};
//판매 상품 등록
const addPostAPI = (title, price, imgurl = '', content) => {
  return function (dispatch, useState, { history }) {
    const token = localStorage.getItem('login-token');

    console.log(title, price, imgurl, content);

    apis
      .add(
        { title, price, imgurl, content },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then(function (res) {
        window.location.replace('/');
      });
  };
};

// 이미지 #######################################################3

// 이미지 등록하기 (url 받아오기)
const imageAPI = (file) => {
  for (const keyValue of file) console.log(keyValue);
  return async function (dispatch, useState, { history }) {
    apis.image(file).then(function (res) {
      console.log(res.data.imgurl);
      dispatch(getImageUrl(res.data.imgurl));
    });
  };
};

export default handleActions(
  {
    [SET_POST]: (state, action) =>
      produce(state, (draft) => {
        draft.list = action.payload.post_list;
      }),
    [ONE_POST]: (state, action) =>
      produce(state, (draft) => {
        draft.post = action.payload.post;
        draft.post.comments = action.payload.comments;
      }),
    [ADD_POST]: (state, action) =>
      produce(state, (draft) => {
        draft.list.unshift(action.payload.post);
      }),
  },
  initialState
);

const actionCreators = {
  getPostAPI,
};

export { actionCreators };
