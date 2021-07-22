import React from 'react'
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { pageTransition, pageVariants } from '../assets/animations/pageAnimations';

const Contact = () => {
  return (
    <Container
      variants={pageVariants}
      initial="initial"
      animate="in"
      exit="out"
      transition={pageTransition}
    >
      Contact Page
    </Container>
  )
}

const Container = styled(motion.article)`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
`

export default Contact