import React, { useContext } from 'react'
import { Question as QuestionWrapper } from '../fragments/Questions'
import { QuestionNumber } from '../fragments/Questions/Number'
import { QuestionScale } from '../fragments/Questions/Scale'
import { Typography } from '../fragments/Typography'
import { StoreContext } from '../../redux/store'
import { useQuestion } from '../../hooks/useQuestion'

const number = 2

export const Question = () => {
  const { state } = useContext(StoreContext)
  const { data, isError, isLoading } = useQuestion(state.accountId)

  if (isError || isLoading) {
    console.log(isError)
    return null
  }

  return (
    <QuestionWrapper>
      {console.log(data)}
      <QuestionNumber>{number}</QuestionNumber>
      <div>
        <Typography.SubSubTitle>
          {data.value[0].question}
        </Typography.SubSubTitle>
        <p>Give us your answer in a scale of 1 to 5 stars.</p>
        <QuestionScale></QuestionScale>
      </div>
    </QuestionWrapper>
  )
}
