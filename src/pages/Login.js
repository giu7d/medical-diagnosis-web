import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import { GlassCard } from '../components/fragments/Cards/Glass'
import { Typography } from '../components/fragments/Typography'
import { Input } from '../components/fragments/Input'
import { Button } from '../components/fragments/Button'
import { rgba } from 'polished'
import { postAccount } from '../service/api'
import { StoreContext } from '../redux/store'
import { setAccountId, setAccountName } from '../redux/action'

const Wrapper = styled.section`
  display: flex;
  flex: 1 1;
  height: 100vh;
  align-items: center;
  justify-content: center;

  p {
    text-align: center;
    font-weight: normal;
    font-size: 18px;
    color: ${({ theme }) => rgba(theme.colors.text, 0.75)};
  }

  .form {
    display: flex;
    margin: 24px 0;
    width: 100%;
  }
`
export const Login = () => {
  const { dispatch } = useContext(StoreContext)
  const [input, setInput] = useState('')

  const onSubmit = async () => {
    const data = await postAccount(input)

    if (!data) return console.log('error')

    dispatch(setAccountId(data.values[0].id))
    dispatch(setAccountName(data.values[0].name))
  }

  return (
    <Wrapper>
      <GlassCard>
        <Typography.Title style={{ fontSize: 32 }}>
          Medical Diagnosis
        </Typography.Title>
        <p style={{ opacity: 0.7 }}>
          This is website uses Neo4j to generate diagnosis based on your given
          information&apos;s.
        </p>
        <div className="form">
          <Input
            name="name-input"
            label="Nome completo"
            inputProps={{
              value: input,
              onChange: e => setInput(e.target.value)
            }}
          />
        </div>
        <Button onClick={onSubmit} disabled={input.length < 3}>
          Iniciar
        </Button>
      </GlassCard>
    </Wrapper>
  )
}
