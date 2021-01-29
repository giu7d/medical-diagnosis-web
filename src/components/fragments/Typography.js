import styled from 'styled-components'

const Title = styled.h1`
  font-size: 48px;
  font-weight: 600;
  text-transform: capitalize;
  color: ${({ theme }) => theme.colors.darkBackground};
`
const SubTitle = styled.h2`
  font-weight: 600;
  font-size: 24px;
  text-transform: capitalize;
  color: ${({ theme }) => theme.colors.text};
`

const SubSubTitle = styled.h3`
  font-weight: 600;
  font-size: 24px;
  color: ${({ theme }) => theme.colors.darkBackground};
`

export const Typography = {
  Title,
  SubTitle,
  SubSubTitle
}
