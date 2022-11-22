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
          img={1}
        />
        <Element
          type="dot"
          subType="sou"
          title="reputação"
          text="sou o que pensam de mim"
          img={2}
        />
        <Element
          type="dot"
          subType="sou"
          title="mente"
          text="sou o que pensam de mim"
          img={3}
        />
        <Element
          type="dot"
          subType="sou"
          title="consciência"
          text="sou o que observa"
          img={4}
        />
        <Element
          type="dot"
          subType="sou"
          title="sou"
          text="o que sou"
          img={5}
        />
        <Element type="2dot" img={1} />
        <Element type="diagonalL" img={2} />
        <Element type="line" img={3} />
        <Element type="diagonalR" img={4} />
        <Element type="dot" subType="ego" img={5} />
        <Element type="3dot" img={1} />
        <Element type="3diagonalL" img={2} />
        <Element type="triangle" img={3} />
        <Element type="3diagonalR" img={4} />
        <Element type="dot" subType="simple" img={5} />
        <Element type="4dot" img={1} />
        <Element type="4diagonalL" img={2} />
        <Element type="square" img={3} />
        <Element type="4diagonalR" img={4} />
        <Element type="dot" subType="last" img={5} />
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
