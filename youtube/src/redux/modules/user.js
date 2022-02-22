import { createAction, handleActions } from 'redux-actions';
import { produce } from 'immer';
import { token } from '../../shared/Cookie';
import { apis } from '../../shared/Request';

const LOG_IN = 'LOG_IN';
const LOG_OUT = 'LOG_OUT';
const GET_USER = 'GET_USER';
const SET_USER = 'SET_USER';

const logOut = createAction(LOG_OUT, (user) => ({ user }));
const getUser = createAction(GET_USER, (user) => ({ user }));
const setUser = createAction(SET_USER, (user) => ({ user }));

const initialState = {
  user: null,
  is_login: false,
};

const user_initial = {
  user_name: 'yun',
};

const loginDB = (userid, pwd) => {
  return function (dispatch, getState, { history }) {
    apis
      .createLogin({
        userid: userid,
        password: pwd,
      })
      .then((res) => {
        const accessToken = res.data.token;
        console.log('LoginDB', accessToken);
        localStorage.setItem('token', `${accessToken}`);
        token('token', `${accessToken}`);

        dispatch(
          setUser({
            userid: res.data.userid,
            channelname: res.data.channelname,
          })
        );
      });
    history.replace('/').catch((err) => {
      console.log(err);
    });
  };
};

const signupDB = (userid, channel_name, pwd, pwd_check) => {
  return function ({ history }) {
    apis
      .createUser({
        userId: userid,
        channelName: channel_name,
        password: pwd,
        profile:
          'https://i.insider.com/4f3433986bb3f7b67a00003c?width=600&format=jpeg&auto=webp',
      })
      .then((response) => {
        console.log('Signup_response', response);
        console.log('회원가입 성공');
        window.alert('😆 성공적으로 회원가입이 완료되었습니다! 😆');
        history.push('/login');
      })
      .catch((error) => {
        console.log('회원가입 실패');
        alert(error.response.data.errorMessage);
        // window.alert(error.errorMessage)
        return;
      });
  };
};

export default handleActions(
  {
    [LOG_IN]: (state, action) =>
      produce(state, (draft) => {
        token('', 'sucsess');
        draft.user = action.payload.user;
        draft.is_login = true;
      }),
    [LOG_OUT]: (state, action) =>
      produce(state, (draft) => {
        localStorage.removeItem('token');
        draft.user = null;
        draft.is_login = false;
      }),
    [GET_USER]: (state, action) => produce(state, (draft) => {}),
  },
  initialState
);

const actionCreators = {
  loginDB,
  signupDB,
  getUser,
  logOut,
};

export { actionCreators };
