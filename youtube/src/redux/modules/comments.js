import { createAction, handleActions } from 'redux-actions';
import { produce } from 'immer';

import { apis } from '../../shared/Request';

//Action Types
const SET_COMMENT = 'SET_COMMENT';
const ADD_COMMENT = 'ADD_COMMENT';
const EDIT_COMMENT = 'EDIT_COMMENT';
const DELETE_COMMENT = 'DELETE_COMMNET';

//Action Creators
const setComment = createAction(SET_COMMENT, (postId, commentList) => ({
  postId,
  commentList,
}));

const addComment = createAction(ADD_COMMENT, (comment) => ({
  comment,
}));

const editComment = createAction(
  EDIT_COMMENT,
  (postId, commentId, comment) => ({
    postId,
    commentId,
    comment,
  })
);

const deleteComment = createAction(DELETE_COMMENT, (postId, commentId) => ({
  postId,
  commentId,
}));

const initialState = {
  list: {},
  is_loaded: false,
};

//댓글 조회
const getCommentDB = (postId) => {
  return function (dispatch, getState, { history }) {
    apis
      .get(`/api/posts/${postId}/comments`)
      .then((response) => {
        console.log('response', response.data.comments);

        dispatch(setComment(postId, response.data.comments));
      })
      .catch((error) => {
        console.log('get Error', error);
        console.error(error);
      });
  };
};

//댓글 추가
const addCommentDB = (postId, comment) => {
  return function (dispatch, getState, { history }) {
    console.log('Im in!', comment, postId);
    apis
      .post(`/api/posts/${postId}/comments`, comment)
      .then((response) => {
        console.log('response', response);
        dispatch(addComment(comment));
      })
      .catch((error) => {
        console.log('전송실패', error);
        console.error(error);
      });
  };
};

//댓글 수정
const editCommentDB = (postId, commentId, comment) => {
  return function (dispatch, getState, { history }) {
    apis
      .patch(`/api/posts/${postId}/comments/${commentId}`, comment)
      .then((response) => {
        window.alert('comment update complete');
      })
      .catch((error) => {
        console.log('댓글 수정 오류 발생');
      })
      .then(() => {
        dispatch(getCommentDB(postId));
      });
  };
};

//댓글 삭제
const deleteCommentDB = (postId, commentId) => {
  return function (dispatch, getSTate, { history }) {
    apis
      .delete(`/api/posts/${postId}/comments/${commentId}`)
      .then(() => {
        window.alert('댓글 삭제가 완료되었습니다!');
        dispatch(deleteComment(postId, commentId));
      })
      .catch((error) => {
        console.log('댓글 삭제 실패');
      })
      .then(() => {
        dispatch(getCommentDB(postId));
      });
  };
};
export default handleActions(
  {
    [SET_COMMENT]: (state, action) =>
      produce(state, (draft) => {
        console.log('setComment', state, draft, action);
        draft.list[action.payload.postId] =
          action.payload.contentList.reverse();
      }),
    [ADD_COMMENT]: (state, action) =>
      produce(state, (draft) => {
        console.log('AddComment', state, draft, action.payload);
        draft.list[action.payload.postId].unshift(action.payload.comment);
      }),
    [EDIT_COMMENT]: (state, action) =>
      produce(state, (draft) => {
        console.log('EditComment', action.payload);
        draft.list[action.payload.commentId] = action.payload.comment;
      }),
    [DELETE_COMMENT]: (state, action) =>
      produce(state, (draft) => {
        draft.list[action.payload.postId].filter(
          (c, i) => c.commentId !== action.payload.commentId
        );
      }),
  },
  initialState
);

const actionCreators = {
  setComment,
  getCommentDB,
  addComment,
  addCommentDB,
  editComment,
  editCommentDB,
  deleteComment,
  deleteCommentDB,
};

export { actionCreators };
