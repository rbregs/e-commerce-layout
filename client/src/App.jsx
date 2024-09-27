import './App.css';
import Header from './components/Layout/Header';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Layout/Home';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import UserLayout from './components/userLayout/UserLayout';
import Profile from './components/userLayout/Profile';
import UpdateProfile from './components/userLayout/UpdateProfile';

function App() {
  return (
    <BrowserRouter>
      <div className="container-fluid">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/me/profile" element={< Profile/>} />
          <Route path="/me/update_profile" element={<UpdateProfile/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
