import React from 'react'
import DashBoardHeader from '../../components/DashBoardHeader'
import ProductsContainer from '../../components/ProductsContainer'
import { StyledDashBoard } from './styles'

const DashBoard = () => {
  return (
    <StyledDashBoard>
        <DashBoardHeader/>
        <ProductsContainer/>
    </StyledDashBoard>
  )
}

export default DashBoard