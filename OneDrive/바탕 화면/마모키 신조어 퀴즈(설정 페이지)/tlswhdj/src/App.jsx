import React from 'react';
import { SettingsProvider } from './contexts/SettingsContext';
import BgmPlayer from './components/BgmPlayer';
import SettingsPage from './components/SettingsPage';

function App() {
  return (
    <SettingsProvider>
      <BgmPlayer src="/audio/kerning-city.mp3" />
      <SettingsPage />
    </SettingsProvider>
  );
}

export default App;