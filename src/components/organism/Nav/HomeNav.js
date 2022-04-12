import styles from './HomeNav.module.css'

import { ReactComponent as PizzaIcon } from 'src/assets/icons/pizza-icon.svg'
import { ReactComponent as BurguersIcon } from 'src/assets/icons/burguers-icon.svg'
import { ReactComponent as CombosIcon } from 'src/assets/icons/combos-icon.svg'
import { ReactComponent as DrinksIcon } from 'src/assets/icons/drinks-icon.svg'

import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { changerProductType } from 'src/store/action/product.action'

const HomeNav = () => {
  const dispatch = useDispatch()

  const changerType = name => {
    dispatch(changerProductType(name))
  }

  const [routes, setRoutes] = useState([
    {
      id: 1,
      name: 'Pizza',
      isActive: false,
      icon: <PizzaIcon />,
    },
    {
      id: 2,
      name: 'Bebidas',
      isActive: false,
      icon: <DrinksIcon />,
    },
    {
      id: 3,
      name: 'Sobremesas',
      isActive: false,
      icon: <PizzaIcon />,
    },
    {
      id: 4,
      name: 'Combos',
      isActive: false,
      icon: <CombosIcon />,
    },
    {
      id: 5,
      name: 'Burguers',
      isActive: false,
      icon: <BurguersIcon />,
    },
  ])

  const onClick = id => {
    let index = routes.map(e => e.id).indexOf(id)
    let updateRoutes = [...routes]

    //Verificar se tem outro fora o clicado ativado
    updateRoutes.map(item => {
      if (item.id !== id && item.isActive) {
        let searchOtherActive = routes.map(e => e.id).indexOf(item.id)
        updateRoutes[searchOtherActive].isActive = false
      }
    })

    updateRoutes[index].isActive = !updateRoutes[index].isActive
    setRoutes(updateRoutes)
  }

  return (
    <nav className={styles.nav}>
      {routes.map(item => {
        return (
          <div
            className={`${styles.container} ${item.isActive && styles.active}`}
            onClick={() => {
              onClick(item.id)
              changerType(item.name)
            }}
          >
            {item.icon}
            <div style={{ marginTop: '10px' }}>{item.name}</div>
          </div>
        )
      })}
    </nav>
  )
}

export default HomeNav
