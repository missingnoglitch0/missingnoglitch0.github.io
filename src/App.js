import './App.css';
import './Sidebar.js';
import NavMenu from './NavMenu.js';
import tallStack from './resources/tall-stack.png';

function App()
{
  return (
    <div className="flex-container flex-column">
      <NavMenu />
      <img src={tallStack} alt="" />
        bung
    </div>

  );
}

export default App;