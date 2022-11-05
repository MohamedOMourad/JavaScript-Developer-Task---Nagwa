import React, { useEffect, useState } from 'react';
import './App.css';
import Home from './components/Home';
import { getTestQuestions } from './utils/API';
import { Routes, Route } from 'react-router-dom';
import Practice from './components/Practice';
import { useAppDispatch } from "./redux/app/hooks";
import { setQuestions } from './redux/test/questions';

function App() {
  const dispatch = useAppDispatch()
  useEffect(() => {
    getQuestions()
  }, [])

  const getQuestions = async () => {
    const questions = await getTestQuestions();
    dispatch(setQuestions(questions))
  }
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/practice' element={<Practice />} />
      </Routes>
    </div>
  );
}

export default App;
