import { rgba } from 'polished'
import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 8px;
  width: 100%;

  & > label {
    font-size: 14px;
    font-weight: 600;
    color: ${({ theme }) => rgba(theme.colors.text, 0.75)};
  }

  & > input {
    padding: 14px 24px;
    font-size: 18px;
    border-radius: 14px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    ::placeholder {
      font-style: italic;
    }
  }
`

export const Input = ({ name, label, inputProps }) => {
  return (
    <Wrapper>
      {label && <label htmlFor={name}>{label}</label>}
      <input name={name} type="text" {...inputProps} />
    </Wrapper>
  )
}
