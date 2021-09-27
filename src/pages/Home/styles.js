import styled, { keyframes } from 'styled-components'

export const Wrapper = styled.div`
  min-height: 100vh;
  background: linear-gradient(90deg, #4b6cb7 0%, #182848 100%);
  font-family: 'Poppins', sans-serif;
`

export const Container = styled.div`
  width: 80%;
  max-width: 1440px;
  min-width: 280px;
  margin-right: auto;
  margin-left: auto;
`

export const StyledTitle = styled.h1`
  padding-top: 30px;
  margin-bottom: 30px;
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
  margin-bottom: 30px;
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
