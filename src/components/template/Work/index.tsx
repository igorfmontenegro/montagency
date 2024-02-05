import { Subtitle } from '../../Subtitle'
import {
  ButtonsContainer,
  Container,
  Content,
  LotPhoto,
  PhotosContainer,
  SelectedOption
} from './Work.styles'
import { Portfolio } from '../../Portfolio'
import { useState } from 'react'

export function Work() {
  const maxImagesToShow = 6
  const [category, setCategory] = useState('todos')

  const filteredPortfolio =
    category === 'todos'
      ? Portfolio
      : Portfolio.filter((item) => item.category === category)

  return (
    <Container>
      <Content>
        <Subtitle title="TRABALHO" subtitle="Conheça Nosso Portifólio" />

        <ButtonsContainer>
          <SelectedOption
            selected={category === 'todos'}
            onClick={() => setCategory('todos')}
          >
            Todos
          </SelectedOption>
          <SelectedOption
            selected={category === 'país'}
            onClick={() => setCategory('país')}
          >
            Países
          </SelectedOption>
          <SelectedOption
            selected={category === 'tecnologia'}
            onClick={() => setCategory('tecnologia')}
          >
            Tecnologias
          </SelectedOption>
          <SelectedOption
            selected={category === 'rede'}
            onClick={() => setCategory('rede')}
          >
            Redes
          </SelectedOption>
        </ButtonsContainer>

        <PhotosContainer>
          {filteredPortfolio.slice(0, maxImagesToShow).map((item) => (
            <LotPhoto
              key={item.id}
              image={`/src/assets/portfolio/${item.image}`}
            />
          ))}
        </PhotosContainer>
      </Content>
    </Container>
  )
}
