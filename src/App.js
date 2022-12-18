import logo from './logo.svg';
import './App.css';
import Micomponente from './Micomponente';
import { SegundoComponente } from './SegundoComponente';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         Empezamos <code>src/App.js</code> Shake and Learn!!.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Micomponente/>
        <hr/>
        <SegundoComponente/>
      </header>
      {/* Cargar mi primer componente*/}
     
    </div>
  );
}

export default App;
