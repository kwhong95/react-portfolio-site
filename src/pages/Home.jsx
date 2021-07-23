import React, { useEffect, useState } from 'react';
import { pageTransition, HomePageVariants } from '../assets/animations/pageAnimations'
import styled from 'styled-components'
import { motion } from 'framer-motion';
import StorySection from '../sections/StorySection/StorySection';

const Container = styled(motion.div)`
  position: relative;
`

const FirstSection = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  justify-content: center;
  color: lightgray;
  margin-left: 2em;
  font-size: 40px;
`


const Home = () => {
  const [position, setPosition] = useState(0)

  function onScroll() {
    console.log(window.scrollY)
    setPosition(window.scrollY)
  }

  useEffect(() => {
    window.addEventListener('scroll', onScroll)

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <Container
      initial='initial'
      animate='in'
      exit='out'
      variants={HomePageVariants}
      transition={pageTransition}
    >
      <FirstSection>
        <h2>Hi,</h2>
        <h2>I'm Kyle</h2>
        <h2>UX Engineer</h2>
      </FirstSection>
      <StorySection position={position} />
    </Container>
  )
}

export default Home