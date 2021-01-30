import { rgba } from 'polished'
import styled from 'styled-components'

export const BaseButton = styled.button`
  border: none;
  cursor: pointer;
  outline: none;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0.1);
  transition: 200ms opacity ease-out;
  &::-moz-focus-inner {
    border: none;
  }
  &:active {
    opacity: 0.5;
    border-style: none;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

  &:hover {
    opacity: 0.5;
  }
`

export const Button = styled(BaseButton)`
  display: flex;
  flex: 1;
  width: 100%;
  padding: 14px 24px;

  justify-content: center;
  align-items: center;

  background: ${({ theme }) => rgba(theme.colors.text, 0.75)};
  border-radius: 14px;

  font-style: normal;
  font-size: 24px;
  color: ${({ theme }) => theme.colors.foreground};
  cursor: pointer;
`
