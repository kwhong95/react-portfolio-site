import React, { useCallback, useEffect, useRef, useState } from 'react';
import {
  Container,
  Content,
  Stage,
  IntroText,
  LeftMask,
  RightMask,
  BgImage, EndingText, TableRow, TableCell
} from './elements';


const StorySection = () => {
  const containerRef = useRef(null)
  const [percent, setPercent] = useState(0)
  const [maskWidth, setMaskWidth] = useState(50)
  const [active, setActive] = useState(false)
  const [endActive, setEndActive] = useState(false)

  const setProperty = useCallback(() => {
    const container = containerRef.current
    let scrollHeight = container.clientHeight
    let sectionOffsetTop = container.offsetTop
    let realScrollHeight = scrollHeight - sectionOffsetTop
    let winScrollTop = window.scrollY
    let sectionScrollTop = winScrollTop - sectionOffsetTop

    let scrollPercent = sectionScrollTop / realScrollHeight

    setPercent(scrollPercent * 100)

  }, [containerRef])

  const motionRender = useCallback( () => {
    let maskStartValue = 50
    let maskEndValue = 0


    setMaskWidth(Math.max(
      maskEndValue, maskStartValue -
      ((percent / 30) * maskStartValue)
    ))

    if (percent > 0.3) {
      setActive(true)
    } else {
      setActive(false)
    }

    if (percent >= 80) {
      setEndActive(true)
    } else {
      setEndActive(false)
    }
  }, [ percent ])

  useEffect(() => {

    const changeOverlap = () => {
      window.addEventListener('resize', changeOverlap, false)
      setProperty()
      motionRender()
    }

    window.addEventListener('scroll', changeOverlap)

    return () => {
      window.removeEventListener('resize', changeOverlap, false)
      window.removeEventListener('scroll', changeOverlap);
    }
  }, [ motionRender, containerRef, setProperty ])

  return (
    <Container ref={containerRef}>
      <Content>
        <Stage>
          <IntroText active={active}>
            <h2>Hello!</h2>
          </IntroText>
          <LeftMask
            style={{ width: `${maskWidth}%` }}
          />
          <RightMask
            style={{ width: `${maskWidth}%` }}
          />
          <BgImage />
          <EndingText active={endActive}>
            <TableRow>
              <TableCell>
                <p>Thank you!</p>
              </TableCell>
            </TableRow>
          </EndingText>
        </Stage>
      </Content>
    </Container>
  )
}

export default StorySection