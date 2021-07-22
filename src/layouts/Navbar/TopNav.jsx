import React from 'react'
import styled from 'styled-components';
import { theme } from '../../assets/styles/theme';
import Logo from '../../components/Logo';

const Container = styled.article`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${theme.mainColor};
`

const Nickname = styled.h3`

`

const MyJob = styled.p`
  font-size: .7em;
  margin-top: 10px;
  color: lightgray;
`

const TopNav = () => {

  return (
    <Container>
      <Logo />
      <Nickname>Kyle</Nickname>
      <MyJob>UX Engineer</MyJob>
    </Container>
  );
}

export default TopNav