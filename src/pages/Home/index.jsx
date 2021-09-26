import { Title } from 'react-head'

import ItemList from '@/components/ItemList'

import { Wrapper, Container, StyledTitle, WrapperLogo, Logo } from './styles'

import logo from '@/assets/logo.svg'

import { stuff } from './stuff.json'

const Home = () => {
  return (
    <>
      <Title>React Stuff</Title>

      <Wrapper>
        <Container>
          <StyledTitle>React - Stuff</StyledTitle>
          <WrapperLogo>
            <Logo src={logo} alt='react logo' />
          </WrapperLogo>
          <ItemList stuff={stuff} />
        </Container>
      </Wrapper>
    </>
  )
}

export default Home
