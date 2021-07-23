import React, { useState } from 'react'
import Navbar from './Navbar'
import styled, { keyframes } from 'styled-components';
import useMediaQuery from 'react-responsive/src/useMediaQuery'
import { size } from '../assets/styles/theme'
import { GiHamburgerMenu } from 'react-icons/gi'
import Modal from 'react-modal'

const Container = styled.div`
  display: flex;
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
  z-index: 3;
`

const setModalAnimation = keyframes`
  100% { top:0; opacity: 1; }
`

const StyledModal = styled(Modal)`
  position: absolute;
  top: -100%;
  width: 100%;
  height: 100%;
  opacity: 0;
  animation: ${setModalAnimation} 1s ease-in-out forwards;
`

const Layouts = ({ children }) => {
  const [open, setOpen] = useState(false)
  const underLaptopLayout = useMediaQuery({ maxWidth: size.laptop })

  const handleClick = () => {
    setOpen(!open);
  }

  if (underLaptopLayout) {
    return (
      <Container>
        <SectionLayout>
          <BurgerMenu onClick={handleClick}>
            {!open && <GiHamburgerMenu /> }
          </BurgerMenu>
          <StyledModal isOpen={open} ariaHideApp={false}>
            <Navbar
              open={open}
              handleClick={handleClick}
              BurgerMenu={BurgerMenu}
            />
          </StyledModal>
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