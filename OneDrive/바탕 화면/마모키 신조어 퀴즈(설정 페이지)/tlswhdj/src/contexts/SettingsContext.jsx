import React, { createContext, useState, useEffect } from 'react';

export const SettingsContext = createContext();
export const SettingsProvider = ({ children }) => {
  const [bgmVolume, setBgmVolume] = useState(() => {
    const saved = localStorage.getItem('bgmVolume');
    return saved !== null ? Number(saved) : 0.5;
  });
  const [effectVolume, setEffectVolume] = useState(() => {
    const saved = localStorage.getItem('effectVolume');
    return saved !== null ? Number(saved) : 0.5;
  });

  useEffect(() => { localStorage.setItem('bgmVolume', bgmVolume); }, [bgmVolume]);
  useEffect(() => { localStorage.setItem('effectVolume', effectVolume); }, [effectVolume]);

  return (
    <SettingsContext.Provider value={{ bgmVolume, setBgmVolume, effectVolume, setEffectVolume }}>
      {children}
    </SettingsContext.Provider>
  );
};