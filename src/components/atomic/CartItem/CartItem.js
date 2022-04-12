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
        <h6 style={{ marginTop: '6px' }}>adicionar descrição</h6>
      </div>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
        }}
      >
        <h4 className={styles.price}>
          {product.currentPrice.toLocaleString('pt-br', {
            style: 'currency',
            currency: 'BRL',
          })}
        </h4>

        <div className={styles.quantity}>
          {!isFinish && (
            <button
              style={{ padding: '4px' }}
              onClick={() => decrementItem(product)}
            >
              -
            </button>
          )}
          <p>{product.quantity}</p>
          {!isFinish && (
            <button
              style={{ padding: '4px' }}
              onClick={() => incrementItem(product)}
            >
              +
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default CartItem
