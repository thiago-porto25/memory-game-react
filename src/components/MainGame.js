import React, { useEffect, useState } from 'react'
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
  transition: 150ms cubic-bezier(0.215, 0.61, 0.355, 1);
  cursor: pointer;
  animation: fadeIn 200ms;

  &:hover {
    transform: scale(1.1);
  }

  @-webkit-keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`

const Inner = styled.div`
  display: grid;
  padding: 2rem 2rem 2rem 2rem;
  grid-template-columns: repeat(auto-fit, minmax(12rem, 1fr));
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
  margin-top: 5px;
  font-size: 25px;
  font-weight: bold;
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
  const [opacity, setOpacity] = useState(1)
  const [waitingTrans, setWaitingTrans] = useState(false)

  useEffect(() => {
    if (opacity === 0 && waitingTrans === true)
      setTimeout(() => {
        setWaitingTrans(false)
        setOpacity(1)
      }, 150)
  }, [opacity, waitingTrans])

  const handleClick = ({ target }) => {
    setOpacity(0)
    setWaitingTrans(true)
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
        let generatedNum = Math.floor(Math.random() * 18)
        if (numbersUsed.indexOf(generatedNum) === -1) {
          numbersUsed.push(generatedNum)
          return generatedNum
        } else continue
      }
    }
    return names.map((item, i) => {
      const randNumber = generateRandNumber()
      return (
        <Card
          className="card"
          onClick={handleClick}
          name={names[randNumber]}
          key={`${item}-${i}`}
          style={{ opacity: opacity }}
        >
          <ImageContainer>
            <Image src={`./images/${randNumber}.jpg`} alt={names[randNumber]} />
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
      <Inner style={{ opacity: !waitingTrans ? 1 : 0 }}>
        {createCardsRandomly()}
      </Inner>
    </Container>
  )
}
