import { RoutesMain as Routes } from './routes';
import { AuthProvider } from './contexts/AuthContext';
import { CartProvider } from './contexts/CartContext';
import GlobalStyles from './styles/GlobalStyles';
import { StyledMain } from './styles/MainContainer';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <StyledMain className = 'App'>
      <ToastContainer/>
      <AuthProvider
        loadUser
        login        = {() => Promise.resolve()}
        registerUser = {() => Promise.resolve()}
        >
          <CartProvider>
            <GlobalStyles/>
            <Routes/>
          </CartProvider>

  
      </AuthProvider>

    </StyledMain >
  );
}

export default App;
