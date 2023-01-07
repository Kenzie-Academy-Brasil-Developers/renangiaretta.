import React, { createContext } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api";





export interface AuthContextType {
    login: (data: any) => Promise<void>
    registerUser: (data: any, event: React.FormEvent<HTMLFormElement>) => Promise<void>
}

const defaultValue: AuthContextType = {
    login: () => Promise.resolve(),
    registerUser: () => (Promise.resolve()),
}


export const AuthContext = createContext<AuthContextType>(defaultValue)


export const AuthProvider = ({ children }) => {

    const navigate = useNavigate()

    async function login ( data ) {
        try {
            const response = await api.post('/login', data)
            console.log(response)
            const token = response.data.accessToken
            localStorage.setItem('TOKEN', token)
            navigate('/dashboard')

        } catch (error) {
            console.error(error)
        }finally{
            

        }
    }


    async function registerUser ( data, event ) {
        event.preventDefault()
        try {
            const response = await api.post('/users', data)
            console.log(response)
            navigate('/login')
        } catch (error) {
            console.error(error)
        }finally {
            console.log('a')
        }
    }
    







    return(
        <AuthContext.Provider  value={{ login, registerUser }}>

            {children}

        </AuthContext.Provider>
    )
}