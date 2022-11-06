// React
import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';

// Custom Components
import Home from './pages/Home';
import Rank from './pages/Rank';
import Practice from './pages/Practice';
import NotFoundPage from './pages/NotFoundPage';

//redux
import { setQuestions } from './redux/practiceSlice';
import { useAppDispatch } from "./redux/app/hooks";

//API
import { getTestQuestions } from './utils/API';

function App() {
  const dispatch = useAppDispatch();

  //get test questions from API
  useEffect(() => {
    (async () => {
      const questions = await getTestQuestions();
      dispatch(setQuestions(questions))
    })()
  }, [])

  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/practice' element={<Practice />} />
        <Route path='/rank' element={<Rank />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </div>
  );
};

export default App;
