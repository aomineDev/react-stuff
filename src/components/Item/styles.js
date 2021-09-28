import styled from 'styled-components'

export const Wrapper = styled.article`
  border-radius: 20px;
  overflow: hidden;
  margin-bottom: 30px;
  box-shadow: 0 6px 15px rgba(36, 37, 38, 0.08);
  transition-property: transform, box-shadow;
  transition-duration: 300ms;
  transition-timing-function: ease-in-out;

  :hover {
    transform: translateY(-10px);
    box-shadow: 5px 12px 20px rgba(36, 37, 38, 0.13);
  }
`

export const StyledImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

export const Title = styled.h2`
  padding: 20px;
  background-color: #fff;
  text-align: center;
  text-transform: capitalize;
  color: #262626;

  :hover {
    text-decoration: underline;
  }
`
