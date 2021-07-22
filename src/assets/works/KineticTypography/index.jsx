import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

const Wrap = styled.div``

const KineticTypography = () => {
  const canvasRef = useRef(null)
  const [canvasTag, setCanvasTag] = useState([])

  console.log(`canvasTag :`, canvasTag)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')

    const setText = (str, density, stageWidth, stageHeight) => {
      canvas.width = stageWidth
      canvas.height = stageHeight

      const myText = str
      const fontWidth = 700
      const fontSize = 800
      const fontName = 'sans-serif'

      ctx.clearRect(0, 0, stageWidth, stageHeight)
      ctx.font = `${fontWidth} ${fontSize}px ${fontName}`
      ctx.fillStyle = `rgba(0, 0, 0, 0.3)`
      ctx.textBaseline = `middle`

      const fontPos = ctx.measureText(myText)
      ctx.fillText(
        myText,
        (stageWidth - fontPos.width) / 2,
        fontPos.actualBoundingBoxAscent +
        fontPos.actualBoundingBoxDescent +
        ((stageHeight - fontSize) / 2)
      )

      return dotPos(density, stageWidth, stageHeight)
    }

    const dotPos = (density, stageWidth, stageHeight) => {
      const imageData = ctx.getImageData(
        0, 0,
        stageWidth, stageHeight
      ).data

      const particles = []
      let i = 0
      let width = 0
      let pixel

      for (let height = 0; height < stageHeight; height += density) {
        ++i
        const slide = (i % 2) === 0
        width = 0
        if (slide === 1) {
          width += 6
        }

        for (width; width < stageWidth; width += density) {
          pixel = imageData[((width + (height * stageWidth)) * 4) -1]
          if (pixel !== 0 &&
            width > 0 &&
            width < stageWidth &&
            height > 0 &&
            height < stageHeight) {
              particles.push({
                x: width,
                y: height,
              })
          }
        }
      }
      return particles
    }

    setCanvasTag(canvas)
  }, [])

  return (
    <Wrap>
      <canvas ref={canvasRef} />
    </Wrap>
  )
}

export default KineticTypography