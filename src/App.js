import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Menu } from './components/Menu/Menu';
import { Outlet } from 'react-router-dom';
import { CartProvider } from './contexts/CartContext';
import { DeliveryShippingProvider } from './contexts/DeliveryShippingContext';


function App() {
  return (
    <div className="App">
      <header className='row'>
        <Menu></Menu>
      </header>
      <section className='row'>
        <CartProvider>
          <DeliveryShippingProvider>
            <Outlet></Outlet>
          </DeliveryShippingProvider>
        </CartProvider>
      </section>

    </div>

  );
}

export default App;
