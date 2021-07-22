import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

const Wrap = styled.div``

const KineticTypography = () => {
  const canvasRef = useRef(null)
  const [canvasTag, setCanvasTag] = useState([])

  console.log(`canvasTag :`, canvasTag)

  useEffect(() => {
    const canvas = canvasRef.current
    canvas.width = window.innerWidth / 2
    canvas.height = window.innerHeight / 2

    setCanvasTag(canvas)
  }, [])

  return (
    <Wrap>
      <canvas ref={canvasRef} />
    </Wrap>
  )
}

export default KineticTypography