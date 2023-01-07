import React, { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'
import CartModal from '../CartModal'
import { StyledDashBoardHeader } from './styles'

const DashBoardHeader = ( ) => {

  const { modalView, setModalView } = useContext(CartContext)

  function showModal () {
    setModalView(true)
  }


  return (
    <StyledDashBoardHeader>
      {(modalView ? <CartModal/> : null)}
        <div>Logo</div>
        <div>
            <button onClick={showModal}>CARRINHO</button>
            <button>PESQUISAR</button>
            <button>SAIR</button>
        </div>
    </StyledDashBoardHeader>
  )
}

export default DashBoardHeader