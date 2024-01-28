import { Container, Content } from './About.styles'
import AboutImg from '../../assets/about.png'

export function About() {
  return (
    <Container>
      <Content>
        <div>
          <img src={AboutImg} width={'400px'} />
        </div>

        <div>
          <h2>
            Porque escolher <span>a gente?</span>
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.{' '}
            <span>Suspendisse vitae cursus ex.</span> Donec laoreet tellus et
            pulvinar sollicitudin. Nam maximus, ligula ac gravida convallis,{' '}
            <span>turpis justo aliquam quam,</span>
            congue ullamcorper quam sem non ex. Proin tincidunt lectus porttitor
            euismod molestie.
          </p>
          <p>
            Maecenas vitae quam a felis cursus mattis quis vitae massa. Nulla
            facilisi.{' '}
            <span>
              Aenean scelerisque dictum nisl, nec efficitur massa tincidunt sit
              amet.
            </span>{' '}
            Integer tempor lorem vel nunc sagittis accumsan.
          </p>

          <ul>
            <li>Lorem ipsum dolor sit amet</li>
            <li>Lorem ipsum dolor sit amet</li>
            <li>Lorem ipsum dolor sit amet</li>
          </ul>
        </div>
      </Content>
    </Container>
  )
}
