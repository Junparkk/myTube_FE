import { createAction, handleAction } from 'redux-actions';
import { produce } from 'immer';

import instance from '../../shared/Request';

//Action Types
const SET_COMMENT = 'SET_COMMENT';
const ADD_COMMENT = 'ADD_COMMENT';
const EDIT_COMMENT = 'EDIT_COMMENT';
const DELETE_COMMENT = 'DELETE_COMMNET';

//Action Creators
const setComment = createAction(SET_COMMENT, (postId, contentList) => ({
  postId,
  contentList,
}));

const addComment = createAction(ADD_COMMENT, (postId, contentList) => ({
  postId,
  contentList,
}));
