import React from 'react'
import LogoAndTexts from '../../components/LogoAndTexts'
import RegisterForm from '../../components/RegisterForm'
import { StyledRegister } from './styles'

const Register = () => {
  return (
    <StyledRegister>
        <LogoAndTexts/>
        <RegisterForm/>

    </StyledRegister>
  )
}

export default Register