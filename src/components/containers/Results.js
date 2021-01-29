import React from 'react'
import { GlassCard } from '../fragments/Cards/Glass'
import { CardList } from '../fragments/Cards/List'
import { Typography } from '../fragments/Typography'

export const Results = () => {
  return (
    <GlassCard>
      <Typography.SubTitle>You May Have...</Typography.SubTitle>
      <p style={{ opacity: 0.75 }}>
        Hey! Here we rank some diseases that matches your symptoms! Don&apos;t
        get upset by the result, instead please call a doctor.
      </p>
      <CardList>
        <div className="item">
          <div className="header">
            <h3>Influenza</h3>
            <span className="score">250</span>
          </div>
          <span className="warning">
            Hey! Are you worried about this result? Please call a doctor.
          </span>
          <p>
            Influenza, commonly known as &apos;the flu&apos;, is an infectious
            disease caused by an influenza virus. Symptoms can be mild to
            severe. The most common symptoms include: high fever, runny nose,
            sore throat, muscle and joint pain, headache, coughing, and feeling
            tired.
          </p>
        </div>
        <div className="item">
          <div className="header">
            <h3>H1N1 Flu</h3>
            <span className="score">120</span>
          </div>
        </div>
        <div className="item">
          <div className="header">
            <h3>COVID</h3>
            <span className="score">100</span>
          </div>
        </div>
      </CardList>
    </GlassCard>
  )
}
