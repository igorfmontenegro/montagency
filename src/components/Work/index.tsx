import { Subtitle } from '../Subtitle'
import { Container, Content, LotPhoto, PhotosContainer } from './Work.styles'

import Brasil from '../../assets/brasil.jpg'
import EUA from '../../assets/eua.jpg'
import Inglaterra from '../../assets/inglaterra.jpg'
import Canada from '../../assets/canada.jpg'
import Mexico from '../../assets/mexico.jpg'
import Espanha from '../../assets/espanha.jpg'

export function Work() {
  return (
    <Container>
      <Content>
        <Subtitle title="WORK" subtitle="Conheça Nosso Portifólio" />
        <PhotosContainer>
          <LotPhoto image={Brasil} />
          <LotPhoto image={EUA} />
          <LotPhoto image={Inglaterra} />
          <LotPhoto image={Canada} />
          <LotPhoto image={Mexico} />
          <LotPhoto image={Espanha} />
        </PhotosContainer>
      </Content>
    </Container>
  )
}
