// React
import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';

// Custom Components
import Home from './components/Home';
import Rank from './components/Rank';
import Practice from './components/Practice';
import NotFound from './components/NotFound';

//redux
import { setQuestions } from './redux/practiceSlice';
import { useAppDispatch } from "./redux/app/hooks";

//functions
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
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
