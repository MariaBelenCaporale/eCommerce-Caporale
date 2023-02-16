import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from '../src/components/NavBar/NavBar';
import ItemListContainer from './pages/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './pages/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <BrowserRouter>
        <NavBar />
      <Routes>
        {/* probar de poner el home aca */}
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:categoryId" element={<ItemListContainer />} />

        {/* <Route path="*" element={} */}
        <Route path="/item/:id" element={<ItemDetailContainer />} />
        
      </Routes>
    </BrowserRouter>

  );
}

export default App;

