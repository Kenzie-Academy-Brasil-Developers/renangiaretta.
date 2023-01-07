import React from 'react'
import { StyledProductCard } from './styles'

const ProductCard = ( item ) => {
  return (
    <StyledProductCard>
        <div className='imagem'>imagem</div>
        <div className='texts'>
            <h1>a</h1>
            <h2>{item.category}</h2>
            <span>{item.price}</span>
            <button>ADICIONAR</button>

        </div>
    </StyledProductCard>
  )
}

export default ProductCard