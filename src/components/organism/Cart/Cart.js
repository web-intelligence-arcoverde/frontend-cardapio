import { useNavigate } from 'react-router-dom'
import CartItem from '../../atomic/CartItem/CartItem'
import styles from './Cart.module.css'

const Cart = ({ isCheckout }) => {
  const navigate = useNavigate()

  const cart = []
  const total = 0
  const openCart = false

  return (
    <div
      className={`${styles.cart} ${
        openCart ? styles.openCart : styles.closeCart
      }`}
    >
      {mobile && (
        <button onClick={handleOpenCart} className={styles.btnCloseCart}>
          ← Voltar
        </button>
      )}
      <h2 className={styles.title}>Seu pedido</h2>
      {cart.length > 0 ? (
        <div className={styles.enterLeft}>
          <div className={styles.items}>
            {cart.map(item => (
              <CartItem key={item.id} product={item} />
            ))}
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
