import React from 'react'
import { Container } from './elements'
import { size } from '../../assets/styles/theme'
import useMediaQuery from 'react-responsive/src/useMediaQuery';
import TopNav from './TopNav';
import BottomNav from './BottomNav';
import CenterNav from './CenterNav';

const Navbar = () => {
  const underTabletSize = useMediaQuery({ maxWidth: size.tablet })

  if (underTabletSize) {
    return (
      <>
      </>
    )
  }

  return (
    <Container>
      <TopNav />
      <CenterNav />
      <BottomNav/>
    </Container>
  )
}

export default Navbar