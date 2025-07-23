import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Scorescreen from './scorescreen/scorescreen';  //점수 화면
import Home from './Home';  //홈 화면
import Quizcard from './Quizcard';  //퀴즈 게임 화면
import Setting from './Setting';  //세팅 화면

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Scorescreen />} />

        <Route path="/home" element={<Home />} />
        <Route path="/quiz" element={<Quizcard />} />
        <Route path="/settings" element={<Setting />} />
      </Routes>
    </Router>
  )
}

export default App; 