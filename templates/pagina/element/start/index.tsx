import styled from 'styled-components'

type Props = {
  img: number
}

export default function Start(props: Props) {
  return (
    <Wrapper>
      <img
        style={{ height: '100%', width: '100%' }}
        src={`pagina/start${props.img}.jpg`}
        alt=""
      />
    </Wrapper>
  )
}
const Wrapper = styled.div`
  /* max-height: 200px; */
  height: fit-content;
  width: fit-content;
  /* height: 100%;
  width: 100%; */
  display: flex;
  justify-content: center;
  align-items: center;
`
