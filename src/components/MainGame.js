import React, { useState } from 'react'
import styled from 'styled-components'

const Container = styled.main`
  background-color: #dddddd;
`

const Card = styled.div`
  background-color: #1c2e4a;
  border-radius: 5px;
  height: 15rem;
  min-height: 15rem;
  width: 11rem;
  min-width: 11rem;
`

const Inner = styled.div`
  padding-top: 5rem;
`

const Image = styled.img`
  height: 100%;
`

const ImageContainer = styled.div`
  height: 80%;
`

const Name = styled.p``

const NameContainer = styled.div``

export default function MainGame({ setScore, setBestScore }) {
  const [clickedChars, setClickedChars] = useState([])
  return (
    <Container>
      <Inner>
        <Card>
          <ImageContainer>
            <Image src={`/images/${1}.jpg`} />
          </ImageContainer>
          <NameContainer>
            <Name>Diana</Name>
          </NameContainer>
        </Card>
      </Inner>
    </Container>
  )
}
