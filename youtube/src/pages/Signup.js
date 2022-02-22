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

  const signup = () => {
    dispatch(userActions.signupDB(userid, channel_name, pwd, pwd_check));
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
            _onChange={(e) => {
              setUserId(e.target.value);
            }}
          />
        </Grid>

        <ConfirmText>이 아이디가 본인 소유인지 확인해야 합니다.</ConfirmText>
        <NewIdText>새로운 Gmail 아이디 만들기</NewIdText>

        <Grid padding="0px 10%" margin="10px 0px 15px 0px" height="13%">
          <Input
            width="100%"
            borderRadius="5px"
            bg="#fff"
            label=""
            placeholder="채널명"
            _onChange={(e) => {
              setChannelName(e.target.value);
            }}
          />
        </Grid>

        <Grid padding="0px 10%" margin="10px 0px 15px 0px" height="13%">
          <Input
            width="100%"
            borderRadius="5px"
            bg="#fff"
            label=""
            placeholder="비밀번호"
            type="password"
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
            type="password"
            _onChange={(e) => {
              setPwdCheck(e.target.value);
            }}
          />
        </Grid>

        <PwdText>문자, 숫자, 기호를 조합하여 4~20 글자를 사용하세요</PwdText>

        <Grid is_flex>
          <GoLogin
            onClick={() => {
              history.push('/login');
            }}
          >
            계정이 있으신가요? 로그인
          </GoLogin>

          <SuccessSignUp _onClick={signup}>회원가입하기</SuccessSignUp>
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

const ConfirmText = styled.div`
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

const PwdText = styled.div`
  font-size: 15px;
  margin: auto;
  color: #adb5bd;
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
