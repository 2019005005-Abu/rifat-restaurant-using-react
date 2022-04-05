
import './App.css';
import Maincom from './com/Maincom.js';
import {BrowserRouter} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Maincom/>
      </BrowserRouter>
    </div>
  );
}

export default App;
