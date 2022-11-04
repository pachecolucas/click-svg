import React, { useState } from 'react'
import styled from 'styled-components'
import Title from './title'

type Props = {
  type: 'title' | 'ego' | 'sou'
  title: string
  subTitle?: string
}

export default function Element(props: Props) {
  const [hover, setHover] = useState<boolean>(false)

  function handleClickMouseEnter() {
    setHover(true)
  }
  function handleClickMouseLeave() {
    setHover(false)
  }
  return (
    <Wrapper
      hover={hover}
      onMouseEnter={handleClickMouseEnter}
      onMouseLeave={handleClickMouseLeave}
    >
      <Bg color="blue">
        <Title
          type={props.type}
          title={props.title}
          subTitle={props.subTitle}
        />
      </Bg>
    </Wrapper>
  )
}

const Wrapper = styled.div<{ hover: boolean }>`
  outline: white 1px solid;
  scale: ${(p) => (p.hover ? '1.05' : '1')};
  transition: scale 0.3s, filter 0.3s;
  z-index: ${(p) => (p.hover ? '5' : '0')};
`
const Bg = styled.div<{ color: string }>`
  background-color: ${(p) => p.color};
  height: 100%;
  width: 100%;
`
