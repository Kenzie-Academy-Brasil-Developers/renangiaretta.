import React, { useContext } from 'react'
import { StyledLoginForm } from './styles'
import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { AuthContext } from '../../contexts/AuthContext'
import { Link } from 'react-router-dom'
import { StyledButtonPrimary } from '../../styles/Buttons'
const LoginForm = () => {


  const loginSchema = yup.object().shape({
    email: yup.string().required('Preencha o e-mail.').email('É necessário fornecer um e-mail válido.'),
    password: yup.string().required('Preencha a senha.')
  })

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(loginSchema),
    defaultValues: {
      email: '',
		  password: '',
   }
  })

  const { login } = useContext(AuthContext)



  return (
    <StyledLoginForm>
      <div>
        <label className='title1' htmlFor="login">Login</label>
      </div>
        <form onSubmit={handleSubmit(login)} action="submit" noValidate>
            <input className='placeholder-text' name='email' type="email" placeholder='Digite seu e-mail aqui...' {...register('email')} />
            {errors.email?.message && <p className='error' aria-errormessage=''>{errors.email.message}</p>}
            <input className='placeholder-text' name='password' type="password" placeholder='Digite sua senha aqui...' {...register('password')} />
            {errors.password?.message && <p className='error' aria-errormessage=''>{errors.password.message}</p>}
            <StyledButtonPrimary className='button-primary title2' type='submit'>Logar</StyledButtonPrimary>
            <span>Crie sua conta para saborear muitas delícias e matar sua fome!</span>
        </form>


        <Link to='/register' className='title4' >Cadastrar </Link>


    </StyledLoginForm>
  )
}

export default LoginForm