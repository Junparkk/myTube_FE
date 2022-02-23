import { createAction, handleActions } from 'redux-actions';
import { produce } from 'immer';
import instance from '../../shared/Request';

const EDIT_LIKE = 'EDIT_LIKE';

const editLike = createAction(EDIT_LIKE, (post, postId, isPush) => ({
  post,
  postId,
  isPush,
}));

const initialState = {
  list: [],
};

//좋아요
const addLikeDB = (postId, loginUserNameArray) => {
  return function (dispatch, getState, { history }) {
    instance
      .post(`/api/posts/${postId}/like/`, loginUserNameArray)
      .then((response) => {
        dispatch(editLike(loginUserNameArray, postId, true));
      })
      .catch((error) => {
        console.error(error);
      });
  };
};

//좋아요취소
const deleteLikeDB = (postId, loginUserNameArray) => {
  return function (dispatch, getState, { history }) {
    instance
      .delete(`/api/posts/${postId}/like/`, loginUserNameArray)
      .then((response) => {
        dispatch(editLike(loginUserNameArray, postId, false));
      })
      .catch((error) => {
        console.error(error);
      });
  };
};

export default handleActions(
  {
    [EDIT_LIKE]: (state, action) =>
      produce(state, (draft) => {
        let idx = draft.list.findIndex(
          (e) => e.postId === action.payload.postId
        );
        if (action.payload.isPush) {
          draft.list[idx].curMembers.push(action.payload.post.userName);
          draft.is_loaded = true;
        } else {
          draft.list[idx].curMembers = draft.list[idx].curMembers.filter(
            (e) => e !== action.payload.post.userName
          );
          draft.is_loaded = true;
        }
      }),
  },
  initialState
);

const actionCreators = {
  editLike,
  addLikeDB,
  deleteLikeDB,
};
export { actionCreators };
