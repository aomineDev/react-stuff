import { useState } from 'react'
import { Title } from 'react-head'

import GoHome from '@/components/GoHome'

import {
  Wrapper,
  StyledButton,
  MenuWrapper,
  Menu,
  MenuButton
} from './styles'

const buttons = [
  { background: '#9c65ed', icon: 'envelope' },
  { background: '#7f5dff', icon: 'comment-alt' },
  { background: '#5da3ff', icon: 'video' }
]

const FloatingButton = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Title>React Stuff - Floating Button</Title>

      <Wrapper>
        <GoHome top left />
        <StyledButton
          onClick={() => setOpen(!open)}
          open={open}
        >
          <i className='fas fa-plus' />
        </StyledButton>
        <MenuWrapper>
          <Menu>
            {buttons.map(({ background, icon }, i) => (
              <MenuButton
                key={i}
                background={background}
                index={i}
                open={open}
              >
                <i className={`fas fa-${icon}`} />
              </MenuButton>
            ))}
          </Menu>
        </MenuWrapper>
      </Wrapper>
    </>
  )
}

export default FloatingButton
