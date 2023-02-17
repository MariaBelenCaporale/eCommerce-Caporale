import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from '../src/components/NavBar/NavBar';
import ItemListContainer from './pages/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './pages/ItemDetailContainer/ItemDetailContainer';
import Main from './pages/Main/Main';
import Nosotros from './pages/Nosotros/Nosotros';

function App() {
  return (
    <BrowserRouter>
        <NavBar /> 
      <Routes>
 
        <Route path="/" element={<Main />} />
        <Route path="/EXCURSIONES" element={<ItemListContainer />} />
        <Route path="/category/:categoryId" element={<ItemListContainer />} />
        {/* <Route path="*" element={}  armarlo en pages para el error*/}
        <Route path="/item/:id" element={<ItemDetailContainer />} />
        <Route path="/nosotros" element={<Nosotros />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;

