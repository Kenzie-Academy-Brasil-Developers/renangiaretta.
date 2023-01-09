import React, { useContext, useEffect, useState } from 'react'
import { CartContext } from '../../contexts/CartContext'
import CartModal from '../CartModal'
import { StyledDashBoardHeader } from './styles'
import logo from './../../assets/burgerKenzieLogo.png'
import cartImg from './../../assets/cartimg.png'
import exitImg from './../../assets/exit.png'
import { useNavigate } from 'react-router-dom'
const DashBoardHeader = (  ) => {

  const { modalView, setModalView, setFilter,  } = useContext(CartContext)
  const navigate = useNavigate()
  function showModal () {
    setModalView(true)
  }
  const numOfItens = localStorage.getItem('TOTALCOUNT')

  
  function exitPage () {
    navigate('/login')
    localStorage.clear()
  }

  return (
    <StyledDashBoardHeader>
      {(modalView ? <CartModal/> : null)}
      <div     className = 'header-container'>
        <img   src       = {logo} alt       = '' />
        <div   className = 'user-interactions-container'>
        <input type      = 'text' className = 'placeholder-text' placeholder = 'Pesquisar' onChange = {(event) => setFilter(event.target.value)}/>
          <div>
            <button onClick = {showModal}>
            <img    src     = {cartImg} alt = '' />
              <span>{numOfItens}</span>
            </button>
          </div>
          <button onClick = {exitPage}>
           <img    src     = {exitImg} alt = '' />
          </button>
        </div>
      </div>
    </StyledDashBoardHeader>
  )
}

export default DashBoardHeader