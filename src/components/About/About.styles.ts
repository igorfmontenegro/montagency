import styled from 'styled-components'

export const Container = styled.section`
  width: 100%;
  height: 50vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  max-width: 1540px;
  margin: auto;
  gap: 50px;

  span {
    color: #35557b;
  }

  p {
    max-width: 700px;
    margin: 20px 20px 20px 0;
  }

  ul {
    margin-left: 20px;
    font-weight: 600;
  }

  li::marker {
    color: #35557b;
  }
`
