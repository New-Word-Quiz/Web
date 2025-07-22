import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { SettingsContext } from '../contexts/SettingsContext.jsx'
import './SettingsPage.css'

const SettingsPage = () => {
  const { bgmVolume, setBgmVolume, effectVolume, setEffectVolume } = useContext(SettingsContext)
  const navigate = useNavigate()

  return (
    <div className="settings-page-view">
      <div className="phone-frame">
        <div className="settings-card">
          <header className="card-header">
            <button className="back-btn" onClick={() => navigate(-1)}>←</button>
            <h1 className="card-title">설정</h1>
          </header>
          <main className="card-content">
            <section className="setting-group">
              <label htmlFor="bgm" className="setting-label">배경음악</label>
              <input
                id="bgm"
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={bgmVolume}
                onChange={e => setBgmVolume(+e.target.value)}
                className="setting-range bgm"
                style={{ '--value': `${bgmVolume * 100}%` }}
              />
            </section>
            <section className="setting-group">
              <label htmlFor="effect" className="setting-label">효과음</label>
              <input
                id="effect"
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={effectVolume}
                onChange={e => setEffectVolume(+e.target.value)}
                className="setting-range effect"
                style={{ '--value': `${effectVolume * 100}%` }}
              />
            </section>
          </main>
          <footer className="card-footer">
            <Link to="/inquiry" className="inquiry-btn">문의사항</Link>
          </footer>
        </div>
      </div>
    </div>
  )
}

export default SettingsPage
