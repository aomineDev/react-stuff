import { Link } from 'wouter'

import { Wrapper, StyledImg, Title } from './styles'

const Item = ({ path, name, imgUrl }) => {
  return (
    <Wrapper>
      <Link href={path}>
        <StyledImg src={imgUrl} />
        <Title>{name}</Title>
      </Link>
    </Wrapper>
  )
}

export default Item
