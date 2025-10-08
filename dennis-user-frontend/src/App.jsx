import { Fragment } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import './App.css'
import { UserRegisterPage } from './pages/userRegisterPage.jsx';
import { UserLoginPage } from './pages/userLoginPage.jsx';
import Navbar from './components/Navbar.jsx';

function App() {
  return (
    <Fragment>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path='/' element={<div>Home Page</div>} />
          <Route path='/registerUser' element={<UserRegisterPage />} />
          <Route path='/loginUser' element={<UserLoginPage />} />
        </Routes>
      </BrowserRouter>  
    </Fragment>
  )
}

export default App
