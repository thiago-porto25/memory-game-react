import React from 'react'
import styled from 'styled-components'

const Container = styled.header`
  background-color: #dddddd;
  position: fixed;
  top: 0;
  height: 3rem;
  z-index: 4;
  width: 100%;
  color: black;
  display: flex;
`

const Inner = styled.div`
  width: 50%;

  &:last-of-type {
    display: flex;
    justify-content: flex-end;
  }
`

const Title = styled.p``

const Score = styled.p`
  padding-right: 20px;
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
