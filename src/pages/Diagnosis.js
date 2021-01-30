import React, { useContext } from 'react'
import styled from 'styled-components'
import { Question } from '../components/containers/Question'
import { Results } from '../components/containers/Results'
import { Greetings } from '../components/fragments/Greetings'
import { StoreContext } from '../redux/store'

const Wrapper = styled.main`
  display: grid;

  margin: auto;
  padding: 48px;
  height: 100vh;
  width: 100%;
  max-width: 1200px;

  gap: 46px;
  grid-template-columns: minmax(auto, 450px) 1fr;
  grid-template-rows: auto 1fr;
  grid-template-areas:
    'header card'
    'question card';
`

export const Diagnosis = () => {
  const { state } = useContext(StoreContext)
  return (
    <Wrapper>
      <Greetings fullName={state.accountName} />
      <Question />
      <Results />
    </Wrapper>
  )
}
