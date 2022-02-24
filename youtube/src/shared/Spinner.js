import React from 'react';
import styled from 'styled-components';
import spinnerImage from '../image/spinnerImage.png';
const Spinner = (props) => {
  return (
    <Outter>
      <Image src={spinnerImage} />
    </Outter>
  );
};

const Outter = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: aliceblue;
  z-index: 100;
  }
`;
const Image = styled.img`
  @media only screen and (max-width: 768px) {
    width: 80%;
    justify-content: center;
  }
`;

export default Spinner;
