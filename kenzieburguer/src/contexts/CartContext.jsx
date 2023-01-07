import { createContext, useEffect, useState } from "react";
import { api } from "../services/api";


export const CartContext = createContext({})



export const CartProvider = ({ children }) => {

    const [ products, setProducts ] = useState(null)
    const [ loadProducts, setLoadProducts ] = useState(false)
    const [ modalView, setModalView ] = useState(false)
    const [ cartList, setCartList ] = useState([])
    useEffect(() => {
        

        async function getProducts (  ) {
            const token = localStorage.getItem('TOKEN')
            api.defaults.headers.common.authorization = `Bearer ${token}`
            try {
                const response = await api.get('/products')
                setProducts(response.data)
            
                } catch (error) {
                    console.error(error)
                }finally{
                    setLoadProducts(true)
                }
            }
        getProducts()
    },[])



    return(
        <CartContext.Provider value={{ products, setProducts, loadProducts, modalView, setModalView, cartList, setCartList }}>

        {children}


        </CartContext.Provider>
    )


}