import styled from 'styled-components'

export const Wrapper = styled.div`
  transition: transform 0.3s ease-in-out;

  :hover {
    transform: translateY(-10px);
  }
`

export const StyledImg = styled.img`
  object-fit: cover;
  border-radius: 4px; 
`

export const Title = styled.h2`
  margin-top: 15px;
  text-align: center;
  font-size: 20px;
  font-weight: 500;
  text-transform: capitalize;
  color: #ffffff;

  :hover {
    text-decoration: underline;
  }
`
