import React, { useRef } from 'react';
import { pageTransition, HomePageVariants } from '../assets/animations/pageAnimations'
import styled from 'styled-components'
import { motion } from 'framer-motion';
import StorySection from '../sections/StorySection/StorySection';
import ScrollDown from '../components/ScrollDown';
import Background from '../components/Background';

const Container = styled(motion.div)`
  position: relative;
`

const FirstSection = styled.section`
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  color: lightgray;
  margin-left: 2em;
  font-size: 40px;
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
      <FirstSection>
        <Background />
        <h2>Hi ,</h2>
        <h2>I'm Kyle ,</h2>
        <h2>UX Engineer</h2>
        <ScrollDown />
      </FirstSection>
      <StorySection />
    </Container>
  )
}

export default Home