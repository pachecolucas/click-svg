import { useEffect, useState } from 'react'
import styled from 'styled-components'
import Element from './element'
import SubElement from './element/sub'
import SubSubElement from './element/sub/sub'
import Number from './element/number'

export default function Setenios(props: any) {
  const [row, setRow] = useState({
    layer: 1,
    area: 1,
  })
  console.log(row)

  function keyDown(e: KeyboardEvent) {
    switch (e.key) {
      case 'ArrowUp':
        if (row.layer !== 3) {
          setRow({ layer: row.layer + 1, area: row.area * 2 })
        }
        break
      case 'ArrowDown':
        if (row.layer !== 1) {
          setRow({ layer: row.layer - 1, area: Math.round(row.area / 2) })
        }
        break
      case 'ArrowLeft':
        if (row.layer === 3) {
          if (row.area === 1) {
            setRow({ ...row, area: 4 * (row.layer + 1) })
          } else {
            setRow({ ...row, area: row.area - 1 })
          }
        } else {
          if (row.area === 1) {
            setRow({ ...row, area: 4 * row.layer })
          } else {
            setRow({ ...row, area: row.area - 1 })
          }
        }

        break
      case 'ArrowRight':
        if (row.layer === 3) {
          if (row.area === 4 * (row.layer + 1)) {
            setRow({ ...row, area: 1 })
          } else {
            setRow({ ...row, area: row.area + 1 })
          }
        } else {
          if (row.area === 4 * row.layer) {
            setRow({ ...row, area: 1 })
          } else {
            setRow({ ...row, area: row.area + 1 })
          }
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
      <Numbers>
        <Number value={7 * 0} />
        <Number value={7 * 1} />
        <Number value={7 * 2} />
        <Number value={7 * 3} />
        <Number value={7 * 4} />
        <Number value={7 * 5} />
        <Number value={7 * 6} />
        <Number value={7 * 7} />
        <Number value={7 * 8} />
        <Number value={7 * 9} />
        <Number value={7 * 10} />
        <Number value={7 * 11} />
        <Number value={7 * 12} />
        <Number value={7 * 13} />
        <Number value={7 * 14} />
        <Number value={7 * 15} />
      </Numbers>
      <Layer3>
        <SubSubElement position={16} type="fire" row={row} layer={3} />
        <SubSubElement position={15} type="earth" row={row} layer={3} />
        <SubSubElement position={14} type="air" row={row} layer={3} />
        <SubSubElement position={13} type="water" row={row} layer={3} />
        <SubSubElement position={12} type="fire" row={row} layer={3} />
        <SubSubElement position={11} type="earth" row={row} layer={3} />
        <SubSubElement position={10} type="air" row={row} layer={3} />
        <SubSubElement position={9} type="water" row={row} layer={3} />
        <SubSubElement position={8} type="fire" row={row} layer={3} />
        <SubSubElement position={7} type="earth" row={row} layer={3} />
        <SubSubElement position={6} type="air" row={row} layer={3} />
        <SubSubElement position={5} type="water" row={row} layer={3} />
        <SubSubElement position={4} type="fire" row={row} layer={3} />
        <SubSubElement position={3} type="earth" row={row} layer={3} />
        <SubSubElement position={2} type="air" row={row} layer={3} />
        <SubSubElement position={1} type="water" row={row} layer={3} />
      </Layer3>
      <Layer2>
        <SubElement position={8} type="fire" row={row} layer={2} />
        <SubElement position={7} type="earth" row={row} layer={2} />
        <SubElement position={6} type="air" row={row} layer={2} />
        <SubElement position={5} type="water" row={row} layer={2} />
        <SubElement position={4} type="fire" row={row} layer={2} />
        <SubElement position={3} type="earth" row={row} layer={2} />
        <SubElement position={2} type="air" row={row} layer={2} />
        <SubElement position={1} type="water" row={row} layer={2} />
      </Layer2>
      <Layer1>
        <Element position={4} type="fire" row={row} layer={1} />
        <Element position={3} type="earth" row={row} layer={1} />
        <Element position={2} type="air" row={row} layer={1} />
        <Element position={1} type="water" row={row} layer={1} />
      </Layer1>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  aspect-ratio: 1 / 1;
  width: min(90vh, 90vw);
  position: relative;
  background-image: url('/grid.png');
  background-repeat: no-repeat;
  background-size: 100%;
`

const Layer1 = styled.div`
  /* outline: 1px solid red; */
  pointer-events: none;
  position: absolute;
  top: 50%;
  left: 50%;
  translate: -50% -50%;
  aspect-ratio: 1 / 1;
  width: 46.5%;
`

const Layer2 = styled.div`
  /* outline: 1px solid red; */
  pointer-events: none;
  position: absolute;
  top: 50%;
  left: 50%;
  translate: -50% -50%;
  aspect-ratio: 1 / 1;
  width: 74%;
`
const Layer3 = styled.div`
  pointer-events: none;
  position: absolute;
  top: 50%;
  left: 50%;
  translate: -50% -50%;
  aspect-ratio: 1 / 1;
  width: 90%;
`

const Numbers = styled.div`
  pointer-events: none;
  position: absolute;
  top: 50%;
  left: 50%;
  translate: -50% -50%;
  aspect-ratio: 1 / 1;
  width: 100%;
  border-radius: 50%;
`
