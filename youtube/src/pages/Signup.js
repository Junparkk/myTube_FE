import React from "react";
import { Input, Grid, Button } from "../elements";
import styled from "styled-components";
import GoogleLogo from "../image/GoogleLogo.png";

import { useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";
import { history } from "../redux/configureStore";

const Signup = () => {
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
        <SignInText>Google 계정 만들기</SignInText>

      <Grid padding="0px 10%" 
        margin= "10px 0px 5px 0px" height="13%">

        <Input width="80%"
          label=""
          placeholder="이메일을 입력해주세요."
        />
      </Grid>

      <Grid padding="0px 10%" height="13%">

        <Input width="80%"
          label=""
          placeholder="닉네임을 입력해주세요."
        />
      </Grid>

            <Grid padding="0px 10%" height="13%">
              <Input width="80%"
                label=""
                placeholder="비밀번호를 입력해주세요."
                type="password"
              />
            </Grid>

            <Grid padding="0px 10%" height="13%">
              <Input width="80%"
                label=""
                placeholder="비밀번호를 다시 입력해주세요."
                type="password"
              />
            </Grid>

            <Grid is_flex>              
              <GoSignUp onClick={() => {
                  history.push("/");
                }}
              >회원가입</GoSignUp>
            </Grid>

            <Grid is_flex>              
              <LoginButton onClick={() => {
                  history.push("/login");
                }}
              >계정이 있으신가요? 로그인</LoginButton>
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
  border: 1px solid #adb5bd
  width: 100%;
  height: 600px;
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

const SignInText = styled.div`
  font-size: 30px;
  margin: auto;
`;

const GoSignUp = styled.button`
  border: none;
  border-radius: 5px;
  background-color: #1a73e8;
  color: #fff;
  cursor: pointer;
  font-size: 20px;
  margin: auto;
  padding: 10px 11px;
`;

const LoginButton = styled.button`
  border: none;
  background-color: #fff;
  color: #1a73e8;
  cursor: pointer;
  font-size: 30px;
  margin: auto;
`;

export default Signup;
