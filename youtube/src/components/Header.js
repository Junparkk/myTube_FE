import React, { useState } from 'react';
import styled from 'styled-components';
import { Button, Grid, Input } from '../elements';

import MainLogo from '../image/MainLogo.png';
import { BiVideoPlus } from 'react-icons/bi';
import { BiSearch } from 'react-icons/bi';
import { FaBars } from 'react-icons/fa';
import { BsPersonCircle } from 'react-icons/bs';

import { useDispatch } from 'react-redux';
import { actionCreators as userActions } from '../redux/modules/user';

import { history } from '../redux/configureStore';

import Modal from './Modal';

const Header = (props) => {
  //모달 창
  let [modalopen, setModalopen] = useState(false);
  //사이드 탭 열기
  const openModal = () => {
    setModalopen(true);
  };

  //사이드 탭 닫기
  //참여인원 팝업 닫기
  const closeModal = () => {
    setModalopen(false);
  };
  return (
    <>
      <Grid is_flex padding="10px">
        <LeftIcon>
          <FaBars size="25px" onClick={openModal}></FaBars>
        </LeftIcon>
        <Modal
          open={modalopen}
          close={closeModal}
          header="참여인원"
          // value={post && post.curMembers}
        ></Modal>

        <Grid is_flex justifyContent="left" width="20%">
          <img //노란줄 왜 이러는 걸까요
            src={MainLogo}
            style={{
              width: '80%',
              height: '10%',
            }}
            onClick={() => {
              history.push('/');
            }}
          />
        </Grid>

        <Grid is_flex justifyContent="center">
          <Input width="80%" bg="white"></Input>

          <SearchIcon>
            <BiSearch
              size="40px"
              onClick={() => {
                history.push('/');
              }}
            ></BiSearch>
          </SearchIcon>
        </Grid>

        <VidioIcon>
          <BiVideoPlus
            size="50px"
            onClick={() => {
              history.push('/write');
            }}
          ></BiVideoPlus>
        </VidioIcon>

        <LoginIcon>
          <BsPersonCircle
            size="35px"
            onClick={() => {
              history.push('/login');
            }}
          ></BsPersonCircle>
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
  justifycontent: left;
  width: 5%;
`;

const SearchIcon = styled.button`
  cursor: pointer;
  border: none;
  background-color: #fff;
  display: flex;
  justifycontent: right;
  width: 5%;
`;

const VidioIcon = styled.button`
  cursor: pointer;
  border: none;
  background-color: #fff;
  display: flex;
  justifycontent: right;
  width: 8%;
`;

const LoginIcon = styled.button`
  cursor: pointer;
  border: none;
  background-color: #fff;
  display: flex;
  justifycontent: right;
  width: 4%;
`;
export default Header;
