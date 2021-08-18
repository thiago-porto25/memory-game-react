import React, { useState } from 'react'
import styled from 'styled-components'
import { Footer, Header, MainGame } from './components'
import { GlobalStyles } from './GlobalStyles'

const AppContainer = styled.div``

function App() {
  const [score, setScore] = useState(0)
  const [bestScore, setBestScore] = useState(0)

  return (
    <>
      <GlobalStyles />
      <AppContainer>
        <Header score={score} bestScore={bestScore} />
        <MainGame
          setScore={setScore}
          setBestScore={setBestScore}
          score={score}
          bestScore={bestScore}
        />
        <Footer />
      </AppContainer>
    </>
  )
}

export default App
