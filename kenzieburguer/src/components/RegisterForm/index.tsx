import React, { useContext } from 'react'
import { StyledRegisterForm } from './styles'
import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { AuthContext } from '../../contexts/AuthContext'
import { Link } from 'react-router-dom'
import { StyledButtonSecondary } from '../../styles/Buttons'


const RegisterForm = () => {

  const { registerUser } = useContext(AuthContext)

  const registerSchema = yup.object().shape({
    email          : yup.string().required('Preencha o e-mail.').email('é necessário digitar um e-mail válido!'),
    name           : yup.string().required('Preencha o nome.'),
    password       : yup.string().required('Preencha a senha.'),
    confirmPassword: yup.string().oneOf([yup.ref('password'), null], 'A senha não confere.').required('A confirmação de senha é obrigatória.'),
  })
  const { register, handleSubmit, formState : { errors } } = useForm({
    resolver     : yupResolver(registerSchema),
    defaultValues: {
      name           : '',
      email          : '',
      password       : '',
      confirmPassword: ''
    }
  })



  return (
    <StyledRegisterForm>
          <div   className = 'register-header'>
          <label className = 'title1' htmlFor = 'Cadastro'>Cadastro</label>
          <Link  to        = '/login'>Retornar para o login</Link>
          </div>
        <form onSubmit = {handleSubmit(registerUser)} action = 'submit' noValidate>
          <div>
            <input className = 'placeholder-text' type = 'text' placeholder = 'Digite o usuário' {...register('name')}/>
            {errors.name?.message && <p className='error' aria-errormessage=''>{errors.name.message}</p>}
          </div>
          <div>
            <input className = 'placeholder-text' type = 'email' placeholder = 'Digite o e-mail' {...register('email')}/>
            {errors.email?.message && <p className='error' aria-errormessage=''>{errors.email.message}</p>}
          </div>
          <div>
            <input className = 'placeholder-text' type = 'password' placeholder = 'Digite a senha' {...register('password')} />
            {errors.password?.message && <p className='error' aria-errormessage=''>{errors.password.message}</p>}
          </div>
          <div>
            <input className = 'placeholder-text' type = 'password' placeholder = 'Confirme a senha' {...register('confirmPassword')} />
            {errors.confirmPassword?.message && <p className='error' aria-errormessage=''>{errors.confirmPassword.message}</p>}
          </div>
            <StyledButtonSecondary className = 'title4' type = 'submit'>Cadastrar</StyledButtonSecondary>
        </form>
    </StyledRegisterForm>
  )
}

export default RegisterForm