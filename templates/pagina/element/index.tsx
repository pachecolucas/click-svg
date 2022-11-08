import React, { useState } from 'react'
import styled from 'styled-components'
import Elemente from 'templates/outro/element'
import Sou from 'templates/outro/element/sou'

type Props = {
  type:
    | 'circle'
    | 'dot'
    | '2dot'
    | '3dot'
    | '4dot'
    | 'triangle'
    | 'square'
    | 'line'
    | 'diagonalR'
    | '3diagonalR'
    | '4diagonalR'
    | 'diagonalL'
    | '3diagonalL'
    | '4diagonalL'
}

export default function Element(props: Props) {
  const [hover, setHover] = useState<boolean>(false)

  function getContent(type: string) {
    switch (type) {
      case 'circle':
        return (
          <svg
            viewBox="0 0 100 100"
            width="100%"
            height="100%"
            xmlSpace="preserve"
          >
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="none"
              stroke="white"
              strokeWidth="4"
            />
          </svg>
        )
      case 'dot':
        return (
          <>
            {hover ? (
              <Elemente type="sou" title="CORPO">
                <Sou title="sou o que tenho" />
              </Elemente>
            ) : (
              <svg
                viewBox="0 0 100 100"
                width="20%"
                height="20%"
                xmlSpace="preserve"
              >
                <circle cx="50" cy="50" r="40" />
              </svg>
            )}
          </>
        )
      case '2dot':
        return (
          <>
            <svg
              viewBox="0 0 100 100"
              width="20%"
              height="20%"
              xmlSpace="preserve"
            >
              <circle cx="50" cy="50" r="40" />
            </svg>
            <svg
              viewBox="0 0 100 100"
              width="20%"
              height="20%"
              xmlSpace="preserve"
            >
              <circle cx="50" cy="50" r="40" />
            </svg>
          </>
        )
      case '3dot':
        return (
          <>
            <svg
              viewBox="0 0 100 100"
              width="20%"
              height="20%"
              xmlSpace="preserve"
            >
              <circle cx="50" cy="50" r="40" />
            </svg>
            <svg
              viewBox="0 0 100 100"
              width="20%"
              height="20%"
              xmlSpace="preserve"
            >
              <circle cx="50" cy="50" r="40" />
            </svg>
            <svg
              viewBox="0 0 100 100"
              width="20%"
              height="20%"
              xmlSpace="preserve"
            >
              <circle cx="50" cy="50" r="40" />
            </svg>
          </>
        )
      case '4dot':
        return (
          <>
            <svg
              viewBox="0 0 100 100"
              width="20%"
              height="20%"
              xmlSpace="preserve"
            >
              <circle cx="50" cy="50" r="40" />
            </svg>
            <svg
              viewBox="0 0 100 100"
              width="20%"
              height="20%"
              xmlSpace="preserve"
            >
              <circle cx="50" cy="50" r="40" />
            </svg>
            <svg
              viewBox="0 0 100 100"
              width="20%"
              height="20%"
              xmlSpace="preserve"
            >
              <circle cx="50" cy="50" r="40" />
            </svg>
            <svg
              viewBox="0 0 100 100"
              width="20%"
              height="20%"
              xmlSpace="preserve"
            >
              <circle cx="50" cy="50" r="40" />
            </svg>
          </>
        )
      case 'line':
        return (
          <svg
            viewBox="0 0 100 100"
            width="100%"
            height="100%"
            xmlSpace="preserve"
          >
            <circle cx="20" cy="50" r="8" />
            <line
              x1="20"
              y1="50"
              x2="80"
              y2="50"
              stroke="white"
              strokeWidth="4"
            />
            <circle cx="80" cy="50" r="8" />
          </svg>
        )
      case 'diagonalL':
        return (
          <svg
            viewBox="0 0 100 100"
            width="50%"
            height="50%"
            xmlSpace="preserve"
          >
            <circle cx="15" cy="15" r="15" />
            <line
              x1="15"
              y1="15"
              x2="85"
              y2="85"
              stroke="white"
              strokeWidth="8"
            />
            <circle cx="85" cy="85" r="15" />
          </svg>
        )
      case 'diagonalR':
        return (
          <svg
            viewBox="0 0 100 100"
            width="50%"
            height="50%"
            xmlSpace="preserve"
          >
            <circle cx="15" cy="85" r="15" />
            <line
              x1="85"
              y1="15"
              x2="15"
              y2="85"
              stroke="white"
              strokeWidth="8"
            />
            <circle cx="85" cy="15" r="15" />
          </svg>
        )
      case '3diagonalL':
        return (
          <svg
            viewBox="0 0 100 100"
            width="100%"
            height="100%"
            xmlSpace="preserve"
          >
            <circle cx="25" cy="25" r="7" />
            <line
              x1="25"
              y1="25"
              x2="75"
              y2="75"
              stroke="white"
              strokeWidth="4"
            />
            <circle cx="50" cy="50" r="7" />
            <circle cx="75" cy="75" r="7" />
          </svg>
        )
      case '3diagonalR':
        return (
          <svg
            viewBox="0 0 100 100"
            width="100%"
            height="100%"
            xmlSpace="preserve"
          >
            <circle cx="25" cy="75" r="7" />
            <line
              x1="75"
              y1="25"
              x2="25"
              y2="75"
              stroke="white"
              strokeWidth="4"
            />
            <circle cx="50" cy="50" r="7" />
            <circle cx="75" cy="25" r="7" />
          </svg>
        )
      case '4diagonalL':
        return (
          <svg
            viewBox="0 0 100 100"
            width="100%"
            height="100%"
            xmlSpace="preserve"
          >
            <circle cx="25" cy="25" r="7" />
            <line
              x1="25"
              y1="25"
              x2="75"
              y2="75"
              stroke="white"
              strokeWidth="4"
            />
            <circle cx="42" cy="42" r="7" />
            <circle cx="58" cy="58" r="7" />
            <circle cx="75" cy="75" r="7" />
          </svg>
        )
      case '4diagonalR':
        return (
          <svg
            viewBox="0 0 100 100"
            width="100%"
            height="100%"
            xmlSpace="preserve"
          >
            <circle cx="75" cy="25" r="7" />
            <line
              x1="75"
              y1="25"
              x2="25"
              y2="75"
              stroke="white"
              strokeWidth="4"
            />
            <circle cx="58" cy="42" r="7" />
            <circle cx="42" cy="58" r="7" />
            <circle cx="25" cy="75" r="7" />
          </svg>
        )
      case 'square':
        return (
          <svg
            viewBox="0 0 100 100"
            width="100%"
            height="100%"
            xmlSpace="preserve"
          >
            <circle cx="25" cy="25" r="7" />
            <circle cx="25" cy="75" r="7" />
            <circle cx="75" cy="25" r="7" />
            <circle cx="75" cy="75" r="7" />
            <line
              x1="25"
              y1="25"
              x2="25"
              y2="75"
              stroke="white"
              strokeWidth="4"
            />
            <line
              x1="75"
              y1="25"
              x2="75"
              y2="75"
              stroke="white"
              strokeWidth="4"
            />
            <line
              x1="25"
              y1="25"
              x2="75"
              y2="25"
              stroke="white"
              strokeWidth="4"
            />
            <line
              x1="25"
              y1="75"
              x2="75"
              y2="75"
              stroke="white"
              strokeWidth="4"
            />
          </svg>
        )
      case 'triangle':
        return (
          <svg
            viewBox="0 0 100 100"
            width="100%"
            height="100%"
            xmlSpace="preserve"
          >
            <circle cx="50" cy="25" r="7" />
            <circle cx="75" cy="75" r="7" />
            <circle cx="25" cy="75" r="7" />
            <line
              x1="25"
              y1="75"
              x2="75"
              y2="75"
              stroke="white"
              strokeWidth="4"
            />
            <line
              x1="75"
              y1="75"
              x2="50"
              y2="25"
              stroke="white"
              strokeWidth="4"
            />
            <line
              x1="25"
              y1="75"
              x2="50"
              y2="25"
              stroke="white"
              strokeWidth="4"
            />
          </svg>
        )
      default:
        null
        break
    }
  }

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
      <Bg color="white">{getContent(props.type)}</Bg>
    </Wrapper>
  )
}

const Wrapper = styled.div<{ hover: boolean }>`
  outline: white 1px solid;
  scale: ${(p) => (p.hover ? '1.05 1.5' : '1')};
  z-index: ${(p) => (p.hover ? '1' : '0')};
  transition: scale 0.3s, z-index 0.3s;
  background-color: black;
`
const Bg = styled.div<{ color: string }>`
  fill: ${(p) => p.color};
  svg > path {
    cursor: pointer;
    pointer-events: all;
  }
  // center
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`
