import { useDispatch } from 'react-redux'
import styles from './ProductItem.module.css'
import { changerProductSelected } from 'src/store/action/product.action'

const ProductItem = ({ inputCart, item }) => {
  const dispatch = useDispatch()

  return (
    <div
      className={`${styles.card} ${styles.enterLeft} ${
        item.isSelected && styles.disable
      }`}
      key={item.id}
      onClick={
        !item.isSelected
          ? () => {
              inputCart(item)
              dispatch(changerProductSelected(item.id))
            }
          : () => false
      }
    >
      {item.offer && (
        <div className={styles.offer}>
          <p>Oferta</p>
        </div>
      )}
      <img src={item.img} alt={item.title} />
      <div>
        <h3 className={styles.title}>{item.title}</h3>
        <p className={styles.description}>{item.description}</p>
        <p className={styles.price}>
          {item.price.toLocaleString('pt-br', {
            style: 'currency',
            currency: 'BRL',
          })}
        </p>
      </div>
    </div>
  )
}

export default ProductItem
