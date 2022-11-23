import Ego from './ego'
import { Props } from '.'
import Sou from './sou'
import styled from 'styled-components'
import Simple from './simple'
import Last from './last'
import Start from './start'

export default function getContent(type: string, front: boolean, props: Props) {
  switch (type) {
    case 'circle':
      return (
        <>
          {front ? (
            <Start img={props.img} />
          ) : (
            <svg
              viewBox="0 0 100 100"
              width="100%"
              height="100%"
              xmlSpace="preserve"
            >
              <circle
                cx="50"
                cy="50"
                r="30"
                fill="none"
                stroke="white"
                strokeWidth="4"
              />
            </svg>
          )}
        </>
      )
    case 'dot':
      return (
        <>
          {front ? (
            <>
              {props.subType === 'sou' ? <Sou img={props.img} /> : null}
              {props.subType === 'ego' ? <Ego img={props.img} /> : null}
              {props.subType === 'simple' ? <Simple img={props.img} /> : null}
              {props.subType === 'last' ? <Last img={props.img} /> : null}
            </>
          ) : (
            <SvgContainer>
              <svg
                viewBox="0 0 100 100"
                width="20%"
                height="20%"
                xmlSpace="preserve"
              >
                <circle cx="50" cy="50" r="40" />
              </svg>
            </SvgContainer>
          )}
        </>
      )
    case '2dot':
      return (
        <>
          {front ? (
            <Ego img={props.img} />
          ) : (
            <SvgContainer>
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
            </SvgContainer>
          )}
        </>
      )
    case '3dot':
      return (
        <>
          {front ? (
            <Simple img={props.img} />
          ) : (
            <SvgContainer>
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
            </SvgContainer>
          )}
        </>
      )
    case '4dot':
      return (
        <>
          {front ? (
            <Last img={props.img} />
          ) : (
            <SvgContainer>
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
            </SvgContainer>
          )}
        </>
      )
    case 'line':
      return (
        <>
          {front ? (
            <Ego img={props.img} />
          ) : (
            <SvgContainer>
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
            </SvgContainer>
          )}
        </>
      )
    case 'diagonalL':
      return (
        <>
          {front ? (
            <Ego img={props.img} />
          ) : (
            <SvgContainer>
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
            </SvgContainer>
          )}
        </>
      )
    case 'diagonalR':
      return (
        <>
          {front ? (
            <Ego img={props.img} />
          ) : (
            <SvgContainer>
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
            </SvgContainer>
          )}
        </>
      )
    case '3diagonalL':
      return (
        <>
          {front ? (
            <Simple img={props.img} />
          ) : (
            <SvgContainer>
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
            </SvgContainer>
          )}
        </>
      )
    case '3diagonalR':
      return (
        <>
          {front ? (
            <Simple img={props.img} />
          ) : (
            <SvgContainer>
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
            </SvgContainer>
          )}
        </>
      )
    case '4diagonalL':
      return (
        <>
          {front ? (
            <Last img={props.img} />
          ) : (
            <SvgContainer>
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
            </SvgContainer>
          )}
        </>
      )
    case '4diagonalR':
      return (
        <>
          {front ? (
            <Last img={props.img} />
          ) : (
            <SvgContainer>
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
            </SvgContainer>
          )}
        </>
      )
    case 'square':
      return (
        <>
          {front ? (
            <Last img={props.img} />
          ) : (
            <SvgContainer>
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
            </SvgContainer>
          )}
        </>
      )
    case 'triangle':
      return (
        <>
          {front ? (
            <Simple img={props.img} />
          ) : (
            <SvgContainer>
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
            </SvgContainer>
          )}
        </>
      )
    default:
      null
      break
  }
}
const SvgContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`
