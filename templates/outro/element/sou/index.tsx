import styled from 'styled-components'

type Props = {
  color?: string
  title: string
}

export default function Sou(props: Props) {
  return (
    <Wrapper color={props.color}>
      <svg viewBox="0 0 100 100" width="30%" height="30%" xmlSpace="preserve">
        <circle cx="50" cy="50" r="40" />
      </svg>
      <p style={{ textAlign: 'center', margin: '0' }}>{props.title}</p>
    </Wrapper>
  )
}

const Wrapper = styled.div<{ color?: string }>`
  height: 100%;
  padding-top: 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${(p) => (p.color ? p.color : 'white')};
  fill: ${(p) => (p.color ? p.color : 'white')};
`
