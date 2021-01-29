import { rgba } from 'polished'
import React from 'react'
import styled from 'styled-components'
import { Typography } from './Typography'

const Wrapper = styled.div`
  grid-area: header;
  display: flex;
  flex-direction: column;
  gap: 8px;

  & > span {
    font-size: 24px;
    font-weight: 600;
    color: ${({ theme }) => rgba(theme.colors.text, 0.75)};
  }

  & > p {
    font-size: 24px;
    font-weight: normal;
    color: ${({ theme }) => rgba(theme.colors.text, 0.75)};
  }
`

export const Greetings = ({ fullName }) => {
  return (
    <Wrapper className="header">
      <span>Welcome</span>
      <Typography.Title>{fullName}</Typography.Title>
      <p>Answer the following questions so we can diagnose you.</p>
    </Wrapper>
  )
}
