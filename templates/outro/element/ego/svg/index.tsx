import styled from 'styled-components'

type POS = {
  top: string
  left: string
}

type Props = {
  text: string
  textTop?: string
  pos: POS
}

export default function Svg(props: Props) {
  const text = props.text.split(' ').splice(1).join().replace(',', ' ')
  const text1 = props.text.split(' ')[0]

  const textTop = props.textTop
    ? props.textTop.split(' ').splice(1).join().replace(',', ' ')
    : null
  const textTop1 = props.textTop ? props.textTop.split(' ')[0] : null

  return (
    <Wrapper pos={props.pos}>
      <p>{textTop1}</p>
      <p>{textTop}</p>
      <svg viewBox="0 0 100 100" width="50%" height="50%" xmlSpace="preserve">
        <circle cx="50" cy="50" r="40" />
      </svg>
      <p>{text1}</p>
      <p>{text}</p>
    </Wrapper>
  )
}

const Wrapper = styled.div<{ pos: POS }>`
  height: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: ${(p) => p.pos.top};
  left: ${(p) => p.pos.left};

  p {
    text-align: center;
    font-size: 0.8vw;
    margin: 0;
  }
`
