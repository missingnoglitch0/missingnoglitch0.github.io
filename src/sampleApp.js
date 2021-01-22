import logo from './logo.svg';
import spencer from './spencer.jpg';
import './App.css';
import LoggingButton from './LoggingButton.js'; //Event  handling
import Greeting from './Greeting.js'; //Conditional rendering
import LoginControl from './LoginControl.js'; // ^^
import NumberList from './NumberList.js'; //Lists

//Lists
const numbers = [1, 2, 3, 4, 5];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={spencer} className="Sbencer" alt="logo" />
        <p>
          Ok guys, quick coffee break and then a brief 2-hour stand-up meeting
        </p>
        <LoggingButton />
        <Greeting isLoggedIn={false} />
        <LoginControl />
        <NumberList numbers={numbers} />
      </header>
    </div>
  );
}

export default App;
