import styled from 'styled-components';

export const Container = styled.section`
  position: relative;
  height: 5000px;
`

export const Content = styled.article`
  position: sticky;
  position: -webkit-sticky;
  overflow: hidden;
  top: 0;
  left: 0;
  height: 100vh;
`

export const Stage = styled.div`
  position: relative;
  height: 100%;
`

export const IntroText = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  z-index: 60;
  transform: translate(-50%, -50%);
  transition: opacity .5s;
  
  h2 {
    font-size: 80px;
    line-height: 1;
    color: #fff
  }
  
  ${({active}) => active && {
    opacity: 0
  }}
`

export const LeftMask = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 50%;
  height: 100%;
  background: #111;
  z-index: 50;
`

export const RightMask = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  width: 50%;
  height: 100%;
  background: #111;
  z-index: 50;
`

export const BgImage = styled.figure`
  position: absolute;
  left: 0;
  top: 0;
  z-index: 20;
  width: 100%;
  height: 100%;
  background: #fff;
  background-size: auto 100%;
  // background-repeat: no-repeat;
  // background-position: center center;
`

export const EndingText = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  z-index: 30;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: opacity 1s;
  color: #111;
  
  :after {
    position: absolute; 
    left:0; 
    top:0; 
    z-index:-1; 
    width: 100%; 
    height: 100%; 
    background: rgba(255,255,255,1); 
    content: "";
  }

  ${({active}) => active && {
    opacity: 1
  }}
`

export const TableRow = styled.div`
  display: table;
  width: 100%;
  height: 100%;
`

export const TableCell = styled.div`
  display: table-cell;
  vertical-align: middle;
  text-align: center;
  
  p {
    font-size: 80px; 
    color:#000; 
    line-height: 1;
  }
`












