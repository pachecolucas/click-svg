import styled from 'styled-components'
import Svg from './svg'

type Props = {
  color?: string
  text: string
  text2?: string
  position: 1 | 2 | 3 | 4
}
type POS = {
  top: string
  left: string
}
const POSITIONS: POS[] = [
  {
    top: '5%',
    left: '39%',
  },
]
const POSITIONS2: POS[] = [
  {
    top: '50%',
    left: '39%',
  },
]

export default function Ego(props: Props) {
  return (
    <Wrapper color={props.color}>
      <Svg text={props.text} pos={POSITIONS[props.position - 1]} />
      <Svg text={props.text2} pos={POSITIONS2[props.position - 1]} />
    </Wrapper>
  )
}

const Wrapper = styled.div<{ color?: string }>`
  height: 60%;
  position: relative;

  color: ${(p) => (p.color ? p.color : 'white')};
  fill: ${(p) => (p.color ? p.color : 'white')};
`
