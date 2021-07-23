import styled, { keyframes } from 'styled-components';

export const LeftWrap = styled.div`
  position: absolute;
  left: -2em;
  top: 90vh;
  margin-right: 2em;
  display: flex;
  align-items: center;
  transform: rotate(90deg);
  font-size: 14px;
`

export const RightWrap = styled.div`
  position: absolute;
  right: -4em;
  top: 90vh;
  margin-right: 2em;
  display: flex;
  align-items: center;
  transform: rotate(90deg);
  font-size: 14px;
`

const upDown = keyframes`
  to { transform: translateX(12px) }
`

export const Content = styled.p`
  color: #fff;
  transform: translateX(0px);
  margin-right: 1.5em;
  animation: ${upDown} .5s linear infinite alternate;
`