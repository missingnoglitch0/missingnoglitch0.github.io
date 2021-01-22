import './App.css';
import './Sidebar.js';
import Sidebar from './Sidebar.js';

function App(){
    return (
      <div className="flex-container">
        <Sidebar titleName="Pepe" isOpen={true} />
        <div>
          Portcullis
        </div>
      </div>

    );
}

export default App;