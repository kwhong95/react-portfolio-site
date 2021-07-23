import React, { useEffect, useState } from 'react';
import { pageTransition, HomePageVariants } from '../assets/animations/pageAnimations'
import styled from 'styled-components'
import { motion } from 'framer-motion';

const Container = styled(motion.div)`
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const Section = styled.section`
  height: 100vh;
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
      <Section>
        section1
      </Section>
      <Section>
        section2
      </Section>
    </Container>
  )
}

export default Home