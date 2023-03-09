import logo from './logo.svg';
import './App.css';
import Navbar from './navbar';
import tienda from './pages/tienda.js';
import about from './pages/about.js';
import sitio from './pages/sitio.js';


function App() {
  let Component 
switch(window.location.pathname){
  case "/":
    Component = sitio
    break
    case "/tienda":
      Component = tienda
     break
      case "/about":
        Component= about
        break
       case "/sitio":
        Component = sitio
         break
}

  return (
    <>
  <Navbar/>

<Component/>
</>

   
  );
}


export default App;
