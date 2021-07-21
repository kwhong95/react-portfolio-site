import React from 'react'
import styled from 'styled-components';
import { theme } from '../../assets/styles/theme';

const Container = styled.article`
  display: flex;
  flex-direction: column;
  color: ${theme.mainColor};
  border: 1px solid red;
`

const TopNav = () => {
  return (
    <Container>
      TopNav
    </Container>
  );
}

export default TopNav