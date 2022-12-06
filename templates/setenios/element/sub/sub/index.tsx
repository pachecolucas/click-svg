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
    top: '0.7%',
    left: '48.85%',
    rotate: '11.25deg',
  },
  {
    top: '7.6%',
    left: '65.3%',
    rotate: '33.75deg',
  },
  {
    top: '20%',
    left: '77.7%',
    rotate: '56.25deg',
  },
  {
    top: '35.75%',
    left: '84.1%',
    rotate: '78.75deg',
  },
  {
    top: '52.95%',
    left: '84.1%',
    rotate: '101.25deg',
  },
  {
    top: '69.2%',
    left: '77.4%',
    rotate: '123.75deg',
  },
  {
    top: '81.6%',
    left: '65%',
    rotate: '146.25deg',
  },
  {
    top: '88.3%',
    left: '48.85%',
    rotate: '168.75deg',
  },
  {
    top: '88.3%',
    left: '31.5%',
    rotate: '191.25deg',
  },
  {
    top: '81.6%',
    left: '15.3%',
    rotate: '213.75deg',
  },
  {
    top: '69.2%',
    left: '3%',
    rotate: '236.25deg',
  },
  {
    top: '53.35%',
    left: '-3.6%',
    rotate: '258.75deg',
  },
  {
    top: '35.75%',
    left: '-3.6%',
    rotate: '281.25deg',
  },
  {
    top: '19.5%',
    left: '2.9%',
    rotate: '303.75deg',
  },
  {
    top: '7.5%',
    left: '15.1%',
    rotate: '326.25deg',
  },
  {
    top: '0.7%',
    left: '31.4%',
    rotate: '348.75deg',
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
  position: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16
  active: boolean
}

export default function SubSubElement(props: Props) {
  const POSITION: Pos = POSITIONS[props.position - 1]
  const COLOR = COLORS[props.type]
  const [clicked, setClicked] = useState(false)

  const active = props.active || clicked

  const handleClick = () => {
    setClicked(!clicked)
  }

  return (
    <Wrapper pos={POSITION} active={active} onClick={handleClick}>
      <Bg pos={POSITION} color={COLOR}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 104.73 55.44">
          <path d="m94.73 55.44 10-50.28A268.454 268.454 0 0 0 52.36 0C34.78 0 17.24 1.73 0 5.16l10 50.28c27.97-5.56 56.76-5.56 84.73 0z" />
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

const Wrapper = styled.div<{ pos: Pos; active: boolean }>`
  /* aspect-ratio: 1 / 1; */
  position: absolute;
  width: 20%;
  top: ${(p) => p.pos.top};
  left: ${(p) => p.pos.left};
  /* border: 1px solid red; */
  transition: scale 0.3s, filter 0.3s;
  scale: ${(p) => (p.active ? '1.05' : '1')};
  z-index: ${(p) => (p.active ? '9999' : '999')};
  filter: ${(p) =>
    p.active ? 'drop-shadow(0 0 5vh rgb(0 0 0 / 0.7))' : 'grayscale(50%)'};
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
