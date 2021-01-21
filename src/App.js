import logo from './logo.svg';
import spencer from './spencer.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={spencer} className="App-logo" alt="logo" />
        <p>
          Ok guys, quick coffee break and then a brief 2-hour stand-up meeting
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
      </header>
    </div>
  );
}

export default App;
