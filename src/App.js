import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import NavBar from '../src/components/NavBar/NavBar';
import ItemListContainer from './pages/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './pages/ItemDetailContainer/ItemDetailContainer';
import Main from './pages/Main/Main';
import Nosotros from './pages/Nosotros/Nosotros';
import Footer from './components/Footer/Footer';
import Experiencias from './pages/Experiencias/Experiencias';

function App() {
  return (

    <BrowserRouter>
        <NavBar /> 

      <Routes>
 
        <Route path="/" element={<Main />} />
        <Route path="/Experiencias" element={<Experiencias />} />
        <Route path="/nosotros" element={<Nosotros />} />
        { <Route path="/category/:categoryId" element={<ItemListContainer />} /> }
        {/* <Route path="*" element={}  armarlo en pages para el error*/}
        { <Route path="/item/:id" element={<ItemDetailContainer />} />}

        
      </Routes>

      <Footer />
    </BrowserRouter>


  );
}

export default App;



