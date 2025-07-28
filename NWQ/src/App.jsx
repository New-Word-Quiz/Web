import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Scorescreen from './scorescreen/scorescreen.jsx';  //점수 화면
import Home from './Home/home.jsx';  //홈 화면
import Quizcard from './Quizcard/quizcard.jsx';  //퀴즈 게임 화면
import Setting from './Setting/setting.jsx';  //세팅 화면

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Scorescreen />} />
        <Route path="/home" element={<Home />} />
        <Route path="/quiz" element={<Quizcard />} />
        <Route path="/settings" element={<Setting />} />
      </Routes>
    </>
  )
}

export default App; 