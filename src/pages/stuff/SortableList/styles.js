import styled from 'styled-components'
import { rgba } from 'polished'

export const Wrapper = styled.div`
  min-height: 100vh;
  display: grid;
  place-items: center;
  background-color: #f5f5f5;
`
export const Card = styled.div`
  position: relative;
  overflow: hidden;
  width: 300px;
  padding: 1rem 0;
  border-radius: 1rem;
  background-color: #fff;
  box-shadow: 0 4px 15px ${rgba('black', 0.05)};
`

export const Item = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem 2rem 1rem 1rem;
`

export const ItemImage = styled.img`
  width: 44px;
  height: 44px;
  padding: 2px;
  margin-right: 0.75rem;
  border-radius: 50%;
  border: 1px solid ${rgba('black', 0.05)};
  object-fit: cover;
`

export const WrapperTitle = styled.div`
  flex: 1;
  overflow: hidden;
`

export const ItemTitle = styled.div`
  font-size: 0.875rem;
  font-weight: 700;
  color: ${rgba('black', 0.85)};
`

export const ItemSubtitle = styled.div`
  color: ${rgba('black', 0.38)};
  font-size: 0.75rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

export const ItemLikes = styled.div`
  display: flex;
  align-items: center;
  margin-left: 10px;
  font-size: 0.75rem;
  color: ${rgba('black', 0.38)};
  cursor: grab;

  & > i {
    margin-right: 0.25rem;
    font-size: 1rem;
    color: #fe0f7c;
  }
`
