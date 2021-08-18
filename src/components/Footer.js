import React from 'react'
import styled from 'styled-components'

const Container = styled.footer`
  width: 100%;
  background-color: #152238dd;
`

const Link = styled.a`
  color: inherit;

  &:hover {
    color: #bbbbbb;
  }
`

const Text = styled.p`
  user-select: none;
  width: fit-content;
  padding: 15px 0 15px 0;
  margin: auto;
  color: white;
`

export default function Footer() {
  return (
    <Container>
      <Text>
        Webpage created by{' '}
        <Link href="https://github.com/thiago-porto25">Thiago Porto</Link>.
      </Text>
    </Container>
  )
}
