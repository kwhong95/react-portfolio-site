import React from 'react'
import { Container } from './elements'
import { size } from '../../assets/styles/theme'
import useMediaQuery from 'react-responsive/src/useMediaQuery';

const Navbar = () => {
  const underTabletSize = useMediaQuery({ maxWidth: size.tablet })

  if (underTabletSize) {
    return (
      <Container>
        <h1>underTablet</h1>
      </Container>
    )
  }

  return (
    <Container>
      <h1>overTablet</h1>
    </Container>
  )
}

export default Navbar