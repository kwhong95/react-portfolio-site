import React from 'react'
import styled from 'styled-components';
import IMG from '../../assets/images/logo.png'

const Wrap = styled.figure`
  
`

const LogoImg = styled.img`
  height: 6.5em;
  width: 6.5em;
`

const Logo = () => {
  return (
    <Wrap>
      <LogoImg src={IMG} alt='logo' />
    </Wrap>
  )
}

export default Logo