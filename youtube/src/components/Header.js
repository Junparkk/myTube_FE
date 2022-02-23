import React, { useState } from 'react';
import styled from 'styled-components';
import { Button, Grid, Input } from '../elements';

import MainLogo from '../image/MainLogo.png';
import { FaBars } from 'react-icons/fa';
import { FaKeyboard } from 'react-icons/fa';
import { BiSearch } from 'react-icons/bi';
import { BiVideoPlus } from 'react-icons/bi';
import { BsGrid3X3Gap } from 'react-icons/bs';
import { BsBell } from 'react-icons/bs';
import { BsPersonCircle } from 'react-icons/bs';

import { useDispatch } from 'react-redux';
import { actionCreators as userActions } from '../redux/modules/user';
import { actionCreators as searchActions } from '../redux/modules/post';

import { history } from '../redux/configureStore';

import Modal from './Modal';
const Header = (props) => {
  const dispatch = useDispatch();
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

  //search
  const [search, setSearch] = React.useState('');
  const keywordSearch = (e) => {
    //엔터치면 값이 입력되게
    if (e.code === 'Enter') {
      setSearch(e.target.value);
      dispatch(searchActions.searchAPI(e.target.value));
    }
  };
  const searchClick = (e) => {
    dispatch(searchActions.searchAPI(search));
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
          // value={post && post.curMembers}
        ></Modal>

        <Grid is_flex justifyContent="left" width="20%">
          <img //노란줄 왜 이러는 걸까요
            src={MainLogo}
            style={{
              width: '150px',
            }}
            onClick={() => {
              history.push('/');
            }}
          />
        </Grid>

        <Grid is_flex justifyContent="center">
          <Input
            label=""
            value={search}
            _onKeyPress={keywordSearch}
            _onChange={(e) => setSearch(e.target.value)}
            placeholder="검색"
            width="80%"
            bg="#fff"
          ></Input>

          <KeyboardIcon>
            <FaKeyboard size="40px" />
          </KeyboardIcon>

          <SearchIcon>
            <BiSearch size="40px" onClick={searchClick}></BiSearch>
          </SearchIcon>
        </Grid>

        <VideoIcon>
          <BiVideoPlus
            size="50px"
            onClick={() => {
              history.push('/write');
            }}
          ></BiVideoPlus>
        </VideoIcon>

        <PadIcon>
          <BsGrid3X3Gap size="35px" />
        </PadIcon>

        <BellIcon>
          <BsBell size="35px" />
        </BellIcon>

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
  width: 70px;
`;

const KeyboardIcon = styled.button`
  cursor: pointer;
  border: none;
  background-color: #fff;
  display: flex;
  justifycontent: right;
  width: 50px;
`;

const SearchIcon = styled.button`
  cursor: pointer;
  border: none;
  background-color: #fff;
  display: flex;
  justifycontent: right;
  width: 45px;
`;

const VideoIcon = styled.button`
  cursor: pointer;
  border: none;
  background-color: #fff;
  display: flex;
  justifycontent: right;
  width: 65px;
`;

const PadIcon = styled.button`
  cursor: pointer;
  border: none;
  background-color: #fff;
  display: flex;
  justifycontent: right;
  width: 55px;
`;

const BellIcon = styled.button`
  cursor: pointer;
  border: none;
  background-color: #fff;
  display: flex;
  justifycontent: right;
  width: 55px;
`;

const LoginIcon = styled.button`
  cursor: pointer;
  border: none;
  background-color: #fff;
  display: flex;
  justifycontent: right;
  width: 55px;
`;

export default Header;
