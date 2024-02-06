import { Container, Content } from './Header.styles'

import Logo from '../../../assets/MontAgency.png'

export function Header() {
  return (
    <Container>
      <Content>
        <div>
          <img src={Logo} />
        </div>
        <nav>
          <ul>
            <a href="">
              <li> Home </li>
            </a>
            <a href="">
              <li> Sobre </li>
            </a>
            <a href="">
              <li> Portfólio </li>
            </a>
            <a href="">
              <li> Serviços </li>
            </a>
            <a href="">
              <li> Contato </li>
            </a>
          </ul>
        </nav>
      </Content>
    </Container>
  )
}
