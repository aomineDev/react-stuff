import { StyledLink } from './styles'

const Item = ({ path, name }) => {
  return <StyledLink href={path}>{name}</StyledLink>
}

export default Item
