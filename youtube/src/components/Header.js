import React from "react";
import styled from "styled-components";
import { Button, Grid, Input } from "../elements";

import MainLogo from "../image/MainLogo.png";
import { FaBars } from "react-icons/fa";
import { FaKeyboard } from "react-icons/fa";
import { BiSearch } from "react-icons/bi";
import { BiVideoPlus } from "react-icons/bi";
import { BsGrid3X3Gap } from "react-icons/bs";
import { BsBell } from "react-icons/bs";
import { BsPersonCircle } from "react-icons/bs";

import { useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";

import { history } from "../redux/configureStore";

const Header = (props) => {
  return (
    <>
      <Grid is_flex padding="10px">
        <LeftIcon>
        <FaBars size="25px"
            onClick={() => {
              history.push("/");
            }}
          >
          </FaBars>
        </LeftIcon>

        <Grid is_flex justifyContent="left" width="20%">
          <img //노란줄 왜 이러는 걸까요
            src={MainLogo}
            style={{
              width: "80%",
              height: "10%"
            }}
            onClick={() => {history.push("/");}}
          />
        </Grid>

        <Grid is_flex justifyContent="center">
          <Input width="80%" bg="#fff"></Input>

            <KeyboardIcon>
              <FaKeyboard size="40px" />
            </KeyboardIcon>

        <SearchIcon>
          <BiSearch size="40px"
              onClick={() => {
                history.push("/");
              }}
            >
          </BiSearch>
        </SearchIcon>
        </Grid>
              
        <VidioIcon>
          <BiVideoPlus size="50px"
              onClick={() => {
                history.push("/write");
              }}
            >
          </BiVideoPlus>
        </VidioIcon>
        
        <PadIcon>
          <BsGrid3X3Gap size="35px" />
        </PadIcon>

        <BellIcon>
          <BsBell size="35px" />
        </BellIcon>

        <LoginIcon>
          <BsPersonCircle size="35px"
              onClick={() => {
                history.push("/login");
              }}
            >
          </BsPersonCircle>
        </LoginIcon>
        </Grid>
    </>
  );
};

const LeftIcon = styled.button`
  cursor: pointer;
  border: none;
  background-color: #fff;
  display: flex;
  justifyContent: left;
  width: 5%;
`;

const KeyboardIcon = styled.button`
  cursor: pointer;
  border: none;
  background-color: #fff;
  display: flex;
  justifyContent: right;
  width: 5%;
`;

const SearchIcon = styled.button`
  cursor: pointer;
  border: none;
  background-color: #fff;
  display: flex;
  justifyContent: right;
  width: 5%;
`;

const VidioIcon = styled.button`
  cursor: pointer;
  border: none;
  background-color: #fff;
  display: flex;
  justifyContent: right;
  width: 6.5%;
`;

const PadIcon = styled.button`
  cursor: pointer;
  border: none;
  background-color: #fff;
  display: flex;
  justifyContent: right;
  width: 5%;
`;

const BellIcon = styled.button`
  cursor: pointer;
  border: none;
  background-color: #fff;
  display: flex;
  justifyContent: right;
  width: 5%;
`;

const LoginIcon = styled.button`
  cursor: pointer;
  border: none;
  background-color: #fff;
  display: flex;
  justifyContent: right;
  width: 4%;
`;
export default Header;
