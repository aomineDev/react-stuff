import { useState } from 'react'
import { ReactSortable } from 'react-sortablejs'
import { Title } from 'react-head'

import GoHome from '@/components/GoHome'

import {
  Wrapper,
  Card,
  Item,
  ItemImage,
  ItemTitle,
  ItemSubtitle,
  ItemLikes,
  WrapperTitle
} from './styles'

import { data } from './data.json'

const SortableList = () => {
  const [users, setUsers] = useState(data)

  return (
    <>
      <Title>React Stuff - Sortable List</Title>

      <Wrapper>
        <GoHome top left />
        <Card>
          <ReactSortable list={users} setList={setUsers}>
            {users.map(({ id, title, subtitle, avatarUrl, likes }) => (
              <Item key={id}>
                <ItemImage src={avatarUrl} />
                <WrapperTitle>
                  <ItemTitle>{title}</ItemTitle>
                  <ItemSubtitle>{subtitle}</ItemSubtitle>
                </WrapperTitle>
                <ItemLikes>
                  <i className='fas fa-heart' />
                  <span>{likes}</span>
                </ItemLikes>
              </Item>
            ))}
          </ReactSortable>
        </Card>
      </Wrapper>
    </>
  )
}

export default SortableList
