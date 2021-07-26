import React, { useCallback, useEffect, useRef, useState } from 'react';
import { BackgroundImg, Cursor } from './elements';

const Background = () => {
  const [cursorX, setCursorX] = useState()
  const [cursorY, setCursorY] = useState()

  const handleCursor = useCallback((e) => {
    setCursorX(e.pageX - 100)
    setCursorY(e.pageY)
  }, [])

  useEffect(() => {
    window.addEventListener('mousemove', handleCursor)

    return () => { window.removeEventListener('mousemove', handleCursor)}
  }, [ handleCursor ])

  return (
    <>
      <Cursor
        cursorX={cursorX}
        cursorY={cursorY}
      />
      <BackgroundImg
        cursorX={cursorX}
        cursorY={cursorY}
      />
    </>
  )
}

export default Background