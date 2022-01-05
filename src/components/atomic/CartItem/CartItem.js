import { useDispatch } from 'react-redux'
import styles from './CartItem.module.css'

import { changerProductSelected } from 'src/store/action/product.action'
import {
  incrementItemCart,
  decrementItemCart,
} from 'src/store/action/cart.action'

const CartItem = ({ product, isFinish }) => {
  const dispatch = useDispatch()

  const incrementItem = product => {
    dispatch(incrementItemCart(product.id))
  }
  const decrementItem = product => {
    dispatch(changerProductSelected(product.id))
    dispatch(decrementItemCart(product.id))
  }

  const openObs = false

  const openObsBox = () => {}

  return (
    <div className={`${styles.item} ${styles.enterLeft}`}>
      <img src={product.img} alt={product.title} className={styles.bgImage} />

      <div className={styles.product}>
        <h4>{product.title}</h4>
        {!isFinish && (
          <button onClick={openObsBox}>
            {product.obs ? product.obs : 'Adicionar observação'}
          </button>
        )}
      </div>
      <h4 className={styles.price}>
        {product.currentPrice.toLocaleString('pt-br', {
          style: 'currency',
          currency: 'BRL',
        })}
      </h4>

      <div className={styles.quantity}>
        {!isFinish && <button onClick={() => decrementItem(product)}>-</button>}
        <p>{product.quantity}</p>
        {!isFinish && <button onClick={() => incrementItem(product)}>+</button>}
      </div>
    </div>
  )
}

export default CartItem
