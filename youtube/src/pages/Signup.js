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
        <GoMytubeText>Mytube로 이동</GoMytubeText>

      <Grid padding="0px 10%" 
        margin= "10px 0px 5px 0px" height="13%">
        <Input width="80%" bg="#fff"
          label=""
          placeholder="아이디"
        />
      </Grid>

      <ConfirmText>이 아이디가 본인 소유인지 확인해야 합니다.</ConfirmText>
      <NewIdText>새로운 Gmail 아이디 만들기</NewIdText>

      <Grid padding="0px 10%" 
        margin= "10px 0px 5px 0px" height="13%">
        <Input width="80%" bg="#fff"
          label=""
          placeholder="닉네임"
        />
      </Grid>

      <Grid padding="0px 10%"
        margin= "10px 0px 5px 0px" height="13%">
        <Input width="80%" bg="#fff"
          label=""
          placeholder="비밀번호"
          type="password"
        />
      </Grid>

      <Grid padding="0px 10%" 
        margin= "10px 0px 5px 0px" height="13%">
        <Input width="80%" bg="#fff"
          label=""
          placeholder="확인"
          type="password"
        />
      </Grid>

      <PwdText>문자, 숫자, 기호를 조합하여 8자 이상을 사용하세요</PwdText>

      <Grid is_flex>              
        <GoLogin onClick={() => {
          history.push("/login");
        }}
        >계정이 있으신가요? 로그인</GoLogin>
            
        <SuccessSignUp onClick={() => {
          history.push("/");
        }}
        >회원가입</SuccessSignUp>
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

const SignInText = styled.div`
  font-size: 30px;
  margin: auto;
`;

const GoMytubeText = styled.div`
  font-size: 20px;
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
  font-size: 20px;
  margin: auto;
`;

const SuccessSignUp = styled.button`
  border: none;
  border-radius: 5px;
  background-color: #1a73e8;
  color: #fff;
  cursor: pointer;
  font-size: 20px;
  margin: auto;
  padding: 10px 11px;
`;

export default Signup;
