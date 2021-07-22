import React from 'react';
import styled from 'styled-components';

const About = () => {
  return (
    <Section>
      About Page
    </Section>
  )
}

const Section = styled.section`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  border: 1px solid blue;
`

export default About