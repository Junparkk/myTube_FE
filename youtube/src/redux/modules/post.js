import { createAction, handleActions } from 'redux-actions';
import { immerable, produce } from 'immer';

import { apis } from '../../shared/Request';
import instance from '../../shared/Request';

// post
const SET_POST = 'SET_POST';
const ADD_POST = 'ADD_POST';
const EDIT_POST = 'EDIT_POST';
const DELETE_POST = 'DELETE_POST';
const ONE_POST = 'ONE_POST';
const STATE_POST = 'STATE_POST';

const SEARCH_POST = 'SEARCH_POST';
const SET_CATEGORY = 'SET_CATEGORY';

// Image
const IMAGE_URL = 'IMAGE_URL';

const setPost = createAction(SET_POST, (post_list, checkLoadAll) => ({
  post_list,
  checkLoadAll,
}));
const addPost = createAction(ADD_POST, (post) => ({ post }));
const editPost = createAction(EDIT_POST, (post_id, post) => ({
  post_id,
  post,
}));
const deletePost = createAction(DELETE_POST, (post_id) => ({ post_id }));
const getOnePost = createAction(ONE_POST, (post) => ({
  post,
}));
const statePost = createAction(STATE_POST, () => ({}));

// 이미지 url 저장
const getImageUrl = createAction(IMAGE_URL, (img_url) => ({ img_url }));

// post Search
const searchPost = createAction(SEARCH_POST, (word) => ({ word }));

//카테고리 설정
const setCategory = createAction(SET_CATEGORY, (category) => ({
  category,
}));

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
  category: '전체',
};

//middleware

//전체 영상 조회

// 카테고리 별 상품 조회
const getPostCategory = (category) => {
  if (category) {
    return function (dispatch, useState, { history }) {
      instance
        .get(`/api/posts?category=${category}`)
        .then((response) => {
          console.log('category in!');
          dispatch(setPost(response.data.posts, false));
          dispatch(setCategory(category));
        })
        .catch((error) => {
          console.log('Error!');
        });
    };
  }
};
//게시물 상세 페이지 가기
const getOnePostDB = (postId) => {
  console.log('GetOnePostDB In!');
  return function (dispatch, getState, { history }) {
    instance
      .get(`/api/posts/${postId}`)
      .then((response) => {
        console.log('GetOnePostDB', response.data);
        dispatch(getOnePost(response.data.post));
      })
      .catch((error) => {
        console.log('getOnePostDB_ERror', error);
      });
  };
};
//전체 상품 조회

const getPostAPI = () => {
  return async function (dispatch, useState, { history }) {
    await apis.posts().then(function (res) {
      console.log(res);
      dispatch(setPost(res.data.posts));
    });
  };
};
//영상 등록
const addPostAPI = (data) => {
  return function (dispatch, useState, { history }) {
    console.log('API', data);

    apis.add(data).then(function (res) {
      console.log(res);
      // window.location.replace('/');
    });
  };
};
//영상 검색
const searchAPI = (keywordSearch) => {
  return function (dispatch, useState, { history }) {
    console.log('API', keywordSearch);
    history.push(`/search?word=${keywordSearch}`);

    apis.wordSearch(keywordSearch).then(function (res) {
      console.log(res.data.posts);
      dispatch(searchPost(res.data.posts));
    });
  };
};

export default handleActions(
  {
    [SET_CATEGORY]: (state, action) =>
      produce(state, (draft) => {
        draft.category = action.payload.category;
      }),

    [SET_POST]: (state, action) =>
      produce(state, (draft) => {
        console.log('SetPost');
        draft.list = action.payload.post_list;
      }),
    [ONE_POST]: (state, action) =>
      produce(state, (draft) => {
        draft.post = action.payload.post;
        console.log('one_post', action.payload);
        // draft.post.comments = action.payload.comments;
      }),
    [ADD_POST]: (state, action) =>
      produce(state, (draft) => {
        draft.list.unshift(action.payload.post);
      }),
    [SEARCH_POST]: (state, action) =>
      produce(state, (draft) => {
        draft.list = action.payload.word;
      }),
  },
  initialState
);

const actionCreators = {
  getPostAPI,
  addPostAPI,

  searchAPI,

  getPostCategory,
  getOnePostDB,
};

export { actionCreators };
