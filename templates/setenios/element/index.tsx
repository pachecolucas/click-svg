import styled from 'styled-components'

type Pos = {
  top: number | string
  right: number | string
  left: number | string
  bottom: number | string
  transform: string
}

const POSITIONS: Pos[] = [
  { top: 0, right: 0, left: 'auto', bottom: 'auto', transform: 'scaleX(1)' },
  { top: 0, right: 0, left: 'auto', bottom: 'auto', transform: 'scaleX(1)' },
  {
    top: 'auto',
    right: 0,
    left: 'auto',
    bottom: 0,
    transform: 'scaleY(-1)',
  },
  {
    top: 'auto',
    right: 'auto',
    left: 0,
    bottom: 0,
    transform: 'scaleX(-1) scaleY(-1)',
  },
  { top: 0, right: 'auto', left: 0, bottom: 'auto', transform: 'scaleX(-1)' },
]

const COLORS = {
  water: 'blue',
  air: 'yellow',
  earth: 'green',
  fire: 'red',
}

type Props = {
  type: 'water' | 'air' | 'earth' | 'fire'
  position: 1 | 2 | 3 | 4
}

export default function Element(props: Props) {
  const POSITION: Pos = POSITIONS[props.position]
  const COLOR = COLORS[props.type]

  function handleClick() {
    alert('OI')
  }
  return (
    <Wrapper pos={POSITION} color={COLOR}>
      <svg viewBox="0 0 222.37 222.37" xmlSpace="preserve">
        <path
          onClick={handleClick}
          d="M.5 221.87V.5c59.08.13 114.6 23.2 156.38 64.98 41.79 41.79 64.85 97.31 64.98 156.38H.5z"
        />
      </svg>
    </Wrapper>
  )
}

const Wrapper = styled.div<{ pos: Pos; color: string }>`
  aspect-ratio: 1 / 1;
  position: absolute;
  width: 50%;
  top: ${(p) => p.pos.top};
  right: ${(p) => p.pos.right};
  left: ${(p) => p.pos.left};
  bottom: ${(p) => p.pos.bottom};
  /* border: 1px solid red; */
  transform: ${(p) => p.pos.transform};
  fill: ${(p) => p.color};
`
