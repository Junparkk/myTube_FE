import { createAction, handleActions } from 'redux-actions';
import { produce } from 'immer';
import { token } from '../../shared/Cookie';
import { apis } from '../../shared/Request';
import instance from '../../shared/Request';

const LOG_IN = 'LOG_IN';
const LOG_OUT = 'LOG_OUT';
const GET_USER = 'GET_USER';
const SET_USER = 'SET_USER';
const CHECK = 'CHECK';

const logOut = createAction(LOG_OUT, (user) => ({ user }));
const getUser = createAction(GET_USER, (user) => ({ user }));
const setUser = createAction(SET_USER, (user) => ({ user }));
const check = createAction(CHECK, (user) => ({ user }));

const initialState = {
  user: null,
  is_login: false,
  check: [],
};

const user_initial = {
  user_name: 'yun',
};

const loginDB = (userid, pwd) => {
  return function (dispatch, getState, { history }) {
    apis
      .createLogin({
        userId: userid,
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
        window.location.href = '/';
        dispatch(tokenCheck());
      })

      .catch((err) => {
        console.log('errorMessags', err.response.data);
        alert(err.response.data);
      });
  };
};

const tokenCheck = () => {
  return function (disaptch, getState, { history }) {
    instance
      .get(`/api/user/me`)
      .then((response) => {
        console.log('tokenCheck Success', response.data);
        localStorage.setItem('channelName', response.data.channelName);
        localStorage.setItem('profile', response.dataprofile);
      })
      .catch((error) => {
        console.log('tokenCheck Error', error);
        console.error(error);
      });
  };
};

const signupDB = (userid, channel_name, pwd, profile) => {
  return function (dispatch, getState, { history }) {
    const images = [
      'https://i.insider.com/4f3433986bb3f7b67a00003c?width=600&format=jpeg&auto=webp',
      'https://user-images.githubusercontent.com/82128525/155101303-f73b78ee-e7af-4469-a931-9276e07a4691.JPG',
      'https://user-images.githubusercontent.com/82128525/155101036-db933bc3-5c5c-4114-885b-9ca7b4228a89.jpg',
      'https://user-images.githubusercontent.com/82128525/155101080-8358eaea-b234-4cb9-8fd1-6aa79e2039de.jpg',
      'https://d3qdz57zgika7q.cloudfront.net/im/j/28327/photoPosting/2018/07/16/m/1531730864842_1.jpg',
      'https://cdn.crowdpic.net/list-thumb/thumb_l_9FE164C0EDD4A4BC3978BFA20EB7DD0C.jpg',
      'https://cdn.crowdpic.net/list-thumb/thumb_l_B58CFD4FAA4D4A229D33C7F9E36C9DB0.jpg',
      'https://pbs.twimg.com/media/DhZ6tLoXkAEfAgv?format=jpg&name=large',
      'https://cdn.pixabay.com/photo/2015/03/08/11/02/cat-664040_960_720.jpg',
      'https://user-images.githubusercontent.com/82128525/155100983-7e381660-b4a2-4340-b645-0ecd14d141fe.jpg',
    ];
    const getRandom = (min, max) =>
      Math.floor(Math.random() * (max - min) + min);
    const num = getRandom(0, 9);

    apis
      .createUser({
        userId: userid,
        channelName: channel_name,
        password: pwd,
        profile: images[num],
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

const loginCheckAPI = () => {
  return function (dispatch, getState, { history }) {
    apis.checkToken().then((res) => {
      console.log('너는 나오니?', res);
      dispatch(check(res.data));
    });
  };
};
//
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
        localStorage.removeItem('channelName');
        localStorage.removeItem('profile');
        draft.user = null;
        draft.is_login = false;
      }),
    [GET_USER]: (state, action) => produce(state, (draft) => {}),
    [CHECK]: (state, action) =>
      produce(state, (draft) => {
        console.log('페이로드 확인', action.payload.user);
        draft.check = action.payload.user;
      }),
  },

  initialState
);

const actionCreators = {
  loginDB,
  signupDB,
  getUser,
  logOut,

  loginCheckAPI,

  tokenCheck,

};

export { actionCreators };
