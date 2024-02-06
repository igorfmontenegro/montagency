import { Container, Content } from './Header.styles'

export function Header() {
  return (
    <Container>
      <Content>
        <div> Logo </div>
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
              <li> News </li>
            </a>
          </ul>
        </nav>
      </Content>
    </Container>
  )
}
