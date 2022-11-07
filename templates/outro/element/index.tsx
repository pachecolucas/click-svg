import React, { useState } from 'react'
import styled from 'styled-components'
import Title from './title'

type Props = {
  children?: JSX.Element[] | JSX.Element
  type: 'title' | 'ego' | 'sou'
  title: string
  subTitle?: string
  color?: string
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
      color={props.color ? props.color : '#333'}
    >
      <Title
        type={props.type}
        title={props.title}
        subTitle={props.subTitle}
        color="light"
      />
      {props.children}
    </Wrapper>
  )
}

const Wrapper = styled.div<{ hover: boolean; color: string }>`
  position: relative;
  outline: white 1px solid;
  scale: ${(p) => (p.hover ? '1.05' : '1')};
  transition: scale 0.3s, filter 0.3s;
  z-index: ${(p) => (p.hover ? '5' : '0')};
  background-color: ${(p) => p.color};
  height: 100%;
  width: 100%;
`
