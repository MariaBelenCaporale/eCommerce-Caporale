import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import NavBar from '../src/components/NavBar/NavBar';
import ItemListContainer from './pages/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './pages/ItemDetailContainer/ItemDetailContainer';
import Main from './pages/Main/Main';
import Nosotros from './pages/Nosotros/Nosotros';
import Footer from './components/Footer/Footer';
import Experiencias from './pages/Experiencias/Experiencias';
import Cart from './pages/Cart/Cart';
import CartProvider from './Context/CartProvider';
import 'react-toastify/dist/ReactToastify.css';
import Loader from './components/Loader/Loader';




function App() {
  return (
    <BrowserRouter>
      <Loader />
      <CartProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/Experiencias" element={<Experiencias />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/category/:categoryId" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path='/Cart' element={<Cart />} />
        </Routes>
      </CartProvider>
      <Footer />
    </BrowserRouter>    
  );
};

export default App;



