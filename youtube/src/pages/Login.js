import React from "react";
import { Input, Grid, Button } from "../elements";
import styled from "styled-components";
import GoogleLogo from "../image/GoogleLogo.png";

import { useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";
import { history } from "../redux/configureStore";

const Login = () => {
  return (
    <>
    <LoginWrap>
      <LogoLink
        onClick={() => {
          history.push("/");
        }}
      >
        <Logo src={GoogleLogo} />
      </LogoLink>
        <LogInText>로그인</LogInText>
        <GoMytubeText>Mytube로 이동</GoMytubeText>

      <Grid padding="0px 10%" 
        margin= "10px 0px 5px 0px" height="13%">

        <Input width="80%" bg="#fff"
          label=""
          placeholder="이메일을 입력해주세요."
        />
      </Grid>

      <Grid padding="0px 10%"
        margin= "10px 0px 5px 0px" height="13%">
        <Input width="80%" bg="#fff"
          label=""
          placeholder="비밀번호를 입력해주세요."
          type="password"
        />
      </Grid>

      <ForgetMailText>이메일을 잊으셨나요?</ForgetMailText>
            
      <NotMyComText>내 컴퓨터가 아닌가요? 게스트 모드를 사용하여 비공개로 로그인하세요. 자세히 알아보기</NotMyComText>

      <Grid is_flex>
        <GoSignUp
          onClick={() => {
            history.push("/signup");
        }}
        >
          계정 만들기
        </GoSignUp>
              
        <LoginButton onClick={() => {
          history.push("/");
        }}
        >로그인 하기</LoginButton>
      </Grid>
    </LoginWrap>
    </>
  );
};

const LoginWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  margin: auto;
  margin-top: 100px;
  width: 50%;
  height: 600px;
  border: 1px solid #adb5bd
`;

const Logo = styled.img`
  width: 100%;
  height: 25%;
`;

const LogoLink = styled.button`
  height: 100%;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

const LogInText = styled.div`
  font-size: 30px;
  margin: auto;
`;

const GoMytubeText = styled.div`
  font-size: 20px;
  margin: auto;
`;

const ForgetMailText = styled.div`
  font-size: 20px;
  margin: auto;
  color: #1a73e8;
`;

const NotMyComText = styled.div`
  font-size: 15px;
  margin: 7%;
`;

const GoSignUp = styled.div`
border: none;
background-color: #fff;
color: #1a73e8;
cursor: pointer;
font-size: 20px;
margin: auto;
`;

const LoginButton = styled.button`
  border: none;
  border-radius: 5px;
  background-color: #1a73e8;
  color: #fff;
  cursor: pointer;
  font-size: 20px;
  margin: auto;
  padding: 10px 11px;
`;

export default Login;
