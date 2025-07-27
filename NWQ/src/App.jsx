import { useState } from 'react'
import './App.css'
import { Routes, Route, Link} from 'react-router-dom';
import Home from './Home/Home.jsx'
import Quiz from './QuizCards/QuizCard.jsx'
function App() {
  return (
    <>
    <Routes>
      <Route path = "/" element={<Home/>}/>
      <Route path = "/quiz" element={<Quiz/>}/>
      {/* <Route path="*" element={<NotFoundPage />}/> */}
    </Routes>
    </>
  )
}

export default App
