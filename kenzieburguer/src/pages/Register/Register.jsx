import RegisterForm from '../../components/RegisterForm'
import { StyledRegister } from './styles'
import logoAndText from './../../assets/logoAndText.png'


const Register = () => {
  return (
    <StyledRegister>
        <img src = {logoAndText} alt = 'logo' />
        <RegisterForm/>
    </StyledRegister>
  )
}

export default Register