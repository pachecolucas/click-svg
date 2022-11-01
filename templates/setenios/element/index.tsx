import styled from 'styled-components'
import { Body as EarthIcon } from '@styled-icons/ionicons-solid/'
import { Brain as AirIcon } from '@styled-icons/boxicons-solid'
import { Heart as WaterIcon } from '@styled-icons/entypo/'
import { Sun as FireIcon } from '@styled-icons/boxicons-solid/'
import { useState } from 'react'

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
    top: '0.1%',
    right: '0.1%',
    left: 'auto',
    bottom: 'auto',
    transform: 'scaleX(1)',
    horFlip: false,
    verFlip: false,
  },
  {
    top: 'auto',
    right: '0.1%',
    left: 'auto',
    bottom: '0.1%',
    transform: 'scaleY(-1)',
    horFlip: false,
    verFlip: true,
  },
  {
    top: 'auto',
    right: 'auto',
    left: '0.1%',
    bottom: '0.1%',
    transform: 'scaleX(-1) scaleY(-1)',
    horFlip: true,
    verFlip: true,
  },
  {
    top: '0.1%',
    right: 'auto',
    left: '0.1%',
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
  const POSITION: Pos = POSITIONS[props.position - 1]
  const COLOR = COLORS[props.type]

  const [hover, setHover] = useState(false)

  function handleClick() {
    console.log('Clicou')
  }

  function handleClickMouseEnter() {
    setHover(true)
  }

  function handleClickMouseLeave() {
    setHover(false)
  }

  return (
    <Wrapper pos={POSITION} hover={hover}>
      <Bg color={COLOR}>
        <svg viewBox="0 0 222.37 222.37" xmlSpace="preserve">
          <path
            onMouseEnter={handleClickMouseEnter}
            onMouseLeave={handleClickMouseLeave}
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

const Wrapper = styled.div<{ pos: Pos; hover: boolean }>`
  aspect-ratio: 1 / 1;
  position: absolute;
  width: 50%;
  top: ${(p) => p.pos.top};
  right: ${(p) => p.pos.right};
  left: ${(p) => p.pos.left};
  bottom: ${(p) => p.pos.bottom};
  /* border: 1px solid red; */
  transform: ${(p) => {
    if (p.pos.horFlip && p.pos.verFlip) return 'scaleX(-1) scaleY(-1)'
    if (p.pos.horFlip) return 'scaleX(-1)'
    if (p.pos.verFlip) return ' scaleY(-1)'
  }};
  transition: scale 0.3s, filter 0.3s;
  scale: ${(p) => (p.hover ? '1.05' : '1')};
  z-index: ${(p) => (p.hover ? '1' : '0')};
  /* filter: ${(p) =>
    p.hover ? 'drop-shadow(0 0 5vh rgb(0 0 0 / 0.7))' : 'none'}; */
`

const Bg = styled.div<{ color: string }>`
  fill: ${(p) => p.color};
  svg > path {
    cursor: pointer;
  }
`

const Icon = styled.div<{ pos: Pos }>`
  /* border: 1px solid white; */
  pointer-events: none;
  width: 50%;
  aspect-ratio: 1 / 1;
  position: absolute;
  top: 35%;
  left: 20%;
  transform: ${(p) => {
    if (p.pos.horFlip && p.pos.verFlip) return 'scaleX(-1) scaleY(-1)'
    if (p.pos.horFlip) return 'scaleX(-1)'
    if (p.pos.verFlip) return ' scaleY(-1)'
  }};
`
