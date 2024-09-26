

import './App.css'
import Header from './components/Layout/Header'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Layout/Home';


function App() {


  return (
    <>
    <div className="container-fluid">
        <Header />
        <Home />
    </div>
    
    </>
  )
}

export default App
