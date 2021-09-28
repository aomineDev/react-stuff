import styled, { keyframes } from 'styled-components'
import { rgba } from 'polished'

export const Wrapper = styled.div`
  position: fixed;
  ${p => p.top && 'top: 20px;'}
  ${p => p.left && 'left: 20px;'}
  ${p => p.right && 'right: 20px;'}
  ${p => p.bottom && 'bottom: 20px;'}
`

const shake = keyframes`
  50% {
    transform: translateX(2px);
  }
`

export const IconWrapper = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: #0099ff;
  border-radius: 50%;
  box-shadow: 1px 1px 16px -4px ${rgba('#0099ff', 0.4)};
  transition: all 300ms;

  :hover {
    width: 100%;
    border-radius: 100px;
    padding-left: 12px;
    padding-right: 16px;
  }

  :hover > i {
    animation: ${shake} 1s ease-in-out infinite;
  }

  & > span {
    width: 0;
    display: inline-block;
    visibility: hidden;
    margin-left: 12px;
    transform: translateY(-1px);
    color: #fff;
    font-size: 14px;
    font-weight: 700;
    text-transform: capitalize;
    opacity: 0;
    transition: opacity 300ms;
  }

  :hover > span {
    width: 100%;
    visibility: visible;
    opacity: 1;
    transition-delay: 300ms;
  }
`

export const Icon = styled.i`
  transform: translateX(4px);
  color: #ffffff;
  font-size: 20px;
`
