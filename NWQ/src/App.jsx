import { useState } from 'react'
import './App.css'
import { Routes, Route, Link} from 'react-router-dom';
import Home from './Screen/Home'
import NotFoundPage from './Screen/NotFoundPage'
import SettingsPage from './Screen/Setting';
import InquiryPage from './Screen/Inquiry';
function App() {
  return (
    <>
    <Routes>
      <Route path = "/" element={<Home/>}/>
      <Route path = "/settings" element={<SettingsPage/>}/>
      <Route path = "/requests" element={<InquiryPage/>}/>
      <Route path="*" element={<NotFoundPage />}/>
    </Routes>
    </>
  )
}

export default App
