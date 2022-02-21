import React from 'react';

import styled from 'styled-components';

import { BiImageAdd } from 'react-icons/bi';

import DropDown from '../components/DropDown';
const Write = () => {
  return (
    <>
      <Wrap>
        {/* 왼쪽 */}
        <Container flexDirection="column" width="90%">
          {/* 세부정보 텍스트 */}
          <Container
            justifyContent="space-between"
            width="103%"
            alignItems="center"
          >
            <Text>세부정보</Text>
            <Text size=".7rem">세부정보 재사용</Text>
          </Container>
          {/* 인풋 */}
          <Container flexDirection="column">
            <Container
              flexDirection="column"
              border="1px solid #a0a0a0"
              width="100%"
              margin=".5rem 0"
              padding=".3rem"
            >
              <Text size=".5rem">제목(필수 항목)</Text>
              <Input
                type="text"
                maxLength="20"
                placeholder="동영상을 설명하는 제목을 추가하세요"
              ></Input>
            </Container>
            <Container
              flexDirection="column"
              border="1px solid #a0a0a0"
              width="100%"
              margin=".5rem 0"
              padding=".3rem"
            >
              <Text size=".5rem">설명</Text>
              <Textarea
                rows="5"
                placeholder="시청자에게 동영상에 대해 알려주세요"
              ></Textarea>
            </Container>
          </Container>
          {/* 미리보기 이미지 */}
          <Container flexDirection="column">
            <Text mBottom="5px" size=".7rem">
              미리보기 이미지
            </Text>
            <Text size=".5rem" mBottom="5px">
              동영상의 내용을 알려주는 사진을 선택하거나 업로드하세요. 시청자의
              시선을 사로잡을만한 이미지를 사용해 보세요.
              <span>자세히 알아보기</span>
            </Text>
            <Container
              width="6rem"
              flexDirection="column"
              alignItems="center"
              border="1px solid #a0a0a0"
              padding=".7rem 0"
            >
              <BiImageAdd size="1rem" />
              <Text size=".5rem">미리보기 이미지 업로드</Text>
            </Container>
          </Container>
          {/* 카테고리 */}
          <Container flexDirection="column" margin="5px 0 0 0">
            <Text mBottom="5px" size=".7rem">
              카테고리
            </Text>
            <Text size=".5rem" mBottom="5px">
              카테고리를 선택해 추가하세요. 카테고리 별로 동영상을 찾기
              쉬워집니다.
              <span>자세히 알아보기</span>
            </Text>
            <DropDown></DropDown>
          </Container>
          {/* 시청자층 기능 없음 */}
          <Container flexDirection="column" margin="5px 0 0 0">
            <Text mBottom="5px" size=".7rem">
              시청자층
            </Text>
            <Text size=".5rem" mBottom="5px">
              아동용 동영상인가요?(필수사항)
              <span>자세히 알아보기</span>
            </Text>
            <Text size=".3rem" mBottom="5px">
              모든 크리에이터는 위치에 상관없이 아동 온라인 개인정보
              보호법(COPPA) 및 기타 법률을 준수해야 할 법적인 의무가 있습니다.
              아동용 동영상인지 여부는 크리에이터가 지정해야 합니다.
              <span>아동용 콘텐츠란 무엇인가요?</span>
            </Text>
          </Container>
        </Container>
        {/* 오른쪽 */}
        <Container className="right" width="100%">
          <Container flexDirection="column">
            <Container>
              <Video></Video>
            </Container>
            <Container flexDirection="column">
              <Text size=".7rem">동영상 링크</Text>
              <Text size=".4rem">http</Text>
              <Text size=".7rem">파일 이름</Text>
              <Text size=".4rem">멍텅구리</Text>
            </Container>
            <Container>
              <label
                htmlFor="input_file"
                style={{
                  display: 'flex',
                  width: '50px',
                  height: '20px',
                  borderRadius: '20px',
                  border: '1px solid black',
                  fontSize: '.4rem',
                  justifyContent: 'center',
                  alignItems: 'center',
                  textAlign: 'center',
                  marginTop: '2px',
                }}
              >
                업로드
              </label>
              <FileInput id="input_file" type="file" accept=".mp4"></FileInput>
            </Container>
          </Container>
        </Container>
      </Wrap>
    </>
  );
};
const Wrap = styled.div`
  /* background-color: aliceblue; */
  display: grid;
  grid-template-columns: repeat(1, 7fr 3fr);
  grid-template-rows: auto;
  justify-content: space-between;
  width: 80%;
  /* height: 100vh; */
  margin: auto;
  @media screen and (min-width: 1607px) {
  }
  @media screen and (min-width: 960px) and (max-width: 1607px) {
  }
  @media screen and (min-width: 551px) and (max-width: 960px) {
  }
  @media screen and (min-width: 0px) and (max-width: 551px) {
    /* .right {
      display: none;
    } */
    grid-template-columns: repeat(1, 1fr);
  }
`;
const Container = styled.div`
  display: flex;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  flex-direction: ${(props) => props.flexDirection};
  justify-content: ${(props) => props.justifyContent};
  align-items: ${(props) => props.alignItems};
  border: ${(props) => props.border};
  padding: ${(props) => props.padding};
  margin: ${(props) => props.margin};
`;

const Text = styled.p`
  font-size: ${(props) => props.size};
  padding: 0;
  margin: 0;
  margin-bottom: ${(props) => props.mBottom};
`;

const Input = styled.input`
  &:focus {
    outline: none;
  }
  border: none;
  margin-top: 2px;
  font-size: 0.5rem;
  padding: 0.5rem;
  width: 90%;
`;

const Textarea = styled.textarea`
  font-size: 0.5rem;
  padding: 0.5rem;
  width: 90%;
  border: none;
  margin-top: 2px;
  &:focus {
    outline: none;
  }
`;

const Video = styled.video`
  width: 100%;
  height: 200px;
  border: 1 solid black;
  background-color: black;
`;

const FileInput = styled.input`
  display: none;
`;

export default Write;
