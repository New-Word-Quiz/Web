import { useState } from 'react'
import './App.css'
import { Routes, Route, Link} from 'react-router-dom';
import Home from './Screen/Home/Home.jsx'
import NotFoundPage from './Screen/NotFoundPage/NotFoundPage.jsx'
function App() {
  return (
    <>
    <Routes>
      <Route path = "/" element={<Home/>}/>
      <Route path="*" element={<NotFoundPage />}/>
    </Routes>
    </>
  )
}

export default App
