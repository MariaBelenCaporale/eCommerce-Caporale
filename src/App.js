import loguito from '../src/components/Assets/loguito.png'
import './App.css';
import Main from './components/Main/Main';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import SectionCards from './components/SectionCards/SetionCards';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src = {loguito} className = "loguito" alt = "loguito" />
        <NavBar/>
        <ItemListContainer/>
      </header>
      <Main/>
      <SectionCards/>

    </div>
  );
}

export default App;
