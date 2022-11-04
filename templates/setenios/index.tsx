import styled from 'styled-components'
import Element from './element'
import SubElement from './element/sub'
import SubSubElement from './element/sub/sub'
import Number from './element/number'

export default function Setenios(props: any) {
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
        <SubSubElement position={16} type="fire" />
        <SubSubElement position={15} type="earth" />
        <SubSubElement position={14} type="air" />
        <SubSubElement position={13} type="water" />
        <SubSubElement position={12} type="fire" />
        <SubSubElement position={11} type="earth" />
        <SubSubElement position={10} type="air" />
        <SubSubElement position={9} type="water" />
        <SubSubElement position={8} type="fire" />
        <SubSubElement position={7} type="earth" />
        <SubSubElement position={6} type="air" />
        <SubSubElement position={5} type="water" />
        <SubSubElement position={4} type="fire" />
        <SubSubElement position={3} type="earth" />
        <SubSubElement position={2} type="air" />
        <SubSubElement position={1} type="water" />
      </Layer3>
      <Layer2>
        <SubElement position={8} type="fire" />
        <SubElement position={7} type="earth" />
        <SubElement position={6} type="air" />
        <SubElement position={5} type="water" />
        <SubElement position={4} type="fire" />
        <SubElement position={3} type="earth" />
        <SubElement position={2} type="air" />
        <SubElement position={1} type="water" />
      </Layer2>
      <Layer1>
        <Element position={4} type="fire" />
        <Element position={3} type="earth" />
        <Element position={2} type="air" />
        <Element position={1} type="water" />
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
