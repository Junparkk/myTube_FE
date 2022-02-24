import React from 'react';
import { Input, Grid } from '../elements';
import styled from 'styled-components';
import GoogleLogo from '../image/GoogleLogo.png';

import { useDispatch } from 'react-redux';
import { actionCreators as userActions } from '../redux/modules/user';
import { history } from '../redux/configureStore';

const Signup = () => {
  const dispatch = useDispatch();

  const [userid, setUserId] = React.useState('');
  const [channel_name, setChannelName] = React.useState('');
  const [pwd, setPwd] = React.useState('');
  const [pwd_check, setPwdCheck] = React.useState('');
  const [profile, setProfile] = React.useState('');

  const signup = () => {
    dispatch(userActions.signupDB(userid, channel_name, pwd, profile));
  };

  return (
    <>
      <SignupWrap>
        <LogoLink
          onClick={() => {
            history.push('/');
          }}
        >
          <Logo src={GoogleLogo} />
        </LogoLink>
        <SignInText>Google 계정 만들기</SignInText>
        <GoMytubeText>Mytube로 이동</GoMytubeText>

        <Grid padding="0px 10%" margin="10px 0px 15px 0px" height="13%">
          <Input
            width="100%"
            borderRadius="5px"
            bg="#fff"
            label=""
            placeholder="아이디"
            value={userid}
            _onChange={(e) => {
              setUserId(e.target.value);
            }}
          />
        </Grid>

        <Noticetext>
          영문(필수), 숫자(필수)로 이루어진 4~16글자를 사용하세요
        </Noticetext>
        <NewIdText>새로운 Gmail 아이디 만들기</NewIdText>

        <Grid padding="0px 10%" margin="10px 0px 15px 0px" height="13%">
          <Input
            width="100%"
            borderRadius="5px"
            bg="#fff"
            label=""
            placeholder="채널명"
            value={channel_name}
            _onChange={(e) => {
              setChannelName(e.target.value);
            }}
          />
        </Grid>

        <Noticetext>
          영문이나 숫자 또는 한글로 이루어진 2~16글자를 사용하세요
        </Noticetext>

        <Grid padding="0px 10%" margin="10px 0px 15px 0px" height="13%">
          <Input
            width="100%"
            borderRadius="5px"
            bg="#fff"
            label=""
            placeholder="비밀번호"
            type="password"
            value={pwd}
            _onChange={(e) => {
              setPwd(e.target.value);
            }}
          />
        </Grid>

        <Grid padding="0px 10%" margin="10px 0px 15px 0px" height="13%">
          <Input
            width="100%"
            borderRadius="5px"
            bg="#fff"
            label=""
            placeholder="확인"
            value={pwd_check}
            type="password"
            _onChange={(e) => {
              setPwdCheck(e.target.value);
            }}
          />
        </Grid>

        <Noticetext>
          영문(필수), 숫자(필수), 특수문자(선택)로 이루어진 4~20글자를
          사용하세요
        </Noticetext>

        <Grid is_flex>
          <GoLogin
            onClick={() => {
              history.push('/login');
            }}
          >
            계정이 있으신가요? 로그인
          </GoLogin>

          <SuccessSignUp onClick={signup}>회원가입하기</SuccessSignUp>
        </Grid>
      </SignupWrap>
    </>
  );
};

const SignupWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  margin: auto;
  margin-top: 45px;
  width: 600px;
  height: 730px;
  border-radius: 5px;
  border: 1px solid #adb5bd;
  @media (min-width: 601px) {
    padding: 48px 40px 36px 40px;
    flex-grow: 1;
    overflow: hidden;
  }
`;

const Logo = styled.img`
  width: 100%;
  height: 25%;
`;

const LogoLink = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

const SignInText = styled.div`
  font-size: 24px;
  margin: auto;
`;

const GoMytubeText = styled.div`
  font-size: 16px;
  margin: auto;
`;

const Noticetext = styled.div`
  font-size: 15px;
  margin: auto;
  color: #adb5bd;
`;

const NewIdText = styled.div`
  font-size: 17px;
  margin-top: 10px;
  background-color: #fff;
  color: #1a73e8;
`;

const GoLogin = styled.button`
  border: none;
  background-color: #fff;
  color: #1a73e8;
  cursor: pointer;
  font-size: 16px;
  margin: 0px 60px;
`;

const SuccessSignUp = styled.button`
  border: none;
  border-radius: 5px;
  background-color: #1a73e8;
  color: #fff;
  cursor: pointer;
  font-size: 16px;
  margin: 0px 70px;
  padding: 10px 11px;
`;

export default Signup;
