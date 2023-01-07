import { RoutesMain as Routes } from "./routes";
import { AuthProvider } from './contexts/AuthContext';
import { CartProvider } from './contexts/CartContext';
import GlobalStyles from './styles/GlobalStyles';

function App() {
  return (
    <div className="App">

      <AuthProvider>
        <CartProvider>
          <GlobalStyles/>
          <Routes/>

        </CartProvider>
      </AuthProvider>

    </div>
  );
}

export default App;
