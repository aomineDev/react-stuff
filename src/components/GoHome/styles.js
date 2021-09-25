import styled, { keyframes } from 'styled-components'

export const Wrapper = styled.div`
  position: fixed;
  ${p => p.top && 'top: 20px;'}
  ${p => p.left && 'left: 20px;'}
  ${p => p.right && 'right: 20px;'}
  ${p => p.bottom && 'bottom: 20px;'}
`

const shake = keyframes`
  50% {
    transform: translateX(-1px);
  }
`

export const IconWrapper = styled.button`
  width: 40px;
  height: 40px;
  background-color: #0099ff;
  border-radius: 50%;
  box-shadow: 2px 2px 20px -4px rgba(0, 0, 0, .3);

  &:hover .fas {
    animation: ${shake} 1s ease-in-out infinite;
  }
`

export const Icon = styled.i`
  color: #ffffff;
  font-size: 20px;
  transition-property: transform;
  transition-duration: 0.5s;
`
