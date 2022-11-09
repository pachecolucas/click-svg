import styled from 'styled-components'
import Element from './element'

export default function Pagina() {
  return (
    <Wrapper>
      <Layer>
        <Element
          type="circle"
          title="CRIANÇA"
          subTitle="indentificar os pontos"
          text="you"
        />
        <Element
          type="circle"
          title="JOVEM"
          subTitle="conectar os pontos"
          text="he"
        />
        <Element
          type="circle"
          title="ADULTO"
          subTitle="trabalhar os pontos"
          text="I"
        />
        <Element
          type="circle"
          title="ANCIÃO"
          subTitle="verticalizar os pontos"
          text="we"
        />
        <Element
          type="circle"
          title="ILUMINAÇÃO"
          subTitle="reunir os pontos"
          text="one"
        />
        <Element
          type="dot"
          subType="sou"
          title="CORPO"
          text="sou o que tenho"
        />
        <Element
          type="dot"
          subType="sou"
          title="reputação"
          text="sou o que pensam de mim"
        />
        <Element
          type="dot"
          subType="sou"
          title="mente"
          text="sou o que pensam de mim"
        />
        <Element
          type="dot"
          subType="sou"
          title="consciência"
          text="sou o que observa"
        />
        <Element type="dot" subType="sou" title="sou" text="o que sou" />
        <Element
          type="2dot"
          title="inconsciente"
          subTitle="(possessivo)"
          text="EU em MIM"
          text2="VC para MIM"
        />
        <Element type="diagonalL" />
        <Element type="line" />
        <Element type="diagonalR" />
        <Element
          type="dot"
          subType="ego"
          title="consciente"
          subTitle="(contemplativo)"
          text="Eu no TODO"
          text2="o TODO em MIM"
        />
        <Element type="3dot" />
        <Element type="3diagonalL" />
        <Element type="triangle" />
        <Element type="3diagonalR" />
        <Element type="dot" />
        <Element type="4dot" />
        <Element type="4diagonalL" />
        <Element type="square" />
        <Element type="4diagonalR" />
        <Element type="dot" />
      </Layer>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  aspect-ratio: 1 / 1;
  width: min(90vh, 90vw);
  position: relative;
  outline: white 2px solid;
  border-radius: 50%;
  @media only screen and (max-device-width: 414px) {
    width: 95vw;
  }
`
const Layer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  translate: -50% -50%;
  aspect-ratio: 1 / 1;
  width: 70.4%;
  display: grid;
  grid-template-columns: 20% 20% 20% 20% 20%;
  grid-template-rows: 20% 20% 20% 20% 20%;
`
