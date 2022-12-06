import { useEffect, useState } from 'react'
import styled from 'styled-components'
import Element from './element'
import SubElement from './element/sub'
import SubSubElement from './element/sub/sub'
import Number from './element/number'

export default function Setenios(props: any) {
  const [layer, setLayer] = useState(1)
  const layer1 = layer === 1
  const layer2 = layer === 2
  const layer3 = layer === 3

  const [quadrant, setQuadrant] = useState(0)
  const quadrant1 = quadrant === 1
  const quadrant2 = quadrant === 2
  const quadrant3 = quadrant === 3
  const quadrant4 = quadrant === 4

  function keyDown(e: KeyboardEvent) {
    switch (e.key) {
      case 'ArrowUp':
        if (layer !== 3) {
          setLayer(layer + 1)
        }
        break
      case 'ArrowDown':
        if (layer !== 0) {
          setLayer(layer - 1)
        }
        break
      case 'ArrowLeft':
        if (quadrant !== 0) {
          setQuadrant(quadrant - 1)
        }
        break
      case 'ArrowRight':
        if (quadrant !== 4) {
          setQuadrant(quadrant + 1)
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
        <SubSubElement position={16} type="fire" active={layer3 || quadrant4} />
        <SubSubElement
          position={15}
          type="earth"
          active={layer3 || quadrant4}
        />
        <SubSubElement position={14} type="air" active={layer3 || quadrant4} />
        <SubSubElement
          position={13}
          type="water"
          active={layer3 || quadrant4}
        />
        <SubSubElement position={12} type="fire" active={layer3 || quadrant3} />
        <SubSubElement
          position={11}
          type="earth"
          active={layer3 || quadrant3}
        />
        <SubSubElement position={10} type="air" active={layer3 || quadrant3} />
        <SubSubElement position={9} type="water" active={layer3 || quadrant3} />
        <SubSubElement position={8} type="fire" active={layer3 || quadrant2} />
        <SubSubElement position={7} type="earth" active={layer3 || quadrant2} />
        <SubSubElement position={6} type="air" active={layer3 || quadrant2} />
        <SubSubElement position={5} type="water" active={layer3 || quadrant2} />
        <SubSubElement position={4} type="fire" active={layer3 || quadrant1} />
        <SubSubElement position={3} type="earth" active={layer3 || quadrant1} />
        <SubSubElement position={2} type="air" active={layer3 || quadrant1} />
        <SubSubElement position={1} type="water" active={layer3 || quadrant1} />
      </Layer3>
      <Layer2>
        <SubElement position={8} type="fire" active={layer2 || quadrant4} />
        <SubElement position={7} type="earth" active={layer2 || quadrant4} />
        <SubElement position={6} type="air" active={layer2 || quadrant3} />
        <SubElement position={5} type="water" active={layer2 || quadrant3} />
        <SubElement position={4} type="fire" active={layer2 || quadrant2} />
        <SubElement position={3} type="earth" active={layer2 || quadrant2} />
        <SubElement position={2} type="air" active={layer2 || quadrant1} />
        <SubElement position={1} type="water" active={layer2 || quadrant1} />
      </Layer2>
      <Layer1>
        <Element position={4} type="fire" active={layer1 || quadrant4} />
        <Element position={3} type="earth" active={layer1 || quadrant3} />
        <Element position={2} type="air" active={layer1 || quadrant2} />
        <Element position={1} type="water" active={layer1 || quadrant1} />
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
