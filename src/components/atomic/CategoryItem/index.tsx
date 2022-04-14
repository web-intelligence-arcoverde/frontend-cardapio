import { useDispatch } from 'react-redux'
import { changerProductType } from 'src/store/action/product.action'

import { Container } from './style'

const CategoryItem = ({ item, onClick }: any) => {
  const dispatch = useDispatch()

  const changerType = name => {
    /* readProductsByCategoryRequest */
    dispatch(changerProductType(name))
  }

  return (
    <Container
      selected={item.isActive}
      onClick={() => {
        onClick(item.id)
        changerType(item.name)
      }}
    >
      {item.icon}
      <div style={{ marginTop: '8px' }}>{item.name}</div>
    </Container>
  )
}

export default CategoryItem
