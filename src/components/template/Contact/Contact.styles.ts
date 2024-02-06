import styled from 'styled-components'

export const Container = styled.section`
  height: 70vh;
`

export const Content = styled.div`
  max-width: 1540px;
  margin: auto;
`

export const BoxContact = styled.div`
  width: 800px;
  height: 450px;
  background-color: #35557b;
  border-radius: 50px;
  margin: auto;
  display: flex;
`

export const Left = styled.div`
  position: relative;
  width: 400px;
  height: 450px;
  background-color: #fafafa;
  border-radius: 30px;

  h2 {
    margin: 100px 40px 40px 40px;
    font-size: 3em;
  }

  img {
    width: 80px;

    position: absolute;
    right: 20px;
    bottom: 20px;
  }
`

export const Right = styled.div`
  position: relative;
  width: 400px;

  button {
    position: absolute;
    right: 30px;
    bottom: 30px;

    border: none;
    background-color: #fafafa;
    padding: 10px;
    border-radius: 5px;
    font-weight: 600;
    font-family: 'Montserrat';
  }
`

export const Header = styled.div`
  margin: 30px;
  color: #fafafa;

  p {
    font-size: 0.9em;
  }
`

export const BoxInput = styled.div`
  display: grid;
  grid-template-columns: 150px 150px;
  justify-content: center;
  gap: 20px;
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: #fafafa;

  input {
    width: 150px;
    height: 30px;
    border: none;
    border-radius: 5px;
  }

  .large-input {
    height: 70px;
    width: 320px;
  }
`
