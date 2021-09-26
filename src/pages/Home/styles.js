import styled, { keyframes } from 'styled-components'

export const Wrapper = styled.div`
  min-height: 100vh;
  background-color: #282c34;
`

export const Container = styled.div`
  width: 80%;
  max-width: 1440px;
  min-width: 300px;
  margin-right: auto;
  margin-left: auto;
`

export const StyledTitle = styled.h1`
  padding-top: 20px;
  margin-bottom: 20px;
  text-align: center;
  color: #ffffff;
  font-size: 36px;
  font-weight: 600;
  letter-spacing: 10px;
  text-transform: uppercase;

  @media screen and (max-width: 600px) {
  font-size: 20px;
  }
`

export const WrapperLogo = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
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
