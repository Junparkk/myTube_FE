import React from 'react';

import styled from 'styled-components';

const DropDown = (props) => {
  const [choice, setChoice] = React.useState('선택');
  React.useEffect(() => {
    props.setCategory(choice);
  }, [choice]);

  const setFilter = (num) => {
    setChoice(
      num === 0
        ? '선택'
        : num === 1
        ? '음악'
        : num === 2
        ? '요리'
        : num === 3
        ? '스포츠'
        : num === 4
        ? '여행'
        : num === 5
        ? '동물'
        : num === 6
        ? '게임'
        : '기타'
    );
  };

  return (
    <>
      <Ul>
        {choice}
        <Li onClick={() => setFilter(0)}>선택</Li>
        <Li onClick={() => setFilter(1)}>음악</Li>
        <Li onClick={() => setFilter(2)}>요리</Li>
        <Li onClick={() => setFilter(3)}>스포츠</Li>
        <Li onClick={() => setFilter(4)}>여행</Li>
        <Li onClick={() => setFilter(5)}>동물</Li>
        <Li onClick={() => setFilter(6)}>게임</Li>
        <Li onClick={() => setFilter(7)}>기타</Li>
      </Ul>
    </>
  );
};

const Ul = styled.ul`
  width: 9rem;
  z-index: 999;
  padding: 0;
  text-align: center;
  background: #fff;
  font-size: 0.5rem;
  color: black;
  line-height: 25px;
  border: 1px solid #a0a0a0;
  cursor: pointer;
  &:hover {
    Li {
      display: block;
    }
  }
`;

const Li = styled.li`
  display: none;
  cursor: pointer;
`;

export default DropDown;
