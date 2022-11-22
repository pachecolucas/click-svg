import React, { useState } from 'react'
import styled from 'styled-components'
import Title from './title'

type Props = {
  children?: JSX.Element[] | JSX.Element
  type: 'title' | 'ego' | 'sou'
  title: string
  subTitle?: string
  color?: string
  hover?: boolean
}

export default function Elemente(props: Props) {
  return (
    <Wrapper hover={props.hover} color={props.color ? props.color : '#333'}>
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

const Wrapper = styled.div<{ hover: boolean | undefined; color: string }>`
  position: relative;
  outline: white 1px solid;
  transition: scale 0.3s, filter 0.3s;
  background-color: ${(p) => p.color};
  min-height: 100%;
  height: ${(p) => (p.hover ? 'fit-content' : 'inherit')};
  width: 100%;
`
