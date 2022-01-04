import HomeNav from 'src/components/organism/Nav/HomeNav'
import Products from 'src/components/organism/Products/Products'

import { BrowserRouter as Router, Route } from 'react-router-dom'

import styles from './Home.module.css'

const Home = () => {
  const cart = []
  const openObs = ''
  const openCart = false

  function handleOpenCart() {}

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
    </div>
  )
}

export default Home
