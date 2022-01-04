import CartItem from '../../atomic/CartItem/CartItem'
import styles from './Cart.module.css'

import { useSelector, useDispatch } from 'react-redux'

import { changerVisibleModalCart } from 'src/store/action/cart.action'

const Cart = ({ isCheckout }) => {
  const cart = []
  const total = 0

  const { openCart, data } = useSelector(state => state.cart)
  const dispatch = useDispatch()

  console.log(data)

  const handleOpenCart = () => dispatch(changerVisibleModalCart())

  return (
    <div
      className={`${styles.cart} ${
        openCart ? styles.openCart : styles.closeCart
      }`}
    >
      <button onClick={handleOpenCart} className={styles.btnCloseCart}>
        ← Voltar
      </button>

      <h2 className={styles.title}>Seu pedido</h2>
      {data.length > 0 ? (
        <div className={styles.enterLeft}>
          <div className={styles.items}>
            {data.map(item => {
              return <CartItem key={item.id} product={item} />
            })}
          </div>
          <div className={styles.total}>
            <h4>Total</h4>
            <h4 className={styles.price}>R$ {total},00</h4>
          </div>
          <div className={styles.btn}>
            {!isCheckout ? (
              <button onClick={() => navigate('/checkout')}>
                Finalizar compra
              </button>
            ) : (
              ''
            )}
          </div>
        </div>
      ) : (
        <p className={styles.none}>
          Você ainda não adicionou nenhum item ao carrinho.
        </p>
      )}
    </div>
  )
}

export default Cart
