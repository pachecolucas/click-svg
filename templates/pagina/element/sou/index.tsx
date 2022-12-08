import styled from 'styled-components'

type Props = {
  img: number
}

export default function Sou(props: Props) {
  return (
    <Wrapper>
      <img
        style={{ height: '100%', width: '100%' }}
        src={`pagina/sou${props.img}.jpg`}
        alt=""
      />
    </Wrapper>
  )
}
const Wrapper = styled.div`
  height: fit-content;
  width: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
`
