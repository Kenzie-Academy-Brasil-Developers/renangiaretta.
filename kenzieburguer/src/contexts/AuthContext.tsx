import React, { createContext, useEffect, useState } from 'react';
import { Route, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { api } from '../services/api';
import 'react-toastify/dist/ReactToastify.css';

export interface iAuthContextProps{
    children    : React.ReactNode
    loadUser    : boolean
    login       : (data: any) => Promise<void>;
    registerUser: (data: any, event: React.FormEvent<HTMLFormElement>) => Promise<void>
}


export interface iAuthContextType {
    login       : ( ) => Promise<void>,
    registerUser: (data: any, event: React.FormEvent<HTMLFormElement>) => Promise<void>
}


export const AuthContext = createContext({} as iAuthContextProps)


export const AuthProvider = ({ children }: iAuthContextProps) => {
    const navigate = useNavigate()
    const [ loadUser, setLoadUser ] = useState(false)
    
    useEffect (() => {
        async function verifyAuthentication (  ) {
            const token                                     = localStorage.getItem('TOKEN')
                  api.defaults.headers.common.authorization = `Bearer ${token}`
            try {
                const response = await api.get('/products')
                    setLoadUser(true)
                } catch (error) {
                    console.error(error)
                    if(window.location.href === 'http://localhost:3000/dashboard')
                    navigate('/login')
                }
            }
            verifyAuthentication()
    },[navigate, loadUser])


    async function login ( data: any ) {
        try {
            const response = await api.post('/login', data)
            const token = response.data.accessToken
            localStorage.setItem('TOKEN', token)
            setLoadUser(true)
            toast('Login realizado com sucesso');
            navigate('/dashboard')
        } catch (error) {
            console.error(error)
            toast('Não foi possível realizar o login')
        }finally{
        }
    }

    async function registerUser ( data: any, event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
        try {
            const response = await api.post('/users', data)
            toast('Cadastro realizado com sucesso!')
            navigate('/login')
        } catch (error) {
            toast('Não foi possível realizar o cadastro. Verifique os dados e tente novamente.')
            console.error(error)
        }finally {
        }
    }
    
    return(
        <AuthContext.Provider value = {{ login, registerUser, children, loadUser }}>

            {children}

        </AuthContext.Provider>
    )
}