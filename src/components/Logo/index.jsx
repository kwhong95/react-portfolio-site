import React from 'react'
import styled from 'styled-components';
import IMG from '../../assets/images/logo.png'

const LogoImg = styled.img`
  height: 6.5em;
  width: 6.5em;
`

const Logo = () => {
  return <LogoImg src={IMG} alt='logo' />

}

export default Logo