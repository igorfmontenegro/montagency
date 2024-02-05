import { Card } from '../../Card'
import { Subtitle } from '../../Subtitle'
import { CardContainer, Container, Content } from './Process.styles'

import { IoChatbubbles, IoSearch } from 'react-icons/io5'
import { FaMoneyBillTransfer } from 'react-icons/fa6'
import { FaCheckCircle } from 'react-icons/fa'

export function Process() {
  return (
    <Container>
      <Content>
        <Subtitle title="PROCESSO" subtitle="Conheça Nosso Processo" />
        <CardContainer>
          <Card
            icon={<IoChatbubbles />}
            title="Chat"
            description="Maecenas vitae quam a felis cursus mattis quis vitae massa. Nulla
            facilisi."
            type="default"
          />
          <Card
            icon={<FaMoneyBillTransfer />}
            title="Negociação"
            description="Maecenas vitae quam a felis cursus mattis quis vitae massa. Nulla
            facilisi."
            type="inverse"
          />
          <Card
            icon={<IoSearch />}
            title="Pesquisa"
            description="Maecenas vitae quam a felis cursus mattis quis vitae massa. Nulla
            facilisi."
            type="default"
          />
          <Card
            icon={<FaCheckCircle />}
            title="Finalização"
            description="Maecenas vitae quam a felis cursus mattis quis vitae massa. Nulla
            facilisi."
            type="inverse"
          />
        </CardContainer>
      </Content>
    </Container>
  )
}
