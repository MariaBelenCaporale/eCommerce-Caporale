import './App.css';
import NavBar from './components/NavBar/NavBar';
import CardWidget from './components/CardWidget/CardWidget';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>
        <CardWidget/>
      </header>
    </div>
  );
}

export default App;
