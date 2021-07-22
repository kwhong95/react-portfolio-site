import React from 'react'
import { pageTransition, HomePageVariants } from '../assets/animations/pageAnimations'
import styled from 'styled-components'
import { motion } from 'framer-motion';
import KineticTypography from '../assets/works/KineticTypography';

const Container = styled(motion.div)`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
`


const Home = () => {
  return (
    <Container
      initial='initial'
      animate='in'
      exit='out'
      variants={HomePageVariants}
      transition={pageTransition}
    >
      <KineticTypography />
    </Container>
  )
}

export default Home