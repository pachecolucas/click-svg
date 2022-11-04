import React from 'react'
import styled from 'styled-components'

type Props = {
  type: 'title' | 'ego' | 'sou'
  title: string
  subTitle?: string
}

function Title(props: Props) {
  const title = props.title
  function getContent() {
    switch (props.type) {
      case 'title':
        return (
          <ContainerTitle subTitle={props.subTitle}>
            <h4>{title.toLocaleUpperCase()}</h4>
            {props.subTitle ? <p>{props.subTitle}</p> : null}
          </ContainerTitle>
        )
        break
      case 'ego':
        return (
          <ContainerEgo subTitle={props.subTitle}>
            <h4 style={{ fontWeight: 'normal' }}>EGO</h4>
            <h3>
              <strong>{title}</strong>
            </h3>
            {props.subTitle ? <p>{props.subTitle}</p> : null}
          </ContainerEgo>
        )
        break
      case 'sou':
        return (
          <ContainerSou>
            <h4 style={{ fontWeight: 'normal' }}>
              {props.title.toLocaleUpperCase() === 'SOU' ? 'eu' : 'eu sou'}
            </h4>
            <h3>
              <strong>{title.toLocaleUpperCase()}</strong>
            </h3>
          </ContainerSou>
        )
        break
      default:
        return null
        break
    }
  }

  return <Container>{getContent()}</Container>
}
const Container = styled.span`
  h4 {
    font-size: 1.5vw;
  }
  h3 {
    font-size: 1.1vw;
  }
  p {
    font-size: 0.9vw;
  }
`
const ContainerEgo = styled.div<{ subTitle: string | undefined }>`
  * {
    margin: 0;
  }
  height: ${(p) => (p.subTitle ? '30%' : '20%')};
  display: flex;
  flex-direction: column;
  place-items: center;
`
const ContainerTitle = styled.div<{ subTitle: string | undefined }>`
  * {
    margin: 0;
  }
  height: 20%;
  display: flex;
  align-items: center;
  ${(p) =>
    p.subTitle ? 'flex-direction: column;' : 'justify-content: center;'}
`
const ContainerSou = styled.div`
  * {
    margin: 0;
  }
  height: 15%;
  display: flex;
  flex-direction: column;
  place-items: center;
`

export default Title
