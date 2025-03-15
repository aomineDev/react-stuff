import styled, { keyframes } from 'styled-components'

export const Wrapper = styled.div`
  height: 100vh;
  font-family: 'Poppins', sans-serif;
  overflow-y: scroll;

  @media screen and (min-width: 720px) {
    ::-webkit-scrollbar {
      width: 10px;
      height: 10px;
    }
    ::-webkit-scrollbar-track {
      background-color: rgba(41, 41, 41, 1);
    }
    ::-webkit-scrollbar-thumb {
      border-radius: 5px;
      background-color: rgba(255, 255, 255, .5);
    }
  }
`

export const Container = styled.div`
  width: 80%;
  max-width: 1440px;
  min-width: 280px;
  margin-right: auto;
  margin-left: auto;
`

export const Hero = styled.section`
  padding-bottom: 120px;
  background: linear-gradient(315deg, #efd5ff 0%, #515ada 100%); 
`

export const StyledTitle = styled.h1`
  padding-top: 10px;
  margin-bottom: 20px;
  color: #61DAFB;
  text-align: center;
  font-size: 80px;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: capitalize;
  font-family: 'Caveat', sans-serif;
  text-shadow: 1px 1px 0 #20829c,
              2px 2px 0 #20829c,
              3px 3px 0 #20829c,
              4px 4px 0 #20829c;

  @media screen and (max-width: 600px) {
    font-size: 40px;
  }
`

export const WrapperLogo = styled.div`
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
  filter: drop-shadow(4px 4px 0 #20829c);
`

export const WrapperItem = styled.main`
  border-top-left-radius: 64px;
  border-top-right-radius: 64px;
  margin-top: -80px;
  padding-top: 30px;
  background-color: #F3F1F5;

  @media screen and (max-width: 720px) {
    border-top-left-radius: 32px;
    border-top-right-radius: 32px;
  }
`
