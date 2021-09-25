import { Link } from 'wouter'

import { WrapperLogo, Logo } from './styles'

import logo from '@/assets/logo.svg'

const Home = () => {
  const data = [
    { name: 'Password Validator', path: '/password-validator' }
  ]
  return (
    <div>
      <h1>React Stuffs</h1>
      <WrapperLogo>
        <Logo src={logo} alt='react logo' />
      </WrapperLogo>

      {data.map(({ name, path }, i) => <Link key={i} href={path}>{name}</Link>)}
    </div>
  )
}

export default Home
