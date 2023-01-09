import React from 'react'
import LoginForm from '../../components/LoginForm'
import logoAndText from './../../assets/logoAndText.png'
import { StyledLogin } from './styles'

const Login = () => {
  return (
    <StyledLogin>
        <LoginForm/>
        <img src = {logoAndText} alt = 'logo' />
    </StyledLogin>
  )
}

export default Login