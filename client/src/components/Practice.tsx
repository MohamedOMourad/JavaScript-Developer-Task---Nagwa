import { useState } from 'react'
import { useAppSelector } from '../redux/app/hooks';
import ProgressBar from './ProgressBar';
import QuestionBody from './QuestionBody';
import { FcCheckmark } from 'react-icons/fc';

const Practice = () => {
    const [active, setActive] = useState(0);
    const [progress, setProgress] = useState(0);
    const questions = useAppSelector((state) => state.questions.questions)
    return (
        <main className='main-practice'>
            <section className='question'>
                <div >
                    <h2>Choose The correct Answer:</h2>
                    <ProgressBar progress={progress} />
                    {questions.map((question, index) => (
                        <div key={question.id}>
                            <QuestionBody question={question} index={index} active={active} setActive={setActive} setProgress={setProgress} />
                        </div>
                    ))
                    }
                </div>
                {active + 1 > questions.length &&
                    <div className='submit'>
                        <div className='success'>
                            <FcCheckmark size={80} />
                        </div>
                        <h2>
                            Thank You!
                        </h2>
                        <a href="/rank" className='btn'>See Your Rank</a>
                    </div>}
            </section>
        </main>
    )
}

export default Practice;
