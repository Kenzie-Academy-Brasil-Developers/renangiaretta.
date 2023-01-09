import React, { useContext } from 'react'
import { toast } from 'react-toastify'
import { CartContext } from '../../contexts/CartContext'
import { StyledProductCard } from '../ProductCard/styles'
import { StyledProductsContainer } from './styles'


type iProduct = {
  id   : number,
  name : string,
  count: number,
  price: number,
  img  : 'img.png'
}

const ProductsContainer = (  ) => {

  const {  products, loadProducts, cartList, setCartList, filter, } = useContext(CartContext)

  function addProductToCart ( item: iProduct ) {
    setCartList([...cartList, item])
    toast('Produto adicionado com sucesso! Verifique o carrinho.')
  }
  const filteredProducts = (() => {
    if(!filter){
      return products
    }
    return products.filter((element) => element.name.toLowerCase().includes(filter));
  })();
  function teste() {
    localStorage.clear()
  }

  return (

    (loadProducts ? <StyledProductsContainer>
      <ul>
        { filteredProducts.map((item: any) => 

            <StyledProductCard key       = {item.id}>
            <div               className = 'img-container'>
            <img               src       = {item.img} alt = '' />
              </div>
              <div className = 'texts'>
              <h1  className = ' title1'>{item.name}</h1>
                <h2>{item.category}</h2>
                <span>{(item.price).toFixed(2)}</span>
              </div>
              <button onClick = {() => {addProductToCart(item)}}>ADICIONAR</button>
            </StyledProductCard>   
        ) }
        <button onClick = {teste}>teste</button>
      </ul>
    </StyledProductsContainer> : null)
  )
}

export default ProductsContainer