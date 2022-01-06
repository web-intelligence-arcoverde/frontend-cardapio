import CartItem from '../../atomic/CartItem/CartItem'
import styles from './Cart.module.css'

import { useSelector, useDispatch } from 'react-redux'
import { changerVisibleModalCart } from 'src/store/action/cart.action'
import { createOrderRequest } from 'src/store/action/order.action'

const Cart = ({ isCheckout }) => {
  const { openCart, data, total } = useSelector(state => state.cart)
  const { user } = useSelector(state => state.user)
  const dispatch = useDispatch()

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
            <h4 className={styles.price}>
              {total.toLocaleString('pt-br', {
                style: 'currency',
                currency: 'BRL',
              })}
            </h4>
          </div>
          <div className={styles.btn}>
            {!isCheckout ? (
              <button
                onClick={() =>
                  dispatch(createOrderRequest({ data, total, user }))
                }
              >
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
