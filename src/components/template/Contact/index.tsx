import { Subtitle } from '../../Subtitle'
import {
  BoxContact,
  BoxInput,
  Container,
  Content,
  Header,
  InputContainer,
  Left,
  Right
} from './Contact.styles'

import Logo from '../../../assets/MontAgency.png'

export function Contact() {
  return (
    <Container>
      <Content>
        <Subtitle title="CONTATO" subtitle="Entre em Contato" />

        <BoxContact>
          <Left>
            <h2>
              Evolua. <br /> Cada. <br /> Vez. <br /> Mais.
            </h2>

            <img src={Logo} />
          </Left>
          <Right>
            <Header>
              <h3> Contate-nos </h3>
              <br />
              <p>
                Fusce a ornare massa, et euismod est. Vestibulum tempor eget
                quam sed mollis.
              </p>
            </Header>

            <BoxInput>
              <InputContainer>
                <label> Nome </label>
                <input id="username" type="text"></input>
              </InputContainer>
              <InputContainer>
                <label> Empresa </label>
                <input type="text"></input>
              </InputContainer>
              <InputContainer>
                <label> E-mail </label>
                <input type="text"></input>
              </InputContainer>
              <InputContainer>
                <label> Telefone </label>
                <input type="text"></input>
              </InputContainer>
              <InputContainer>
                <label> Mensagem </label>
                <input type="text" className="large-input"></input>
              </InputContainer>
            </BoxInput>

            <button> Submit </button>
          </Right>
        </BoxContact>
      </Content>
    </Container>
  )
}
