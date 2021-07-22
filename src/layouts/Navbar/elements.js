import styled from 'styled-components'

export const Container = styled.nav`
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: ${({ theme })=> theme.navWidth};
  height: 100vh;
  background: #181818;
  color: #fff;
  
  @media ${({theme}) => theme.tablet} {
    width: 100%;
  }
`
