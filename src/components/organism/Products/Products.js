import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import styles from './Products.module.css'
import ProductItem from 'src/components/atomic/ProductItem/ProductItem'

import { getProductRequest } from 'src/store/action/product.action'
import { useDispatch, useSelector } from 'react-redux'

const Products = () => {
  const { product } = useParams()

  const data = useSelector(state => state.product.data)
  console.log(data)
  console.log(product)

  const getProducts = async category => {
    const response = await fetch(
      `https://my-json-server.typicode.com/danielmafra/api/${category}`,
    )
    const json = await response.json()
    setProducts(json)
  }

  const [products, setProducts] = React.useState([])

  useEffect(() => {
    getProducts('Burguers')
    getProductRequest('Burguers')
  }, [])

  function handleClick(product) {
    /*
    if you want to change the way the product is added
    to the cart in the version below, you can use this logic:
    if (mobile) {
        //do something different
      } else {
        addCart(product) //use the default function
      }
    */
  }

  return (
    <div className={styles.products}>
      <div className={styles.container}>
        <h2 className={styles.title}>{product ? product : 'Burguers'}</h2>
        <div className={styles.areaProducts}>
          {products.map(product => (
            <ProductItem
              inputCart={handleClick}
              key={product.id}
              item={product}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Products
