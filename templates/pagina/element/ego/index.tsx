import styled from 'styled-components'

type Props = {
  img: number
}

export default function Ego(props: Props) {
  return (
    <Wrapper>
      <img
        style={{ height: '100%', width: '100%' }}
        src={`pagina/ego${props.img}.jpg`}
        alt=""
      />
    </Wrapper>
  )
}
const Wrapper = styled.div`
  @media only screen and (max-device-width: 414px) {
    min-height: 50px;
  }
  height: fit-content;
  width: fit-content;
  /* height: 100%; */
  display: flex;
  justify-content: center;
  align-items: center;
`
