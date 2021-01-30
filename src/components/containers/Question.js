import React, { useContext, useState } from 'react'
import StarRatings from 'react-star-ratings'
import { FiCheck } from 'react-icons/fi'
import { Question as QuestionWrapper } from '../fragments/Questions'
import { QuestionNumber } from '../fragments/Questions/Number'
import { Typography } from '../fragments/Typography'
import { StoreContext } from '../../redux/store'
import { useQuestion } from '../../hooks/useQuestion'
import { useTheme } from 'styled-components'
import { rgba } from 'polished'
import { postAnswer } from '../../service/api'

export const Question = () => {
  const { state } = useContext(StoreContext)
  const { data, isError, isLoading, mutate } = useQuestion(state.accountId)
  const [answer, setAnswer] = useState(0)
  const theme = useTheme()

  if (isError || isLoading) {
    console.log(isError)
    return null
  }

  if (!data) {
    return (
      <QuestionWrapper>
        <QuestionNumber>
          <FiCheck />
        </QuestionNumber>
        <div>
          <Typography.SubSubTitle>Pronto!</Typography.SubSubTitle>
          <p>Todas as perguntas foram respondidas.</p>
        </div>
      </QuestionWrapper>
    )
  }

  const onAnswerQuestion = async value => {
    setAnswer(undefined)

    const limit = 5
    const normalizedValue = value / limit
    console.log(normalizedValue)

    await postAnswer(state.accountId, data.question_id, normalizedValue)
    await mutate()
    setAnswer(0)
  }

  return (
    <QuestionWrapper>
      <QuestionNumber>{state.questionCount}</QuestionNumber>
      <div>
        <Typography.SubSubTitle>{data.question}</Typography.SubSubTitle>
        <p>Give us your answer in a scale of 1 to 5 stars.</p>
        {answer !== undefined && (
          <div>
            <StarRatings
              rating={answer}
              starRatedColor={theme.colors.primary}
              starHoverColor={theme.colors.primary}
              starEmptyColor={rgba(theme.colors.darkBackground, 0.2)}
              changeRating={onAnswerQuestion}
              numberOfStars={5}
              name="rating"
            />
          </div>
        )}
      </div>
    </QuestionWrapper>
  )
}
