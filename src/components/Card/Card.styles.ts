import styled, { css } from 'styled-components'

interface ContainerProps {
  type: 'default' | 'inverse'
}

const typeCards = {
  default: () => css`
    background-color: #fafafa;
    svg {
      color: #35557b;
    }
  `,
  inverse: () => css`
    background-color: #35557b;
    color: #fff;
    margin-top: 50px;
    svg {
      color: #fff;
    }
  `
}

export const Container = styled.div<ContainerProps>`
  width: 200px;
  height: 220px;
  border-radius: 25px;
  display: flex;
  align-items: center;

  svg {
    font-size: 55px;
  }

  ${(props) => typeCards[props.type]}
`

export const Content = styled.div`
  text-align: center;
  padding: 10px;

  h4 {
    margin: 10px 0 15px;
  }

  p {
    font-size: 0.8em;
  }
`
