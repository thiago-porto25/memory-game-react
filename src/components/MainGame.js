import React, { useState } from 'react'
import styled from 'styled-components'
import { names } from '../data/names'

const Container = styled.main`
  background-color: #dddddd;
`

const Card = styled.div`
  background-color: #23395d;
  border-radius: 5px;
  height: 15rem;
  min-height: 15rem;
  width: 11rem;
  min-width: 11rem;
`

const Inner = styled.div`
  padding: 5rem 2rem 2rem 2rem;
`

const Image = styled.img`
  height: 100%;
`

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80%;
  width: 100%;
`

const Name = styled.p`
  color: white;
`

const NameContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

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
            <Name>{names[1][0].toUpperCase() + names[1].slice(1)}</Name>
          </NameContainer>
        </Card>
      </Inner>
    </Container>
  )
}
