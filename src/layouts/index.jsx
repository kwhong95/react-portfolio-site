import React from "react"
import Navbar from './Navbar';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
`

const Layouts = ({ children }) => {
  return (
    <Container>
      <Navbar />
      {children}
    </Container>
  )
}

export default Layouts