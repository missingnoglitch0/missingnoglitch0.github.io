import './App.css';
import './Sidebar.js';
import Sidebar from './Sidebar.js';
import tallStack from './resources/tall-stack.png';

function App(){
    return (
      <div className="flex-container">
        <Sidebar titleName="Pepe" isOpen={true} />
        <div>
          Portcullis
        </div>
        <img src={tallStack} alt=""/>
        bung
      </div>

    );
}

export default App;