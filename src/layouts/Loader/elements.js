import styled, { keyframes } from 'styled-components';

export const Wrap = styled.figure`
  position: absolute;
  display: flex;
  top: 40vh;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
`

export const Content = styled.p`
  font-weight: 300;
  color: lightgray;
  margin-top: .5em;
`

export const Progress = styled.div`
  position: absolute;
  height: 10px;
  width: 30%;
  border: 1px solid grey;
  border-radius: 15px;
  margin-top: 9em;
`

export const loading = keyframes`
  0%{
    width: 0%;
  }
  25%{
    width: 50%;
  }
  50%{
    width: 75%;
  }
  75%{
    width: 85%;
  }
  100%{
    width: 100%;
  }
`

export const Inner = styled.div`
  position: absolute;
  background-color: black;
  height: 10px;
  border-radius: 15px;
  animation: ${loading} 2s forwards linear;
`