import styled from 'styled-components'

export const Background = styled.div`
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    transform: translateX(150px);
  }
`
