import styled, { keyframes } from 'styled-components'

export const WrapperLogo = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`

const spin = keyframes`
  100% {
    transform: rotate(360deg);
  }
`

export const Logo = styled.img`
  height: 40vmin;
  animation: ${spin} infinite 20s linear;
`
