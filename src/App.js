//import logo from './logo.svg';
import img from './minh.jpg'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={img} alt="logo" />
        <p>
          Hello it's Minh.
        </p>
        <a
          href="https://www.facebook.com/leminh.tran.752/"
          target="_blank"
          rel="noopener noreferrer"
        >
          My Facebook
        </a>
      </header>
    </div>
  );
}

export default App;
