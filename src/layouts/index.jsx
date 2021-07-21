import React, { useState } from 'react';
import Navbar from './Navbar';
import styled from 'styled-components';
import useMediaQuery from 'react-responsive/src/useMediaQuery'
import { size } from '../assets/styles/theme';
import { GiHamburgerMenu } from 'react-icons/gi'

const Container = styled.div`
  display: flex;
  overflow: hidden;
`

const SectionLayout = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  left: ${({theme}) => theme.navWidth};
  width: calc(100% - ${({theme}) => theme.navWidth});
  height: 100%;

  @media ${({theme}) => theme.tablet} {
    left: 0;
    display: flex;
    width: 100%;
  }
`

const BurgerMenu = styled.button`
  position: absolute;
  right: 0;
  top: 0;
  padding: 1rem;
  border: none;
  font-size: 2em;
  background: none;
  cursor: pointer;
  color: gray;
`

const Layouts = ({ children }) => {
  const [open, setOpen] = useState(false);
  const underTabletLayout = useMediaQuery({ maxWidth: size.tablet });

  const handleClick = () => {
    setOpen(!open);
  }

  if (underTabletLayout) {
    return (
      <Container>
        <SectionLayout>
          <BurgerMenu onClick={handleClick}>
            <GiHamburgerMenu />
          </BurgerMenu>
          {children}
        </SectionLayout>
      </Container>
    )
  }

  return (
    <Container>
      <Navbar />
      <SectionLayout>
        {children}
      </SectionLayout>
    </Container>
  )
}

export default Layouts