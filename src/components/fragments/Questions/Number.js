import styled from 'styled-components'

export const QuestionNumber = styled.div`
  display: flex;
  flex: 0 0 64px;
  width: 64px;
  height: 64px;
  font-weight: 600;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  font-size: 24px;
  color: ${({ theme }) => theme.colors.foreground};
  background-color: ${({ theme }) => theme.colors.secondary};
`
