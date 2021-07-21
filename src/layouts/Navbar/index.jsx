import React from 'react'
import { Container } from './elements'
import TopNav from './TopNav';
import BottomNav from './BottomNav';
import CenterNav from './CenterNav';
import { GiCancel } from 'react-icons/gi';

const Navbar = ({ open, handleClick, BurgerMenu }) => {
  return (
    <Container>
      {open &&
        <>
        <BurgerMenu onClick={handleClick}>
          <GiCancel />
        </BurgerMenu>
        </>
      }
      <TopNav />
      <CenterNav />
      <BottomNav/>
    </Container>
  )
}

export default Navbar