import HomeNav from 'src/components/organism/Nav/HomeNav'
import Products from 'src/components/organism/Products/Products'
import Cart from 'src/components/organism/Cart/Cart'
import ObsItem from 'src/components/atomic/CartObsItem/ObsItem'

import { BrowserRouter as Router, Route } from 'react-router-dom'

import styles from './Home.module.css'

import { useDispatch, useSelector } from 'react-redux'

import { changerVisibleModalCart } from 'src/store/action/cart.action'

const Home = () => {
  const cart = useSelector(state => state.cart.data)
  const openObs = ''
  const openCart = false

  const dispatch = useDispatch()

  function handleOpenCart() {
    dispatch(changerVisibleModalCart())
  }

  return (
    <div className={styles.home}>
      <div className={styles.btnCart}>
        <button onClick={handleOpenCart}>
          <ion-icon name="cart-outline" />
          {cart.length !== 0 ? (
            <div className={styles.badgeQuantity}>{cart.length}</div>
          ) : (
            ''
          )}
        </button>
      </div>
      <HomeNav />

      <Router>
        <Route path="/cardapio" component={Products} />
        <Route path="/cardapio/:product" component={Products} />
      </Router>
      <Cart />
    </div>
  )
}

export default Home
