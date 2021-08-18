import React from 'react'
import styled from 'styled-components'

const Container = styled.header`
  position: relative;
  background-color: #dddddd;
  height: fit-content;
  min-height: 2rem;
  width: 100%;
  color: black;
  display: flex;
  color: #152238;

  @media (max-width: 1010px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`

const Title = styled.p`
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: 15px;
  font-size: 50px;
  font-weight: bolder;
  text-align: center;

  @media (max-width: 650px) {
    font-size: 40px;
  }
`

const Score = styled.p`
  font-size: 35px;
  font-weight: bold;
  padding-right: 20px;
  margin-top: 10px;
  margin-bottom: 10px;

  &:first-of-type {
    padding-right: 40px;
  }

  @media (max-width: 500px) {
    font-size: 30px;
    padding-right: 0px;
  }
`

const ScoreContainer = styled.div`
  display: flex;
  width: fit-content;
  position: absolute;
  top: 10px;
  right: 0;

  @media (max-width: 1010px) {
    position: relative;
  }
`

export default function Header({ score, bestScore }) {
  return (
    <Container>
      <Title>League of Legends Memory Game</Title>
      <ScoreContainer>
        <Score>Score: {score} </Score>
        <Score>Best Score: {bestScore}</Score>
      </ScoreContainer>
    </Container>
  )
}
