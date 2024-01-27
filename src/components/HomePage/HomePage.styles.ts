import styled from 'styled-components'

export const Container = styled.section`
  height: 50vh;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin: auto;
`

export const Content = styled.div`
  max-width: 1540px;
  display: flex;
  flex-direction: column;
  gap: 35px;

  h1 {
    font-size: 2.5em;

    span {
      color: #35557b;
    }
  }

  p {
    max-width: 450px;
  }

  button {
    margin-right: 20px;
  }

  img {
    width: 300px;
  }
`
