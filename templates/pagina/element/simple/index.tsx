import styled from 'styled-components'

type Props = {
  img: number
}

export default function Simple(props: Props) {
  return (
    <Wrapper>
      <img
        style={{ height: '100%', width: '100%' }}
        src={`pagina/simple${props.img}.jpg`}
        alt=""
      />
    </Wrapper>
  )
}
const Wrapper = styled.div`
  @media only screen and (max-device-width: 414px) {
    min-width: 60px;
    min-height: 50px;
  }
  height: fit-content;
  width: fit-content;
  /* height: 100%;
  width: 100%; */
  display: flex;
  justify-content: center;
  align-items: center;
`
