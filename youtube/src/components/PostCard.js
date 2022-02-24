import React from 'react';
import { useRef } from 'react';
import { history } from '../redux/configureStore';
import styled from 'styled-components';
import { Grid, Input, Text, Image } from '../elements';

import { transformDate } from '../shared/transformDate';

import { useDispatch } from 'react-redux';
import { actionCreators as postActions } from '../redux/modules/post';
import { actionCreators as commentsActions } from '../redux/modules/comments';
import { GiConsoleController } from 'react-icons/gi';

const PostCard = (props) => {
  console.log('PostCard', props);
  const dispatch = useDispatch();
  //마우스 오버시 동영상 실행
  const handleOnMouseOver = (e) => {
    e.currentTarget.play();
  };
  //마우스 아웃시 동영상 정지
  const handleOnMouseOut = (e) => {
    e.currentTarget.load();
  };
  const { postId } = props;
  console.log('ddddddddddddddddd', props);
  const test = useRef(null);
  return (
    <>
      <Card
        onClick={() => {
          history.push(`/api/posts/${postId}`);
          dispatch(postActions.getOnePostDB(postId));
        }}
      >
        <Wrap flex="column">
          <Wrap height="200px">
            <video
              ref={test}
              style={{ width: '100%', height: 'auto', objectFit: 'fill' }}
              loop
              muted
              poster={props.imageUrl}
              onMouseOver={handleOnMouseOver}
              onMouseOut={handleOnMouseOut}
            >
              <source width="100%" height="100%" src={props.videoUrl}></source>
            </video>
          </Wrap>
          <Wrap padding="0.5rem 0">
            <Wrap width="40px" height="40px" padding="5px">
              <Img src={props.profile} />
            </Wrap>
            <Wrap flex="column" padding="5px 0">
              <Title>{props.title}</Title>
              <Title fontSize=".5rem" color="#808080">
                {props.channelName}
              </Title>
              <Title fontSize=".5rem" color="#808080">
                조회수 {props.views}회
                <span style={{ fontSize: '.5rem', color: '#808080' }}>
                  &nbsp; ∙ {transformDate(props.createdAt)} ∙
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
  height: 100%;
  border-radius: 50%;
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
