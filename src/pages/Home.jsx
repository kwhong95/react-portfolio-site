import React from 'react';
import styled from 'styled-components';

const Home = () => {
  return (
    <>
      <Section>
        section1
      </Section>
      <Section>
        section2
      </Section>
      <Section>
        section3
      </Section>
    </>
  )
}

const Section = styled.section`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  border: 1px solid blue;
`

export default Home