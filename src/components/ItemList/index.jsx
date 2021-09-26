import Item from '../Item'

import { Wrapper } from './styles'

const ItemList = ({ stuff }) => {
  return (
    <Wrapper>
      {stuff.map(({ name, path }, i) => <Item key={i} path={path} name={name} />)}
    </Wrapper>
  )
}

export default ItemList
