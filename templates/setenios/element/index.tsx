import styled from 'styled-components'
import { Body as EarthIcon } from '@styled-icons/ionicons-solid/'
import { Brain as AirIcon } from '@styled-icons/boxicons-solid'
import { Heart as WaterIcon } from '@styled-icons/entypo/'
import { Sun as FireIcon } from '@styled-icons/boxicons-solid/'

type Pos = {
  top: number | string
  right: number | string
  left: number | string
  bottom: number | string
  transform: string
  horFlip: boolean
  verFlip: boolean
}

const POSITIONS: Pos[] = [
  {
    top: 0,
    right: 0,
    left: 'auto',
    bottom: 'auto',
    transform: 'scaleX(1)',
    horFlip: false,
    verFlip: false,
  },
  {
    top: 0,
    right: 0,
    left: 'auto',
    bottom: 'auto',
    transform: 'scaleX(1)',
    horFlip: false,
    verFlip: false,
  },
  {
    top: 'auto',
    right: 0,
    left: 'auto',
    bottom: 0,
    transform: 'scaleY(-1)',
    horFlip: false,
    verFlip: true,
  },
  {
    top: 'auto',
    right: 'auto',
    left: 0,
    bottom: 0,
    transform: 'scaleX(-1) scaleY(-1)',
    horFlip: true,
    verFlip: true,
  },
  {
    top: 0,
    right: 'auto',
    left: 0,
    bottom: 'auto',
    transform: 'scaleX(-1)',
    horFlip: true,
    verFlip: false,
  },
]

const COLORS = {
  water: 'var(--color-water)',
  air: 'var(--color-air)',
  earth: 'var(--color-earth)',
  fire: 'var(--color-fire)',
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
    <Wrapper pos={POSITION}>
      <Bg color={COLOR}>
        <svg viewBox="0 0 222.37 222.37" xmlSpace="preserve">
          <path
            onClick={handleClick}
            d="M.5 221.87V.5c59.08.13 114.6 23.2 156.38 64.98 41.79 41.79 64.85 97.31 64.98 156.38H.5z"
          />
        </svg>
      </Bg>
      <Icon pos={POSITION}>
        {props.type === 'air' && <AirIcon />}
        {props.type === 'earth' && <EarthIcon />}
        {props.type === 'water' && <WaterIcon />}
        {props.type === 'fire' && <FireIcon />}
      </Icon>
    </Wrapper>
  )
}

const Wrapper = styled.div<{ pos: Pos }>`
  aspect-ratio: 1 / 1;
  position: absolute;
  width: 50%;
  top: ${(p) => p.pos.top};
  right: ${(p) => p.pos.right};
  left: ${(p) => p.pos.left};
  bottom: ${(p) => p.pos.bottom};
  /* border: 1px solid red; */
  transform: ${(p) => (p.pos.horFlip ? 'scaleX(-1)' : '')}
    ${(p) => (p.pos.verFlip ? 'scaleY(-1)' : '')};
`

const Bg = styled.div<{ color: string }>`
  fill: ${(p) => p.color};
`

const Icon = styled.div<{ pos: Pos }>`
  /* border: 1px solid white; */
  pointer-events: none;
  width: 20vh;
  aspect-ratio: 1 / 1;
  position: absolute;
  top: 40%;
  left: 20%;
  transform: ${(p) => (p.pos.horFlip ? 'scaleX(-1)' : '')}
    ${(p) => (p.pos.verFlip ? 'scaleY(-1)' : '')};
`
