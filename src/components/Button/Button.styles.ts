import styled, { css } from 'styled-components'

interface ContainerProps {
  type: 'default' | 'inverse'
}

const typeButtons = {
  default: () => css`
    background-color: #fff;
    color: #35557b;

    &:hover {
      background-color: #35557b;
      color: #fff;
      transition: 0.3s;
    }
  `,
  inverse: () => css`
    background-color: #35557b;
    color: #fff;
  `
}

export const Container = styled.button<ContainerProps>`
  font-family: 'Montserrat', sans-serif;
  border: 2px solid #35557b;
  border-radius: 5px;
  font-weight: 600;
  padding: 10px 20px;
  cursor: pointer;

  ${(props) => typeButtons[props.type]}
`
