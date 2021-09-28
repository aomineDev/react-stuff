import styled, { css } from 'styled-components'
import { darken } from 'polished'

export const Wrapper = styled.div`
  min-height: 100vh;
  background-color: #8739f9;
`

const position = css`
  position: fixed;
  bottom: 20px;
  right: 20px;
`

export const StyledButton = styled.button`
  ${position}
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background-color: #d343ff;
  font-size: 30px;
  color: #fff;
  transition: background-color 150ms;
  box-shadow: 0 3px 5px -1px rgb(0, 0, 0, 0.2),
              0 6px 10px 0 rgb(0, 0, 0, 0.14),
              0 1px 18px 0 rgb(0, 0, 0, 0.12);

  :hover {
    background-color: ${darken(0.02, '#d343ff')};
  }

  & > i {
    transition: transform 150ms;
    transform: rotate(${p => !p.open ? '0' : '-135deg'});
  }
`

export const MenuWrapper = styled.div`
  ${position}
`

export const Menu = styled.div`
  position: absolute;
  right: 0;
  bottom: 64px;
  width: 64px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const closeStyles = css`
  transform: scale(0);
  opacity: 0;
`

export const MenuButton = styled.button`
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
  border-radius: 50%;
  background-color: ${p => p.background};
  color: #fff;
  box-shadow: 0 3px 1px -2px rgba(0,0,0,.2),
              0 2px 2px 0 rgba(0,0,0,.14),
              0 1px 5px 0 rgba(0,0,0,.12);
  transition: transform 300ms ${p => p.index * 0.1}s,
              opacity 300ms ${p => p.index * 0.1}s,
              background-color 150ms;
  transform-origin: bottom;
  ${p => !p.open && closeStyles}

  :hover {
    background-color: ${p => darken(0.02, p.background)};
  }
`
