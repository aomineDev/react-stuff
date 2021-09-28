import { Title } from 'react-head'

import ItemList from '@/components/ItemList'

import { Wrapper, Hero, Container, StyledTitle, WrapperLogo, Logo, WrapperItem } from './styles'

import logo from '@/assets/logo.svg'

import { stuff } from './stuff.json'

const Home = () => {
  return (
    <>
      <Title>React Stuff</Title>

      <Wrapper>
        <Hero>
          <StyledTitle>React - Stuff</StyledTitle>
          <WrapperLogo>
            <Logo src={logo} alt='react logo' />
          </WrapperLogo>
        </Hero>
        <WrapperItem>
          <Container>
            <ItemList stuff={stuff} />
          </Container>
        </WrapperItem>
      </Wrapper>
    </>
  )
}

export default Home
