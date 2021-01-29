import { rgba } from 'polished'
import styled from 'styled-components'

export const Question = styled.div`
  grid-area: question;
  display: flex;
  flex-direction: row;
  gap: 14px;

  & > div {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  p {
    font-weight: normal;
    font-size: 18px;
    color: ${({ theme }) => rgba(theme.colors.text, 0.5)};
  }
`
