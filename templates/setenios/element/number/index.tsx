import styled from 'styled-components'

type Props = {
  value: number
}
export default function Number(p: Props) {
  const rotateDegrees = (p.value / 112) * 360
  const lead = p.value % 28 === 0
  return (
    <Wrapper lead={lead} degrees={rotateDegrees}>
      {p.value}
    </Wrapper>
  )
}

const Wrapper = styled.div<{ degrees: number; lead: boolean }>`
  width: min-content;
  height: 50%;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  transform-origin: 0 100%;
  rotate: ${(p) => `${p.degrees}deg`};
  font-size: 1.5vw;
  font-weight: bold;
`
