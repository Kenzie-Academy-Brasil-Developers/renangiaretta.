import { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '../services/api';


type iProduct = {
    id   : number,
    name : string,
    count: number,
    price: number,
    img  : 'img.png'
  }

interface iCartContextProps {
    products           : iProduct[]
    setProducts        : (newValue: any[]) => void
    loadProducts       : boolean
    modalView          : boolean
    setModalView       : (newValue: boolean) => void
    cartList           : iProduct[]
    setCartList        : (newValue: iProduct[]) => void
    productsOnCart     : any[]
    setProductsOnCart  : (newValue: any[]) => void
    equalProducts      : iProduct[]
    productCount       : iProduct[]
    addProductOnCart   : any
    removeProductOnCart: any
    deleteProductOnCart: any
    filter             : string | undefined
    setFilter          : any
}


export const CartContext = createContext({} as iCartContextProps)

interface iCartProviderProps {
    children: React.ReactNode
}

export const CartProvider = ({ children }: iCartProviderProps ) => {
    const navigate                              = useNavigate()
    const [ products, setProducts ]             = useState<any[]>([])
    const [ loadProducts, setLoadProducts ]     = useState(false)
    const [ modalView, setModalView ]           = useState(false)
    const [ cartList, setCartList ]             = useState<any[]>([])
    const [ productsOnCart, setProductsOnCart ] = useState<any[]>([])
    const [ filter, setFilter ]                 = useState()

    useEffect(() => {
        

        async function getProducts (  ) {
            const token                                     = localStorage.getItem('TOKEN')
                  api.defaults.headers.common.authorization = `Bearer ${token}`
            try {
                const response = await api.get('/products')
                setProducts(response.data)
                setLoadProducts(true)
            
                } catch (error) {
                    console.error(error)
                }finally{
                }
            }
              getProducts()
          },[navigate, products])


    const equalProducts = cartList.reduce((prod, element ) => {
        if(!prod[element.name]) {
          prod[element.name] = {
            count: 0,
            price: element.price,
            img  : element.img
          }
        }
        prod[element.name].count++
        return prod
      }, {})
      const productCount: iProduct[] = Object.keys(equalProducts).map((name, index) => ({
        id   : index,
        name : name,
        count: equalProducts[name].count,
        price: equalProducts[name].price,
        img  : equalProducts[name].img,
      }))

      function addProductOnCart(item: iProduct): void {
        const plusProduct = productsOnCart.map((prod) => (prod.id === item.id && item.count >= 0 ? { ...prod, count: prod.count + 1 } : prod)).filter((prod) => prod.count > 0);
        setProductsOnCart(plusProduct)
      }
      

      function removeProductOnCart(item: iProduct) {
        const minusProduct = productsOnCart.map((prod) => (prod.id === item.id && item.count > 0 ? { ...prod, count: prod.count - 1 } : prod));
        setProductsOnCart(minusProduct)
      }
      function deleteProductOnCart(item: iProduct) {
        setProductsOnCart(productsOnCart => productsOnCart.filter(prod => prod.id !== item.id))
      }

    return(
        <CartContext.Provider value = {{ productCount, equalProducts, products, setProducts, loadProducts, modalView, setModalView, cartList, setCartList, productsOnCart, setProductsOnCart, addProductOnCart, removeProductOnCart, deleteProductOnCart, filter, setFilter, }}>
        {children}
        </CartContext.Provider>
    )
}