import { Container } from './Button.styles'

interface ButtonProps {
  text: string
  type?: 'default' | 'inverse'
}

export function Button({ text, type = 'default' }: ButtonProps) {
  return <Container type={type}>{text}</Container>
}
