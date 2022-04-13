import { useDispatch } from 'react-redux'
import styles from './CartItem.module.css'

import { changerProductSelected } from 'src/store/action/product.action'
import {
  incrementItemCart,
  decrementItemCart,
} from 'src/store/action/cart.action'

import { Icons } from 'src/assets'

const { Menos, Mais } = Icons

const CartItem = ({ product, isFinish }) => {
  const dispatch = useDispatch()

  const incrementItem = product => {
    dispatch(incrementItemCart(product.id))
  }
  const decrementItem = product => {
    dispatch(changerProductSelected(product.id))
    dispatch(decrementItemCart(product.id))
  }

  console.log(product)

  const openObs = false

  const openObsBox = () => {}

  return (
    <div className={`${styles.item} ${styles.enterLeft}`}>
      <img
        src={product.img}
        alt={product.title}
        className={styles.bgImage}
        height="100%"
        width="100%"
      />

      <div className={styles.product}>
        <h4>{product.title}</h4>
        <h6>adicionar descrição</h6>
      </div>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-around',
          alignItems: 'flex-end',
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
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                background: '#E1E1E1',
                borderRadius: '4px',
                height: '36px',
                width: '36px',
              }}
              onClick={() => decrementItem(product)}
            >
              <Menos />
            </button>
          )}
          <p style={{ color: 'rgb(255, 35, 51)' }}>{product.quantity}</p>
          {!isFinish && (
            <button
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                background: 'rgb(255, 35, 51)',
                borderRadius: '4px',
                height: '36px',
                width: '36px',
              }}
              onClick={() => incrementItem(product)}
            >
              <Mais />
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default CartItem
