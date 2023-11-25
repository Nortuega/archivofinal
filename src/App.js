import './App.css';
import ItemListContainer from '../src/Components/ItemListContainer/ItemListContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import NavBar from '../src/Components/NavBar/NavBar';
import Error from '../src/Components/Error/Error';
import ItemDetailContainer from '../src/Components/ItemDetailContainer/ItemDetailContainer';
import Cart from '../src/Components/Cart/Cart';
import CartProvider from '../src/Components/Context/CartContext';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <CartProvider>
     <NavBar/>

        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/category/:id' element={<ItemListContainer/>} />
          <Route path='/item/:id' element={<ItemDetailContainer/>} />
          <Route path={"/cart"} element={<Cart/>} />
          <Route path='*' element={<Error/>} />
        </Routes>

        </CartProvider>
     </BrowserRouter>
    </div>
  );
}

export default App;