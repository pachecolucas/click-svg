import styled from 'styled-components'

type Props = {
  title: string
  subTitle?: string
  text: string
}

export default function HoverElement(props: Props) {
  return (
    <Wrapper title={props.title}>
      <Text>
        <h3>{props.title}</h3>
        <p style={{ textAlign: 'center' }}>{props.subTitle}</p>
      </Text>
      <ContainerCircle>
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
        <h3 style={{ position: 'absolute' }}>{props.text}</h3>
      </ContainerCircle>
    </Wrapper>
  )
}
const Wrapper = styled.div<{ title: string }>`
  height: fit-content;
  background-color: black;
`
const Text = styled.div`
  text-align: center;
  word-wrap: break-word;
  max-width: 100%;
`
const ContainerCircle = styled.div`
  min-height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`
