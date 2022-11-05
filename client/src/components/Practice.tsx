import { useState } from 'react'
import { useAppSelector } from '../redux/app/hooks';
import ProgressBar from './ProgressBar';
import QuestionBody from './QuestionBody';
import { FcCheckmark } from 'react-icons/fc';
import { Link } from 'react-router-dom';
const Practice = () => {
    const [activeQuestion, setActiveQuestion] = useState(0);
    const [progress, setProgress] = useState(0);
    const questions = useAppSelector((state) => state.practice.questions);
    return (
        <main className='main-practice'>
            <section className='question'>
                <div >
                    <h2>Choose The correct Answer:</h2>
                    <ProgressBar progress={progress} />
                    {questions.map((question, index) => (
                        <div key={question.id}>
                            <QuestionBody question={question} index={index} activeQuestion={activeQuestion} setActiveQuestion={setActiveQuestion} setProgress={setProgress} />
                        </div>
                    ))
                    }
                </div>
                {activeQuestion + 1 > questions.length &&
                    <div className='submit'>
                        <div className='success'>
                            <FcCheckmark size={80} />
                        </div>
                        <h2>
                            Thank You!
                        </h2>
                        <Link to='/rank' className='btn'>See Your Rank</Link>
                    </div>}
            </section>
        </main>
    )
}

export default Practice;
