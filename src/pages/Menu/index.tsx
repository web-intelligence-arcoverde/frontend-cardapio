import Products from 'src/components/organism/ListProduts/Products'
import Cart from 'src/components/organism/Cart/Cart'

import IconCartHome from 'src/components/molecules/IconCartHome'

import CategoriesContainerSwiper from 'src/components/organism/CategoriesContainerSwiper'
import { Container } from './style'

export const Home = () => {
  return (
    <Container>
      <IconCartHome />
      <CategoriesContainerSwiper />
      <Products />
      <Cart />
    </Container>
  )
}
