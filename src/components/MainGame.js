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
  padding-top: 20px;
`

const Inner = styled.div`
  display: grid;
  padding: 2rem 2rem 2rem 2rem;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 20px;
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
  pointer-events: none;
`

const Name = styled.p`
  color: white;
`

const NameContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  pointer-events: none;
`

export default function MainGame({ setScore, setBestScore, score, bestScore }) {
  const [clickedChars, setClickedChars] = useState([])

  const handleClick = ({ target }) => {
    const clickedName = target.getAttribute('name')

    if (clickedChars.indexOf(clickedName) === -1) {
      const newPeople = clickedChars.map((item) => item)
      newPeople.push(clickedName)
      setScore((prev) => prev + 1)
      setClickedChars(newPeople)
    } else {
      if (score > bestScore) setBestScore(score)
      setScore(0)
      setClickedChars([])
    }
  }

  const createCardsRandomly = () => {
    let numbersUsed = []
    function generateRandNumber() {
      while (true) {
        let generatedNum = Math.floor(Math.random() * 12)
        if (numbersUsed.indexOf(generatedNum) === -1) {
          numbersUsed.push(generatedNum)
          return generatedNum
        }
        continue
      }
    }
    return names.map((item, i) => {
      const randNumber = generateRandNumber()
      return (
        <Card
          onClick={handleClick}
          name={names[randNumber]}
          key={`${item}-${i}`}
        >
          <ImageContainer>
            <Image src={`/images/${randNumber}.jpg`} alt={names[randNumber]} />
          </ImageContainer>
          <NameContainer>
            <Name>
              {names[randNumber][0].toUpperCase() + names[randNumber].slice(1)}
            </Name>
          </NameContainer>
        </Card>
      )
    })
  }
  return (
    <Container>
      <Inner>{createCardsRandomly()}</Inner>
    </Container>
  )
}
