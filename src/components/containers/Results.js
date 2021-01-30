import React, { useContext, useEffect } from 'react'
import { v4 } from 'uuid'
import { useResults } from '../../hooks/useResults'
import { StoreContext } from '../../redux/store'
import { GlassCard } from '../fragments/Cards/Glass'
import { CardList } from '../fragments/Cards/List'
import { Typography } from '../fragments/Typography'

export const Results = () => {
  const { state } = useContext(StoreContext)
  const { data, isError, isLoading, mutate } = useResults(state.accountId)

  useEffect(() => {
    mutate()
  }, [state.questionCount])

  if (isError || isLoading || data.length === 0 || state.questionCount < 5) {
    console.log(isError)
    return null
  }

  return (
    <GlassCard>
      <Typography.SubTitle>You May Have...</Typography.SubTitle>
      <p style={{ opacity: 0.75 }}>
        Hey! Here we rank some diseases that matches your symptoms! Don&apos;t
        get upset by the result, instead please call a doctor.
      </p>
      <CardList>
        {data.map(({ disease, quantity }) => (
          <div className="item" key={v4()}>
            <div className="header">
              <h3>{disease}</h3>
              <span className="score">{quantity}</span>
            </div>
          </div>
        ))}
      </CardList>
    </GlassCard>
  )
}
