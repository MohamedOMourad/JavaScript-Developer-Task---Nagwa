//react
import { useEffect, useState } from 'react'

//Custom components
import ProgressBar from '../components/ProgressBar';
import QuestionBody from '../components/QuestionBody';

//react-icons
import { FcCheckmark } from 'react-icons/fc';

//redux
import { useAppDispatch, useAppSelector } from '../redux/app/hooks';
import { resetResult, setScore } from '../redux/practiceSlice';

//react-router-dom
import { Link } from 'react-router-dom';

const Practice = () => {

    const [activeQuestion, setActiveQuestion] = useState(0);//add active class for present question

    const [progress, setProgress] = useState(0);//dynamic increment progress bar

    const questions = useAppSelector((state) => state.practice.questions);
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(resetResult())
    }, [])

    return (
        <main className='practice-main'>
            <section>
                <div>
                    <h2>Choose The Correct Answer:</h2>

                    {/* Progress bar */}
                    <ProgressBar progress={progress} />

                    {questions.map((question, index) => (
                        <div key={question.id}>
                            <QuestionBody question={question} index={index}
                                activeQuestion={activeQuestion}
                                setActiveQuestion={setActiveQuestion}
                                setProgress={setProgress}
                            />
                        </div>
                    ))
                    }
                </div>

                {/* show submission button when final question end */}
                {(activeQuestion + 1 > questions.length && questions.length > 0) &&
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
