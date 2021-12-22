import React, { useState } from 'react'
import ButtonDash from 'src/components/atomic/ButtonDash'
import { DashboardMenu, Container, ImgDraw } from './styled'
import User from 'assets/icons/user.svg'
import Sell from 'assets/icons/sell.svg'
import MenuFood from 'assets/icons/menufood.svg'
import Draw from 'assets/icons/undraw_beer.svg'

function Dashboard() {
  const [optionComponent, setOptionComponent] = useState('default')
  const Components = {
    default: <ImgDraw src={Draw} />,
    usuario: <h1>Usuário</h1>,
    cardapio: <h1>Cardápio</h1>,
    vendas: <h1>Vendas</h1>,
  }
  return (
    <Container>
      <DashboardMenu>
        <h2>Dashboard</h2>
        <ButtonDash
          img={User}
          text="Usuário"
          onClick={() => setOptionComponent('usuario')}
        />
        <ButtonDash
          text="Cardápio"
          onClick={() => setOptionComponent('cardapio')}
          img={MenuFood}
        />
        <ButtonDash
          text="Vendas"
          onClick={() => setOptionComponent('vendas')}
          img={Sell}
        />
      </DashboardMenu>
      {Components[optionComponent]}
    </Container>
  )
}

export default Dashboard
