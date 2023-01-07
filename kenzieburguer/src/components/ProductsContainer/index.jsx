import React, { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'
import { StyledProductsContainer } from './styles'

const ProductsContainer = (  ) => {

  const {  products, loadProducts, cartList, setCartList } = useContext(CartContext)


  function addProductToCart ( item ) {
    setCartList([...cartList, item])
    console.log(cartList)
  }

  return (
    (loadProducts ? <StyledProductsContainer>
      <ul>
        { products.map((item) => 

            <li key={item.id}>
              <div className='imagem'>
                <img src={item.img} alt="" />
              </div>
            <div className='texts'>
            <h1>{item.name}</h1>
            <h2>{item.category}</h2>
            <span>{(item.price).toFixed(2)}</span>
            <button onClick={() => {addProductToCart(item)}}>ADICIONAR</button>
            </div>
            </li>   
        ) }

      </ul>
    </StyledProductsContainer> : null)
  )
}

export default ProductsContainer