import { rgba } from 'polished'
import styled from 'styled-components'

export const GlassCard = styled.div`
  grid-area: card;
  display: flex;
  height: fit-content;
  flex-direction: column;
  align-items: center;
  justify-self: flex-end;

  gap: 24px;
  padding: 24px;
  width: 100%;
  max-width: 450px;

  background-color: ${({ theme }) => rgba(theme.colors.foreground, 0.75)};
  border-radius: 20px;
  backdrop-filter: blur(25px);
`
