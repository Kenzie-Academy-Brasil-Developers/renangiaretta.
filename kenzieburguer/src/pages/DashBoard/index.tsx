import React, { useContext } from 'react'
import DashBoardHeader from '../../components/DashBoardHeader'
import ProductsContainer from '../../components/ProductsContainer'
import { AuthContext } from '../../contexts/AuthContext'
import { StyledDashBoard } from './styles'


const DashBoard = () => {
  const { loadUser } = useContext(AuthContext)
  return (
      
      <StyledDashBoard>
        {(loadUser ? 
          <>
            <DashBoardHeader/>
            <ProductsContainer/> 
          </>
        : null)}
      </StyledDashBoard>
    

  )
  }
export default DashBoard