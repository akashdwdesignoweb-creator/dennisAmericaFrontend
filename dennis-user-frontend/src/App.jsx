import { Fragment } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import './App.css'
import { UserRegisterPage } from './pages/userRegisterPage.jsx';
import { UserLoginPage } from './pages/userLoginPage.jsx';

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<div>Home Page</div>} />
          <Route path='/register' element={<UserRegisterPage />} />
          <Route path='/login' element={<UserLoginPage />} />
        </Routes>
      </BrowserRouter>
    </Fragment>
  )
}

export default App
