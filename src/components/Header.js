import React from 'react'
import styled from 'styled-components'

const Container = styled.header`
  background-color: #dddddd;
  height: 3rem;
  z-index: 4;
  width: 100%;
  color: black;
  display: flex;
`

const Inner = styled.div`
  width: 60%;
  color: #152238;

  &:last-of-type {
    width: 40%;
    display: flex;
    justify-content: flex-end;
  }
`

const Title = styled.p`
  margin-top: 5px;
  margin-left: 15px;
  font-size: 50px;
  font-weight: bolder;
`

const Score = styled.p`
  font-size: 35px;
  font-weight: bold;
  padding-right: 20px;
  margin-top: 10px;

  &:first-of-type {
    padding-right: 40px;
  }
`

export default function Header({ score, bestScore }) {
  return (
    <Container>
      <Inner>
        <Title>League of Legends Memory Game</Title>
      </Inner>
      <Inner>
        <Score>Score: {score} </Score>
        <Score>Best Score: {bestScore}</Score>
      </Inner>
    </Container>
  )
}
