import React from "react"
import { Route, Routes } from 'react-router-dom'
import Signin from "./pages/Auth/SignIn"
import Signup from './pages/Auth/SignUp'
import { Main } from "./pages/Main"
import NotFoundPage from './pages/Auth/NotFoundPage'
import './index.css'

function App() {
  return (
    <div className="root">
        <Routes>
          <Route path='/' element={<Main.Pages />} />
          <Route path="/signin" element={<Signin />} />
          <Route path='/signup' element={<Signup />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
    </div>
  )
}

export default App;
