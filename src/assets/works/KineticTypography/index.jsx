import * as PIXI from 'pixi.js';
import { Stage, Text } from '@inlet/react-pixi'

const width = 1200;
const height = 1800;


const style = new PIXI.TextStyle({
  fontFamily: "sans-serif",
  fontSize: 80,
  fontWeight: "bold",
  fill: ["#fff"],
  stroke: "#eef1f5",
  strokeThickness: 3,
  letterSpacing: 5,
  wordWrap: true,
  wordWrapWidth: 2000,
});


const KineticTypography = () => {
  const word = "Hi,|I'm Kyle,|I love Interactive Web".split('|')

  return (
    <Stage width={width} height={height} options={{ autoDensity: true, backgroundColor: 0x1d1d1d }}>
      {word.map((word, idx) => (
        <Text
          key={idx}
          x={width/ 20}
          y={height / 2.5 + idx * 100}
          style={style}
          text={word}
        />
      ))}
    </Stage>
  )
}

export default KineticTypography