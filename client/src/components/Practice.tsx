import { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../redux/app/hooks';
import ProgressBar from './ProgressBar';
import QuestionBody from './QuestionBody';
import { FcCheckmark } from 'react-icons/fc';
import { Link } from 'react-router-dom';
import { resetResult, setScore } from '../redux/practiceSlice';
const Practice = () => {
    const dispatch = useAppDispatch()
    const [activeQuestion, setActiveQuestion] = useState(0);
    const [progress, setProgress] = useState(0);
    const questions = useAppSelector((state) => state.practice.questions);

    useEffect(() => {
        dispatch(resetResult())
    }, [])

    return (
        <main className='practice-main'>
            <section>
                <div>
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
                    <div className='submission'>
                        <div className='success'>
                            <FcCheckmark size={80} />
                        </div>
                        <h2>
                            Thank You!
                        </h2>
                        <Link onClick={() => dispatch(setScore())} to='/rank' className='submit-btn'>See Your Rank</Link>
                    </div>}
            </section>
        </main>
    )
}

export default Practice;
