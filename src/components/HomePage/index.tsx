import { Button } from '../Button'
import { Container, Content } from './HomePage.styles'
import Home from '../../assets/home.png'

export function HomePage() {
  return (
    <Container>
      <Content>
        <h1>
          <span>Construa</span> sua <br /> agência <span>Conosco</span>
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          vitae cursus ex.
        </p>

        <div>
          <Button text="Get Started" type="default" />
          <Button text="Free Trial " type="inverse" />
        </div>
      </Content>

      <div>
        <img src={Home} width={'500px'} />
      </div>
    </Container>
  )
}
