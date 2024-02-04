import { Container, Content } from './Card.styles'
import { ReactNode } from 'react'

interface CardProps {
  icon: ReactNode
  title: string
  description: string
  type: 'default' | 'inverse'
}

export function Card({
  icon,
  title,
  description,
  type = 'default'
}: CardProps) {
  return (
    <Container type={type}>
      <Content>
        <div>{icon}</div>
        <div>
          <h4> {title} </h4>
          <p>{description}</p>
        </div>
      </Content>
    </Container>
  )
}
