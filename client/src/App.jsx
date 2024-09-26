import './App.css';
import Header from './components/Layout/Header';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Layout/Home';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from './components/auth/Login';
import Register from './components/auth/Register';

function App() {
  return (
    <BrowserRouter>
      <div className="container-fluid">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
