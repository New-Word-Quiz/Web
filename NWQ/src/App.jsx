import { useState } from 'react'
import './App.css'
import { Routes, Route, Link} from 'react-router-dom';
import Home from './Screen/Home/index.jsx'
import NotFoundPage from './Screen/NotFoundPage/index.jsx'
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
