import { useContext, useState } from 'react'
import { CartContext } from '../../contexts/CartContext'
import './styles.css'




const CartModal = () => {
  
  type Product = {
    id: number,
    name: string,
    count: number,
    price: number
  }

  const { setModalView,  cartList, } = useContext(CartContext)
  function closeModal (): void {
    setModalView(false)
    console.log(cartList)
  }


  const equalProducts = cartList.reduce((prod, element ) => {
    if(!prod[element.name]) {
      prod[element.name] = {
        count: 0,
        price: element.price
      }
    }
    prod[element.name].count++
    return prod
  }, {})


  const productCount: Product[] = Object.keys(equalProducts).map((name, index) => ({
    id: index,
    name: name,
    count: equalProducts[name].count,
    price: equalProducts[name].price
  }))


  const [productsOnCart, setProductsOnCart] = useState(productCount)
  function addProductOnCart(item: Product): void {
    const plusProduct = productsOnCart.map((prod) => (prod.id === item.id ? { ...prod, count: prod.count + 1 } : prod));
    setProductsOnCart(plusProduct);
    console.log(productCount);
    console.log(equalProducts)
  }
 
  function removeProductOnCart(item: Product) {
    const minusProduct = productsOnCart.map((prod) => (prod.id === item.id ? { ...prod, count: prod.count - 1 } : prod));
    setProductsOnCart(minusProduct);
  }

  const totalPrice = productsOnCart.reduce((sum, item) => sum + Number(item.count * item.price), 0)

  return (
    <div className='modalBackground'>
    <div className='modalContainer'>
      <button onClick={closeModal}>X</button>
      <ul>
          {productsOnCart.map((item) => 
            <li key={item.id}>
              <h3>{item.name}</h3>
              <button onClick={() => addProductOnCart(item)}>+</button>
              <span>{(item.count)}</span>
              <button onClick={() => removeProductOnCart(item)}>-</button>
            </li>
          )}
      </ul>
          <span>{(totalPrice).toFixed(2)}</span>
      
    </div>
  </div>)
    
  
}

export default CartModal