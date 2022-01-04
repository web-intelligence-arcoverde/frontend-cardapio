import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import styles from './Products.module.css'
import ProductItem from 'src/components/atomic/ProductItem/ProductItem'

import { getProductRequest } from 'src/store/action/product.action'
import { addItemCart } from 'src/store/action/cart.action'

import { useDispatch, useSelector } from 'react-redux'

const Products = () => {
  const { product } = useParams()
  const dispatch = useDispatch()

  const { data, loading } = useSelector(state => state.product)

  useEffect(() => {
    dispatch(getProductRequest('Burguers'))
  }, [])

  function addCart(item) {
    //item.quantity = 1
    //item.currentPrice = item.price
    //item.isSelected = true
    //setCart(oldArray => [...oldArray, item])
  }

  function handleClick(product) {
    console.log(product)
    const item = {
      quantity: 1,
      currentPrice: product.price,
      isSelected: true,
      ...product,
    }

    dispatch(addItemCart(item))
  }

  return (
    <div className={styles.products}>
      <div className={styles.container}>
        <h2 className={styles.title}>{product ? product : 'Burguers'}</h2>
        <div className={styles.areaProducts}>
          {loading ? (
            <h2>Carregando</h2>
          ) : (
            <>
              {data.map(product => (
                <ProductItem
                  inputCart={handleClick}
                  key={product.id}
                  item={product}
                />
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default Products
