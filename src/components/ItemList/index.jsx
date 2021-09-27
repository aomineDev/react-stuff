import Item from '../Item'

import { Wrapper } from './styles'

const ItemList = ({ stuff }) => {
  return (
    <Wrapper>
      {stuff.map(({ id, name, path, imgUrl }) => <Item key={id} path={path} name={name} imgUrl={imgUrl} />)}
    </Wrapper>
  )
}

export default ItemList
