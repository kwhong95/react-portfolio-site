import styled from 'styled-components'

export const Container = styled.nav`
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
  width: ${({ theme })=> theme.navWidth};
  height: 96vh;
  background: rgba(0, 0, 0, 0.95);
  color: #fff;
  
  @media ${({theme}) => theme.tablet} {
    width: 100%;
  }
`
