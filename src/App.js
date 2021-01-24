import './App.css';
import NavMenu from './NavMenu.js';
import Main from './Main.js';

function App()
{
  return (
    <div className="flex-container flex-column">
      <NavMenu />
      <Main />
    </div>
  );
}

export default App;