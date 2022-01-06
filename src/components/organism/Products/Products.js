import { useEffect } from 'react'
import styles from './Products.module.css'
import ProductItem from 'src/components/atomic/ProductItem/ProductItem'

import { getProductRequest } from 'src/store/action/product.action'
import { addItemCart } from 'src/store/action/cart.action'

import { useDispatch, useSelector } from 'react-redux'

import Loading from 'src/components/atomic/Loading'

const Products = () => {
  const dispatch = useDispatch()

  const { data, loading, searchProduct } = useSelector(state => state.product)

  useEffect(() => {
    dispatch(getProductRequest(searchProduct))
  }, [searchProduct])

  function handleClick(product) {
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
        <h2 className={styles.title}>
          {searchProduct ? searchProduct : 'Burguers'}
        </h2>
        <div className={styles.areaProducts}>
          {loading ? (
            <Loading />
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
