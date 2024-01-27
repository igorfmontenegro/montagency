import styled from 'styled-components'

export const Container = styled.section`
  width: 100%;
`

export const Content = styled.div`
  max-width: 1540px;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: auto;

  font-weight: 600;

  ul {
    list-style-type: none;
  }

  li {
    display: inline-block;
    margin: 25px;
  }

  a {
    text-decoration: none;
    color: #000;
  }
`
