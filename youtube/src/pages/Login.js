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
        <SignInText>로그인</SignInText>

      <Grid padding="0px 10%" 
        margin= "10px 0px 5px 0px" height="13%">

        <Input width="80%"
          label=""
          placeholder="이메일을 입력해주세요."
        />
      </Grid>

            <Grid padding="0px 10%"
            margin= "10px 0px 5px 0px" height="13%">
              <Input width="80%"
                label=""
                placeholder="비밀번호를 입력해주세요."
                type="password"
              />
            </Grid>

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

const GoSignUp = styled.div`
  border: none;
  background-color: none;
  color: #1a73e8;
  cursor: pointer;
  font-size: 20px;
  margin-top: 20px;
  padding: 0px 0px 0px 3%;
  height: 3px;
`;

const LoginButton = styled.button`
  border: none;
  background-color: #fff;
  color: #1a73e8;
  cursor: pointer;
  font-size: 20px;
  margin-top: 20px;
  padding: 0px 0px 0px 3%;
  height: 3px;
`;

export default Login;
