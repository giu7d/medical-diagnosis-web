import React from 'react'
import { Question as QuestionWrapper } from '../fragments/Questions'
import { QuestionNumber } from '../fragments/Questions/Number'
import { QuestionScale } from '../fragments/Questions/Scale'
import { Typography } from '../fragments/Typography'

const number = 2
const title = 'Are you feeling headaches?'

export const Question = () => {
  return (
    <QuestionWrapper>
      <QuestionNumber>{number}</QuestionNumber>
      <div>
        <Typography.SubSubTitle>{title}</Typography.SubSubTitle>
        <p>Give us your answer in a scale of 1 to 5 stars.</p>
        <QuestionScale></QuestionScale>
      </div>
    </QuestionWrapper>
  )
}
