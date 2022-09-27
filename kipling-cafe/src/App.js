import logo from './logo.svg';
import './App.css';
import "./styles/header.css"
import "./styles/productos.css"
import "./styles/foot.css"
import "./styles/registro.css"
import Menu from './components/menu';
import Foot from './components/foot';
import Productos from './components/productos';

import {BrowserRouter as Router} from "react-router-dom" 
import Public from './routes/Public';


function App() {
  return (
    <div className="App">
      <Router>

        
      {/* Cabezera */}
        <header>
          <h1 className="title">Kipling</h1>
            <Menu/>
        </header>
        
        <Productos/>
        <Public/>
      {/* Pie */}
        <Foot/>

      </Router>
    </div>
  );
}

export default App;
