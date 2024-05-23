import logo from './logo.svg';
import './App.css';
import MiprimerComponente from './components/MiprimerComponente';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <header></header>
        <MiprimerComponente />
        <MiprimerComponente />
        <MiprimerComponente />
        
      </header>
    </div>
  );
}

export default App;
