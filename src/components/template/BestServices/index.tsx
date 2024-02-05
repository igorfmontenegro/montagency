import { Card } from '../../Card'
import { Subtitle } from '../../Subtitle'
import { CardsContainer, Container, Content } from './BestServices.styles'

import { FaHtml5, FaNetworkWired } from 'react-icons/fa'
import { FaMobileScreenButton } from 'react-icons/fa6'
import { IoBulb, IoNewspaper } from 'react-icons/io5'
import { PiStrategyBold } from 'react-icons/pi'
import { TfiAnnouncement } from 'react-icons/tfi'
import { MdDesignServices } from 'react-icons/md'

export function BestServices() {
  return (
    <Container>
      <Content>
        <Subtitle title="SERVIÇOS" subtitle="Nossos Melhores Serviços" />

        <CardsContainer>
          <Card
            icon={<FaHtml5 />}
            title="HTML 5"
            description="Maecenas vitae quam a felis cursus mattis quis vitae massa. Nulla
            facilisi."
            type="default"
          />
          <Card
            icon={<FaMobileScreenButton />}
            title="App Mobile"
            description="Maecenas vitae quam a felis cursus mattis quis vitae massa. Nulla
            facilisi."
            type="default"
          />
          <Card
            icon={<IoBulb />}
            title="Boas Estratégias"
            description="Maecenas vitae quam a felis cursus mattis quis vitae massa. Nulla
            facilisi."
            type="default"
          />
          <Card
            icon={<PiStrategyBold />}
            title="Branding"
            description="Maecenas vitae quam a felis cursus mattis quis vitae massa. Nulla
            facilisi."
            type="default"
          />
          <Card
            icon={<FaNetworkWired />}
            title="Gestão de Redes"
            description="Maecenas vitae quam a felis cursus mattis quis vitae massa. Nulla
            facilisi."
            type="default"
          />
          <Card
            icon={<TfiAnnouncement />}
            title="Publicidade"
            description="Maecenas vitae quam a felis cursus mattis quis vitae massa. Nulla
            facilisi."
            type="default"
          />
          <Card
            icon={<IoNewspaper />}
            title="Criação de Conteúdo"
            description="Maecenas vitae quam a felis cursus mattis quis vitae massa. Nulla
            facilisi."
            type="default"
          />
          <Card
            icon={<MdDesignServices />}
            title="Design Gráfico"
            description="Maecenas vitae quam a felis cursus mattis quis vitae massa. Nulla
            facilisi."
            type="default"
          />
        </CardsContainer>
      </Content>
    </Container>
  )
}
