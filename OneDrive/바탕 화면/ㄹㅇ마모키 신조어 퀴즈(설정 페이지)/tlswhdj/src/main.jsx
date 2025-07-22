import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { SettingsProvider } from './contexts/SettingsContext.jsx'
import BgmPlayer from './components/BgmPlayer.jsx'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SettingsProvider>
      {/* 앱 전체에 한 번만 BGM 재생/볼륨 컨트롤 */}
      <BgmPlayer src="/audio/kerning-city.mp3" />

      <BrowserRouter>
        <App />
      </BrowserRouter>
    </SettingsProvider>
  </React.StrictMode>
)
