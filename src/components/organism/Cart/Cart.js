import CartItem from '../../atomic/CartItem/CartItem'
import styles from './Cart.module.css'
import { TextField } from '@material-ui/core'
import { useSelector, useDispatch } from 'react-redux'
import { changerVisibleModalCart } from 'src/store/action/cart.action'
import { createOrderRequest } from 'src/store/action/order.action'

import { Icons } from 'src/assets'
import { Section, AddressText, Header, SectionTitle, Title } from './style'

const { ArrowLeft } = Icons

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
            <h4>Frete</h4>
            <h4 className={styles.price}>
              {total.toLocaleString('pt-br', {
                style: 'currency',
                currency: 'BRL',
              })}
            </h4>
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

const Index = ({ isCheckout }) => {
  const { data, total, openCart } = useSelector(state => state.cart)

  return (
    <div
      className={`${styles.cart} ${
        openCart ? styles.openCart : styles.closeCart
      }`}
      style={{
        background: '#F2F2F2',
      }}
    >
      <Header>
        <Title>Checkout</Title>
      </Header>

      <div style={{ padding: '0px 10px' }}>
        <Section>
          <SectionTitle>Informações</SectionTitle>

          <AddressText>
            Precisamos das suas informações básicas para dar continuidade ao
            pedido
          </AddressText>

          <TextField
            id="outlined-basic"
            label="Nome"
            variant="outlined"
            size="small"
            type="text"
          />

          <TextField
            id="outlined-basic"
            label="Numero do telefone"
            variant="outlined"
            size="small"
            type="text"
          />
        </Section>

        <Section>
          <SectionTitle>Endereço</SectionTitle>

          <TextField
            id="outlined-basic"
            label="Informe seu CEP"
            variant="outlined"
            size="small"
            type="text"
          />
        </Section>

        <Section>
          <SectionTitle>Minhas compras</SectionTitle>
          <div className={styles.items}>
            {data.map(item => {
              return <CartItem key={item.id} product={item} />
            })}
          </div>
        </Section>

        <Section>
          <SectionTitle>Pagamento</SectionTitle>

          <div className={styles.total}>
            <h4>Sub-total</h4>
            <h4 className={styles.price}>
              {total.toLocaleString('pt-br', {
                style: 'currency',
                currency: 'BRL',
              })}
            </h4>
          </div>

          <div className={styles.total}>
            <h4>Frete</h4>
            <h4 className={styles.price}>
              {total.toLocaleString('pt-br', {
                style: 'currency',
                currency: 'BRL',
              })}
            </h4>
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
        </Section>

        {data.length > 0 ? (
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
        ) : (
          <p className={styles.none}>
            Você ainda não adicionou nenhum item ao carrinho.
          </p>
        )}
      </div>
    </div>
  )
}

export default Index
