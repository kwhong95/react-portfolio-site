import React from 'react'
import styled from 'styled-components'
import { VscGithub } from 'react-icons/vsc'
import { FaInstagram } from 'react-icons/fa'

const Container = styled.article`
  display: flex;
  
  a {
    color: lightgray;
    padding: .3em;
    font-size: 18px;
  }
`

const BottomNav = () => {
  return (
    <Container>
      <a href='https://github.com/kwhong95'>
        <VscGithub />
      </a>
      <a href='https://www.instagram.com/k.w_hong_922/'>
        <FaInstagram />
      </a>
    </Container>
  )
}

export default BottomNav