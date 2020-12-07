//import logo from './logo.svg';
import img from './minh.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={img} className="App-logo" alt="logo" />
        <p>
          Hi there! You are so cute!
        </p>
        <a
          className="Contact Me"
          href="https://www.facebook.com/leminh.tran.752/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
