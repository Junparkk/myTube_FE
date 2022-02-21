import React from 'react';
import styled from 'styled-components';
import { Grid, Input, Text } from '../elements';

import HoverVideoPlayer from 'react-hover-video-player';

const PostCard = () => {
  //마우스 오버시 동영상 실행
  const handleOnMouseOver = (e) => {
    e.currentTarget.play();
  };
  //마우스 아웃시 동영상 정지
  const handleOnMouseOut = (e) => {
    e.currentTarget.pause();
    e.currentTarget.load();
  };

  return (
    <>
      <Card>
        <Wrap flex="column">
          <Wrap height="160px" position="relative" className="abc">
            <video
              id="ab"
              style={{ width: '100%', height: 'auto' }}
              preload="none"
              loop
              muted
              poster="https://user-images.githubusercontent.com/82128525/154791377-100be25d-4b17-4995-8117-fc38e551d81c.png"
              onMouseOver={handleOnMouseOver}
              onMouseOut={handleOnMouseOut}
            >
              <source src="https://response-mz-0.s3.ap-northeast-2.amazonaws.com/original/1645201205383KakaoTalk_20220219_011720432.mp4"></source>
            </video>
          </Wrap>
          <Wrap padding="0.5rem 0">
            <Wrap width="40px" height="40px" padding="5px">
              <Img src="https://user-images.githubusercontent.com/82128525/154791377-100be25d-4b17-4995-8117-fc38e551d81c.png" />
            </Wrap>
            <Wrap flex="column">
              <Title>준파크 채널 많이 사랑해 주세요</Title>
              <Title fontSize=".5rem" color="#808080">
                채널명
              </Title>
              <Title fontSize=".5rem" color="#808080">
                조회수
                <span style={{ fontSize: '.5rem', color: '#808080' }}>
                  ∙ 15시간전 ∙
                </span>
              </Title>
            </Wrap>
          </Wrap>
        </Wrap>
      </Card>

      <Card>
        <Wrap flex="column">
          <Wrap height="160px">
            <video
              style={{ width: '100%', height: 'auto' }}
              preload="none"
              muted
              onMouseOver={handleOnMouseOver}
              onMouseOut={handleOnMouseOut}
            >
              <source src="https://response-mz-0.s3.ap-northeast-2.amazonaws.com/original/1645201205383KakaoTalk_20220219_011720432.mp4"></source>
            </video>
          </Wrap>
          <Wrap padding="0.5rem 0">
            <Wrap width="40px" height="40px" padding="5px">
              <Img src="https://user-images.githubusercontent.com/82128525/154791377-100be25d-4b17-4995-8117-fc38e551d81c.png" />
            </Wrap>
            <Wrap flex="column">
              <Title>준파크 채널 많이 사랑해 주세요</Title>
              <Title fontSize=".5rem" color="#808080">
                채널명
              </Title>
              <Title fontSize=".5rem" color="#808080">
                조회수
                <span style={{ fontSize: '.5rem', color: '#808080' }}>
                  ∙ 15시간전 ∙
                </span>
              </Title>
            </Wrap>
          </Wrap>
        </Wrap>
      </Card>

      <Card>
        <Wrap flex="column">
          <Wrap height="160px">
            <HoverVideoPlayer
              videoSrc="https://response-mz-0.s3.ap-northeast-2.amazonaws.com/original/1645201205383KakaoTalk_20220219_011720432.mp4"
              videoStyle={{ height: '100%' }}
              style={{ width: '100%' }}
              preload="none"
              pausedOverlay={
                <img
                  src="https://user-images.githubusercontent.com/82128525/154789605-4c33374b-70ba-4b83-8a8c-a2787bab42cb.jpg"
                  alt=""
                  style={{
                    // Make the image expand to cover the video's dimensions
                    width: '100%',
                    height: '100%',
                    objectFit: 'fill',
                  }}
                />
              }
              loadingOverlay={
                <div className="loading-overlay">
                  <div className="loading-spinner" />
                </div>
              }
            />
          </Wrap>
          <Wrap padding="0.5rem 0">
            <Wrap width="40px" height="40px" padding="5px">
              <Img src="https://user-images.githubusercontent.com/82128525/154791377-100be25d-4b17-4995-8117-fc38e551d81c.png" />
            </Wrap>
            <Wrap flex="column">
              <Title>준파크 채널 많이 사랑해 주세요</Title>
              <Title fontSize=".5rem" color="#808080">
                채널명
              </Title>
              <Title fontSize=".5rem" color="#808080">
                조회수
                <span style={{ fontSize: '.5rem', color: '#808080' }}>
                  ∙ 15시간전 ∙
                </span>
              </Title>
            </Wrap>
          </Wrap>
        </Wrap>
      </Card>
    </>
  );
};

const Card = styled.div`
  width: 100%;
  height: 250px;
`;

const Img = styled.img`
  width: 100%;
  height: 100%; ;
`;
const Wrap = styled.div`
  display: flex;
  position: ${(props) => props.position};
  padding: ${(props) => props.padding};
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  flex-direction: ${(props) => props.flex};
`;

const Title = styled.p`
  padding: 0px;
  margin: 0px;
  font-size: ${(props) => props.fontSize};
  color: ${(props) => props.color};
`;

export default PostCard;
