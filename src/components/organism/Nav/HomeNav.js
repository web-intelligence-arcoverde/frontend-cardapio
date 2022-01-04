import { NavLink } from 'react-router-dom'
import styles from './HomeNav.module.css'
import { ReactComponent as PizzaIcon } from 'src/assets/icons/pizza-icon.svg'
import { ReactComponent as BurguersIcon } from 'src/assets/icons/burguers-icon.svg'
import { ReactComponent as CombosIcon } from 'src/assets/icons/combos-icon.svg'
import { ReactComponent as DessertsIcon } from 'src/assets/icons/desserts-icon.svg'
import { ReactComponent as DrinksIcon } from 'src/assets/icons/drinks-icon.svg'

const HomeNav = () => {
  return (
    <nav className={styles.nav}>
      <NavLink to="/cardapio/Pizza" activeClassName={styles.active}>
        <PizzaIcon />
        Pizza
      </NavLink>
      <NavLink to="/Bebidas" activeClassName={styles.active}>
        <DrinksIcon />
        Bebidas
      </NavLink>
      <NavLink to="/Sobremesas" activeClassName={styles.active}>
        <DessertsIcon />
        Sobremesas
      </NavLink>
      <NavLink to="/Combos" activeClassName={styles.active}>
        <CombosIcon />
        Combos
      </NavLink>
      <NavLink to="/Burguers" activeClassName={styles.active}>
        <BurguersIcon />
        Burguers
      </NavLink>
    </nav>
  )
}

export default HomeNav
