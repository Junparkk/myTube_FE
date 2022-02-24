import React from 'react';
import { Text, Grid } from '../elements';
import styled from 'styled-components';

import { FaBars } from 'react-icons/fa';
import MainLogo from '../image/MainLogo.png';

//icon
import { BiHomeAlt } from 'react-icons/bi';
import { IoNavigateCircleOutline } from 'react-icons/io5';
import { MdOutlineSubscriptions } from 'react-icons/md';
import { BsPlayBtn } from 'react-icons/bs';
import { SiYoutubemusic } from 'react-icons/si';
import { VscChromeRestore } from 'react-icons/vsc';
import { AiOutlineFieldTime } from 'react-icons/ai';

import { AiOutlinePlaySquare } from 'react-icons/ai';
import { MdLocalMovies } from 'react-icons/md';
import { BiTimeFive } from 'react-icons/bi';
import { AiOutlineDownload } from 'react-icons/ai';
import { AiOutlineCheck } from 'react-icons/ai';
import { FaMusic } from 'react-icons/fa';
import { BsFillTrophyFill } from 'react-icons/bs';
import { FaGamepad } from 'react-icons/fa';
import { RiMovie2Fill } from 'react-icons/ri';
import { IoGameControllerOutline } from 'react-icons/io5';
import { GiAerialSignal } from 'react-icons/gi';
import { AiOutlineBulb } from 'react-icons/ai';
import { AiOutlineTrophy } from 'react-icons/ai';

const Modal = (props) => {
  const { open, close, header, value } = props;
  if (open) {
    return (
      <OpenModal>
        <Section>
          <ModalHeader>
            <Grid is_flex padding="0px" justifyContent="left" height="52px">
              <LeftIcon>
                <FaBars
                  color="#000"
                  size="1rem"
                  onClick={close}
                  padding="0 20px"
                >
                  {header}
                </FaBars>
              </LeftIcon>

              <Grid is_flex justifyContent="left">
                <img //노란줄 왜 이러는 걸까요
                  src={MainLogo}
                  style={{
                    width: '150px',
                    height: '35px',
                  }}
                />
              </Grid>
            </Grid>
          </ModalHeader>

          <ModalContent>
            {/* 1번 사이드 탭 */}
            <MenuContainer>
              <MenuButton>
                <BiHomeAlt
                  color="#000"
                  size={25}
                  style={{ padding: '0 20px' }}
                />
                <MenuText>홈</MenuText>
              </MenuButton>
              <MenuButton>
                <IoNavigateCircleOutline
                  color="#000"
                  size={25}
                  style={{ padding: '0 20px' }}
                />
                <MenuText>탐색</MenuText>
              </MenuButton>
              <MenuButton>
                <BiHomeAlt
                  color="#000"
                  size={25}
                  style={{ padding: '0 20px' }}
                />
                <MenuText>Shorts</MenuText>
              </MenuButton>
              <MenuButton>
                <MdOutlineSubscriptions
                  color="#000"
                  size={25}
                  style={{ padding: '0 20px' }}
                />
                <MenuText>구독</MenuText>
              </MenuButton>
              <MenuButton>
                <BsPlayBtn
                  color="#000"
                  size={25}
                  style={{ padding: '0 20px' }}
                />
                <MenuText>Originals</MenuText>
              </MenuButton>
              <MenuButton>
                <SiYoutubemusic
                  color="#000"
                  size={25}
                  style={{ padding: '0 20px' }}
                />
                <MenuText>Youtube Music</MenuText>
              </MenuButton>
            </MenuContainer>
            {/* 2번 사이드 탭 */}
            <MenuContainer>
              <MenuButton>
                <VscChromeRestore
                  color="#000"
                  size={25}
                  style={{ padding: '0 20px' }}
                />
                <MenuText>보관함</MenuText>
              </MenuButton>
              <MenuButton>
                <AiOutlineFieldTime
                  color="#000"
                  size={25}
                  style={{ padding: '0 20px' }}
                />
                <MenuText>시청 기록</MenuText>
              </MenuButton>
              <MenuButton>
                <AiOutlinePlaySquare
                  color="#000"
                  size={25}
                  style={{ padding: '0 20px' }}
                />
                <MenuText>내 동영상</MenuText>
              </MenuButton>
              <MenuButton>
                <MdLocalMovies
                  color="#000"
                  size={25}
                  style={{ padding: '0 20px' }}
                />
                <MenuText>내 영화</MenuText>
              </MenuButton>
              <MenuButton>
                <BiTimeFive
                  color="#000"
                  size={25}
                  style={{ padding: '0 20px' }}
                />
                <MenuText>나중에 볼 동영상</MenuText>
              </MenuButton>
              <MenuButton>
                <AiOutlineDownload
                  color="#000"
                  size={25}
                  style={{ padding: '0 20px' }}
                />
                <MenuText>오프라인 저장 동여상</MenuText>
              </MenuButton>
              <MenuButton>
                <AiOutlineCheck
                  color="#000"
                  size={25}
                  style={{ padding: '0 20px' }}
                />
                <MenuText>더보기</MenuText>
              </MenuButton>
            </MenuContainer>
            {/* 3번째 사이드 탭 */}
            <MenuContainer>
              <MenuText style={{ padding: '0px 32px' }}>구독</MenuText>
              <MenuButton>
                <FaMusic color="#000" size={25} style={{ padding: '0 20px' }} />
                <MenuText>음악</MenuText>
              </MenuButton>
              <MenuButton>
                <BsFillTrophyFill
                  color="#000"
                  size={25}
                  style={{ padding: '0 20px' }}
                />
                <MenuText>스포츠</MenuText>
              </MenuButton>
              <MenuButton>
                <FaGamepad
                  color="#000"
                  size={25}
                  style={{ padding: '0 20px' }}
                />
                <MenuText>게임</MenuText>
              </MenuButton>
              <MenuButton>
                <RiMovie2Fill
                  color="#000"
                  size={25}
                  style={{ padding: '0 20px' }}
                />
                <MenuText>영화</MenuText>
              </MenuButton>
            </MenuContainer>
            {/* 4번째 사이드 탭 */}
            <MenuContainer>
              <MenuText style={{ padding: '0px 32px' }}>
                YOUTUBE 더보기
              </MenuText>
              <MenuButton>
                <MdLocalMovies
                  color="#000"
                  size={25}
                  style={{ padding: '0 20px' }}
                />
                <MenuText>영화</MenuText>
              </MenuButton>
              <MenuButton>
                <IoGameControllerOutline
                  color="#000"
                  size={25}
                  style={{ padding: '0 20px' }}
                />
                <MenuText>게임</MenuText>
              </MenuButton>
              <MenuButton>
                <GiAerialSignal
                  color="#000"
                  size={25}
                  style={{ padding: '0 20px' }}
                />
                <MenuText>실시간</MenuText>
              </MenuButton>
              <MenuButton>
                <AiOutlineBulb
                  color="#000"
                  size={25}
                  style={{ padding: '0 20px' }}
                />
                <MenuText>학습</MenuText>
              </MenuButton>
              <MenuButton>
                <AiOutlineTrophy
                  color="#000"
                  size={25}
                  style={{ padding: '0 20px' }}
                />
                <MenuText>스포츠</MenuText>
              </MenuButton>
            </MenuContainer>
          </ModalContent>
        </Section>
      </OpenModal>
    );
  }
  return null;
};

const ModalBox = styled.div`
  display: none;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 99;
  background-color: rgba(0, 0, 0, 0.6);

  @keyframes modal-show {
    from {
      opacity: 0;
      margin-left: -300px;
    }
    to {
      opacity: 1;
      margin-left: 0;
    }
  }
  @keyframes modal-bg-show {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const OpenModal = styled(ModalBox)`
  //위치 조정
  display: flex;
  justify-content: left;
  align-items: top;

  /* 팝업이 스르륵 열리는 효과 */
  animation: modal-bg-show 0.6s;
`;

const ModalHeader = styled.header`
  position: relative;
  // padding: 16px 64px 16px 16px;
  padding: 10px;
  background-color: #fff;
  font-weight: 700;
`;

const Section = styled.section`
  width: 100%;
  // margin: 0;
  max-width: 350px;
  border-radius: 0.3rem;
  /* box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px; */
  background-color: #fff;
  /* 팝업이 스르륵 열리는 효과 */
  animation: modal-show 0.3s linear;
  overflow: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const ModalContent = styled.div`
  padding: 0;
  // border-bottom: 1px solid #dee2e6;
  // border-top: 1px solid #dee2e6;
  //modal 배경색
  background-color: #fff;
  height: 100%;
`;
const MenuContainer = styled.div`
  width: 100%;
  padding: 0;
  border-bottom: 1px solid #383838;
`;
const MenuButton = styled.button`
  height: 40px;
  padding: 6px 12px;
  color: #fff;
  background-color: #fff;
  font-size: 13px;
  outline: none;
  cursor: pointer;
  border: 0;

  //is_flex
  display: flex;
  justify-content: left;

  //가운데 오게
  align-items: center;
`;

const MenuText = styled.p`
  color: #000;
  font-size: 18px;
`;
//Header에서 가져온 로고 =이렇게 생긴거
const LeftIcon = styled.button`
  cursor: pointer;
  border: none;
  background-color: #fff;
  display: flex;
  justifycontent: left;
  padding: 0 20px;
`;

export default Modal;
