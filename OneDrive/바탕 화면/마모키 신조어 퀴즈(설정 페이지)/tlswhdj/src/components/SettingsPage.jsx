import React, { useContext } from 'react';
import { SettingsContext } from '../contexts/SettingsContext';
import './SettingsPage.css';

const SettingsPage = () => {
  const { bgmVolume, setBgmVolume, effectVolume, setEffectVolume } =
    useContext(SettingsContext);

  return (
    <div className="settings-page-view">
      <div className="phone-frame">
        <div className="settings-card">
          <header className="card-header">
            <button className="back-btn" onClick={() => history.back()}>
              ←
            </button>
            <h1 className="card-title">설정</h1>
          </header>
          <main className="card-content">
            {/* 배경음악 슬라이더 */}
            <div className="setting-group">
              <label htmlFor="bgm" className="setting-label">
                배경음악
              </label>
              <input
                id="bgm"
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={bgmVolume}
                onChange={(e) => setBgmVolume(+e.target.value)}
                className="setting-range bgm"
                style={{ '--value': `${bgmVolume * 100}%` }}
              />
            </div>
            {/* 효과음 슬라이더 */}
            <div className="setting-group">
              <label htmlFor="effect" className="setting-label">
                효과음
              </label>
              <input
                id="effect"
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={effectVolume}
                onChange={(e) => setEffectVolume(+e.target.value)}
                className="setting-range effect"
                style={{ '--value': `${effectVolume * 100}%` }}
              />
            </div>
          </main>
          <footer className="card-footer">
            <button
              className="inquiry-btn"
              onClick={() => {
                // 로컬 분리된 앱이라면 포트 5174
                window.location.href = 'http://localhost:5174';
              }}
            >
              문의사항
            </button>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;