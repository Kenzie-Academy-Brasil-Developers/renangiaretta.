import { useContext, useEffect } from 'react'
import { CartContext } from '../../contexts/CartContext'
import { StyledButtonPrimary, StyledButtonSecondary } from '../../styles/Buttons'
import { StyledCartModal } from './styles'
const CartModal = ( ) => {
   
  type iProduct = {
    id   : number,
    name : string,
    count: number,
    price: number,
    img  : 'img.png'
  }

  const { setModalView, productsOnCart, setProductsOnCart, productCount, addProductOnCart, removeProductOnCart, deleteProductOnCart } = useContext(CartContext)

  useEffect (() => {
    setProductsOnCart(productCount)
  },[])

  function closeModal () {
    setModalView(false)
  }

  const totalPrice = productsOnCart.reduce((sum, item) => sum + Number(item.count * item.price), 0)
  function sumOfItens() {
    return productsOnCart.reduce((sum, product) => sum + product.count, 0)
  }
  function handlePlus( item: iProduct ) {
    sumOfItens()
    const totalCount = sumOfItens()
    addProductOnCart(item)
    localStorage.setItem('TOTALCOUNT', `${totalCount}`)
  }
  function handleMinus( item: iProduct ) {
    sumOfItens()
    const totalCount = sumOfItens()
    removeProductOnCart(item)
    localStorage.setItem('TOTALCOUNT', `${totalCount}`)
  }

  
  return (
    <StyledCartModal className = 'modalBackground'>
    <div             className = 'modalContainer'>
    <div             className = 'modal-header'>
        <h2>Carrinho de compras</h2>
        <button className = 'close-btn' onClick = {closeModal}>
          X
        </button>
      </div>
        <ul>
            {productsOnCart.map((item) => (item.count > 0 ? (
              <li  key       = {item.id}>
              <img src       = {item.img} alt = '' />
              <div className = 'product-interactions-container'>
                  <h3>{item.name}</h3>
                  <div    className = 'counter-container'>
                  <button onClick   = {() => handlePlus(item)}>+</button>
                    <span>{(item.count)}</span>
                    <button onClick = {() => handleMinus(item)}>-</button>
                  </div>

                </div>
                    <button onClick = {() => deleteProductOnCart(item)}>
                      Remover
                    </button>
              </li>
            ): null ))}
        </ul> 
      <div className = 'total-price'>
        <h2>Total</h2>
        <span>{(totalPrice).toFixed(2)}</span>
      </div>
      <StyledButtonSecondary className='title1' onClick = {() => setProductsOnCart([])}>Remover todos</StyledButtonSecondary>
    </div>
  </StyledCartModal>)
}

export default CartModal