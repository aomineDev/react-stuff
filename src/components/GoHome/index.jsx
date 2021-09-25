import { Link } from 'wouter'
import { Wrapper, Icon, IconWrapper } from './styles'

const GoHome = ({ top, left, right, bottom }) => {
  return (
    <Wrapper top={top} left={left} right={right} bottom={bottom}>
      <Link href='/'>
        <IconWrapper>
          <Icon className='fas fa-angle-left' />
        </IconWrapper>
      </Link>
    </Wrapper>
  )
}

export default GoHome
