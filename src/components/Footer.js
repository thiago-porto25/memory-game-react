import React from 'react'
import styled from 'styled-components'

const Container = styled.footer`
  width: 100%;
  background-color: #152238;
`

const Link = styled.a`
  color: inherit;

  &:hover {
    color: #bbbbbb;
  }

  i {
    padding-right: 5px;
  }
`

const Text = styled.p`
  font-size: 25px;
  user-select: none;
  width: fit-content;
  padding: 10px 0 15px 0;
  margin: auto;
  color: white;
`

export default function Footer() {
  return (
    <Container>
      <Text>
        Webpage created by{' '}
        <Link href="https://github.com/thiago-porto25">
          <i className="fab fa-github"> </i>Thiago Porto
        </Link>
        .
      </Text>
    </Container>
  )
}
