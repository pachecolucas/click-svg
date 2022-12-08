import { useEffect, useState } from 'react'
import styled from 'styled-components'
import Element from './element'

export default function Pagina() {
  const [row, setRow] = useState(0)
  const row1 = row === 1
  const row2 = row === 2
  const row3 = row === 3
  const row4 = row === 4
  const row5 = row === 5

  const [column, setColumn] = useState(0)
  const column1 = column === 1
  const column2 = column === 2
  const column3 = column === 3
  const column4 = column === 4
  const column5 = column === 5

  function keyDown(e: KeyboardEvent) {
    switch (e.key) {
      case 'ArrowUp':
        if (row !== 0) {
          setRow(row - 1)
          setColumn(0)
        }
        break
      case 'ArrowDown':
        if (row !== 5) {
          setRow(row + 1)
          setColumn(0)
        }
        break
      case 'ArrowLeft':
        if (column !== 0) {
          setColumn(column - 1)
          setRow(0)
        }
        break
      case 'ArrowRight':
        if (column !== 5) {
          setColumn(column + 1)
          setRow(0)
        }
        break
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', keyDown)
    return () => window.removeEventListener('keydown', keyDown)
  })

  return (
    <Wrapper>
      <Circle row={row} column={column}>
        <Layer row={row} column={column}>
          <Element active={row1 || column1} img={1} type="circle" />
          <Element active={row1 || column2} type="circle" img={2} />
          <Element active={row1 || column3} type="circle" img={3} />
          <Element active={row1 || column4} type="circle" img={4} />
          <Element active={row1 || column5} type="circle" img={5} />
          <Element active={row2 || column1} type="dot" subType="sou" img={1} />
          <Element active={row2 || column2} type="dot" subType="sou" img={2} />
          <Element active={row2 || column3} type="dot" subType="sou" img={3} />
          <Element active={row2 || column4} type="dot" subType="sou" img={4} />
          <Element active={row2 || column5} type="dot" subType="sou" img={5} />
          <Element active={row3 || column1} type="2dot" img={1} />
          <Element active={row3 || column2} type="diagonalL" img={2} />
          <Element active={row3 || column3} type="line" img={3} />
          <Element active={row3 || column4} type="diagonalR" img={4} />
          <Element active={row3 || column5} type="dot" subType="ego" img={5} />
          <Element active={row4 || column1} type="3dot" img={1} />
          <Element active={row4 || column2} type="3diagonalL" img={2} />
          <Element active={row4 || column3} type="triangle" img={3} />
          <Element active={row4 || column4} type="3diagonalR" img={4} />
          <Element
            active={row4 || column5}
            type="dot"
            subType="simple"
            img={5}
          />
          <Element active={row5 || column1} type="4dot" img={1} />
          <Element active={row5 || column2} type="4diagonalL" img={2} />
          <Element active={row5 || column3} type="square" img={3} />
          <Element active={row5 || column4} type="4diagonalR" img={4} />
          <Element active={row5 || column5} type="dot" subType="last" img={5} />
        </Layer>
      </Circle>
    </Wrapper>
  )
}
const BREAKPOINT = '414px'

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`
const Circle = styled.div<{ row: number; column: number }>`
  aspect-ratio: 1 / 1;
  width: min(80vh, 80vw);
  position: relative;
  ${(p) => (p.column || p.row > 0 ? null : 'outline: white 2px solid;')}
  border-radius: 50%;
  height: ${(p) => (p.row === 6 ? 'fit-content' : null)};
  @media (max-device-width: ${BREAKPOINT}) {
    width: 95vw;
  }
`

const Layer = styled.div<{ row: number; column: number }>`
  transition: all 0.3s;
  position: absolute;
  top: 50%;
  left: 50%;
  translate: -50% -50%;
  aspect-ratio: 1 / 1;
  height: ${(p) => (p.row > 0 ? '100%' : 'inherit')};
  width: ${(p) =>
    p.column || p.row > 0 ? (p.row > 0 ? '100%' : '80%') : '70.4%'};
  display: grid;
  grid-template-columns: 20% 20% 20% 20% 20%;
  grid-template-rows: ${(p) =>
    p.row === 6 || p.column > 0
      ? 'min-content min-content min-content min-content min-content'
      : '20% 20% 20% 20% 20%'};

  @media (max-device-width: ${BREAKPOINT}) {
    width: ${(p) => (p.row || p.column > 0 ? '100%' : '70.4%')};
  }
`
