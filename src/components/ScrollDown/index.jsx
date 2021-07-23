import React from 'react';
import { LeftWrap, RightWrap, Content } from './elements'
import { TiArrowRightOutline } from 'react-icons/all';

const ScrollDown = () => {
  return (
    <>
      <LeftWrap>
        <Content>
          scroll down!
        </Content>
        <TiArrowRightOutline />
      </LeftWrap>
      <RightWrap>
        <Content>
          scroll down!
        </Content>
        <TiArrowRightOutline />
      </RightWrap>
    </>
  )
}

export default ScrollDown