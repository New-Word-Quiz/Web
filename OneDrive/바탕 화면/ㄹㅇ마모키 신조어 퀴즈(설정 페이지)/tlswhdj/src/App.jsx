import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import SettingsPage from './components/SettingsPage.jsx'
import InquiryPage  from './components/InquiryPage.jsx'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/settings" replace />} />
      <Route path="/settings" element={<SettingsPage />} />
      <Route path="/inquiry"  element={<InquiryPage  />} />
    </Routes>
  )
}

export default App
