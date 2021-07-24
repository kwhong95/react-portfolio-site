import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Cursor, Wrap } from './elements';

const Background = () => {
  const bgRef = useRef(null)
  const [cursorX, setCursorX] = useState()
  const [cursorY, setCursorY] = useState()

  const handleCursor = useCallback( (e) => {
    setCursorX(e.pageX)
    setCursorY(e.pageY)
  }, [])

  useEffect(() => {
    window.addEventListener('mousemove', handleCursor)

    return () => { window.removeEventListener('mouseover', handleCursor)}

  }, [ handleCursor ])

  return (
    <>
      <Cursor cursorX={cursorX} cursorY={cursorY} />
      <Wrap ref={bgRef} />
    </>
  )
}

export default Background