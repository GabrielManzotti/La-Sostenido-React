
import './App.css';
import Navbar from './Components/Navbar/navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import CircleShoppCart from './Components/circleShoppCart/Cartwidget';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';



function App() {
  return (

    <Router>

      <Navbar
        categoria1="Categoría en proceso 1"
        categoria2="Categoría en proceso 2"
        categoria3="Categoría en proceso 3"
      >
      </Navbar>
      <ItemListContainer></ItemListContainer>

    </Router>
  );
}

export default App;
