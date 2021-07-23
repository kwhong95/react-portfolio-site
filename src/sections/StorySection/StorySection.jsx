import React from 'react'
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
  return (
    <Container>
      <Content>
        <Stage>
          <IntroText>
            <h2>Hello!</h2>
          </IntroText>
          <LeftMask />
          <RightMask />
          <BgImage />
          <EndingText>
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