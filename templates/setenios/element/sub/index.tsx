import styled from 'styled-components'
import { Body as EarthIcon } from '@styled-icons/ionicons-solid/'
import { Brain as AirIcon } from '@styled-icons/boxicons-solid'
import { Heart as WaterIcon } from '@styled-icons/entypo/'
import { Sun as FireIcon } from '@styled-icons/boxicons-solid/'
import { useState } from 'react'

type Pos = {
  top: string
  left: string
  rotate: string
}

const POSITIONS: Pos[] = [
  {
    top: '3.3%',
    left: '45.7%',
    rotate: '22.5deg',
  },
  {
    top: '23.8%',
    left: '66.3%',
    rotate: '67.5deg',
  },
  {
    top: '53.8%',
    left: '66.3%',
    rotate: '112.5deg',
  },
  {
    top: '74.5%',
    left: '45.7%',
    rotate: '157.5deg',
  },
  {
    top: '74.5%',
    left: '15.9%',
    rotate: '202.5deg',
  },
  {
    top: '53.8%',
    left: '-5.1%',
    rotate: '247.5deg',
  },
  {
    top: '23.8%',
    left: '-4.9%',
    rotate: '292.5deg',
  },
  {
    top: '3.3%',
    left: '15.7%',
    rotate: '337.5deg',
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
  position: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8
}

export default function SubElement(props: Props) {
  const POSITION: Pos = POSITIONS[props.position - 1]
  const COLOR = COLORS[props.type]

  const [hover, setHover] = useState(false)

  function handleClick() {
    console.log('Clicou')
  }

  function handleClickMouseEnter() {
    console.log('in...')
    setHover(true)
  }

  function handleClickMouseLeave() {
    console.log('out...')
    setHover(false)
  }

  return (
    <Wrapper pos={POSITION} hover={hover}>
      <Bg pos={POSITION} color={COLOR}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 166.19 93.15">
          <path
            onMouseEnter={handleClickMouseEnter}
            onMouseLeave={handleClickMouseLeave}
            onClick={handleClick}
            d="m134.45 93.15 31.74-76.62C139.85 5.62 111.61 0 83.1 0S26.34 5.62 0 16.53l31.74 76.62a134.29 134.29 0 0 1 102.71 0z"
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
  /* aspect-ratio: 1 / 1; */
  position: absolute;
  width: 39%;
  top: ${(p) => p.pos.top};
  left: ${(p) => p.pos.left};
  /* border: 1px solid red; */
  transition: scale 0.3s, filter 0.3s;
  scale: ${(p) => (p.hover ? '1.05' : '1')};
  z-index: ${(p) => (p.hover ? '9999' : '999')};
  filter: ${(p) =>
    p.hover
      ? 'drop-shadow(0 0 5vh rgb(0 0 0 / 0.7))'
      : 'drop-shadow(0 0 2vh rgb(0 0 0 / 0.4))'};
`

const Bg = styled.div<{ pos: Pos; color: string }>`
  fill: ${(p) => p.color};
  svg > path {
    cursor: pointer;
    pointer-events: all;
  }
  rotate: ${(p) => p.pos.rotate};
  /* border: 1px solid white; */
`

const Icon = styled.div<{ pos: Pos }>`
  /* border: 1px solid white; */
  pointer-events: none;
  width: 30%;
  aspect-ratio: 1 / 1;
  position: absolute;
  top: 20%;
  left: 35%;
`
