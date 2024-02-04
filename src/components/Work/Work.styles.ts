import styled from 'styled-components'

interface LotPhotoProps {
  image: string
}

export const Container = styled.section`
  margin-top: 30px;
  height: 50vh;
`
export const Content = styled.div`
  max-width: 1540px;
  margin: auto;
`

export const PhotosContainer = styled.div`
  display: grid;
  grid-template-columns: 15% 15% 15%;
  gap: 50px;
  justify-content: center;
`

export const LotPhoto = styled.div<LotPhotoProps>`
  height: 200px;
  width: 250px;
  border-radius: 25px;
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-position: center;
`
