import React from 'react'
import LoginForm from '../../components/LoginForm'
import LogoAndText from './../../assets/LogoAndText.png'
import { StyledLogin } from './styles'

const Login = () => {
  return (
    <StyledLogin>
        <LoginForm/>
        <img src={LogoAndText} alt="" />
    </StyledLogin>
  )
}

export default Login