import { rgba } from 'polished'
import styled from 'styled-components'

export const CardList = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1;
  gap: 24px;

  .item {
    padding: 24px;
    background-color: ${({ theme }) => theme.colors.primary};
    border-radius: 20px;

    .header {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      margin: 0;
      padding: 0;

      h3 {
        font-weight: 600;
        font-size: 24px;
        color: ${({ theme }) => theme.colors.darkBackground};
      }

      .score {
        font-weight: 600;
        font-size: 18px;
        color: ${({ theme }) => rgba(theme.colors.darkBackground, 0.75)};
      }
    }
  }

  & > .item:first-child {
    background-color: ${({ theme }) => theme.colors.foreground};

    .header > h3 {
      font-size: 64px;
    }

    .warning {
      display: block;
      margin: 14px 0;
      font-weight: bold;
      font-size: 14px;
      color: ${({ theme }) => rgba(theme.colors.darkBackground, 0.75)};
    }

    p {
      font-weight: normal;
      font-size: 14px;
      color: ${({ theme }) => rgba(theme.colors.darkBackground, 0.75)};
    }
  }

  & > .item:nth-child(2) {
    opacity: 0.75;
  }

  & > .item:last-child {
    opacity: 0.5;
  }
`
