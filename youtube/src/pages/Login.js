import React from "react";
import { Input, Grid } from "../elements";
import styled from "styled-components";
import GoogleLogo from "../image/GoogleLogo.png";

import { useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";
import { history } from "../redux/configureStore";

const Login = (props) => {
  const dispatch = useDispatch();

  const [userid, setUserId] = React.useState("");
  const [pwd, setPwd] = React.useState("");

  
  const Login = () => {
    
    dispatch(userActions.loginDB(userid, pwd));
  };

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
        margin= "10px 0px 15px 0px" height="13%">

        <Input width="100%" bg="#fff"
          label=""
          placeholder="아이디를 입력해주세요."
          _onChange={(e) => {
            setUserId(e.target.value)
          }}
          value={userid}
        />
      </Grid>

      <Grid padding="0px 10%"
        margin= "10px 0px 10px 0px" height="13%">
        <Input width="100%" bg="#fff"
          label=""
          placeholder="비밀번호를 입력해주세요."
          type="password"
          _onChange={(e) => {
            setPwd(e.target.value)
          }}
          value={pwd}
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
              
        <LoginButton _onClick={Login}>로그인 하기</LoginButton>
      </Grid>
    </LoginWrap>
    </>
  );
};

const LoginWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  margin: auto;
  margin-top: 50px;
  width: 50%;
  height: 750px;
  border-radius: 5px;
  border: 1px solid #adb5bd;
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

const LogInText = styled.div`
  font-size: 24px;
  `;
  
  const GoMytubeText = styled.div`
  font-size: 16px;
  margin: auto;
  padding: 5px 0px 8% 0px;
`;

const ForgetMailText = styled.div`
  font-size: 16px;
  margin: auto 0px;
  padding: 5px 0px 0px 0px;
  color: #1a73e8;
`;

const NotMyComText = styled.div`
  font-size: 15px;
  margin: 10%;
  color: #5f6368;
`;

const GoSignUp = styled.div`
border: none;
background-color: #fff;
color: #1a73e8;
cursor: pointer;
font-size: 16px;
margin: 0px 80px;
`;

const LoginButton = styled.button`
  border: none;
  border-radius: 5px;
  background-color: #1a73e8;
  color: #fff;
  cursor: pointer;
  font-size: 16px;
  margin: 0px 80px;
  padding: 10px 11px;
`;

export default Login;
