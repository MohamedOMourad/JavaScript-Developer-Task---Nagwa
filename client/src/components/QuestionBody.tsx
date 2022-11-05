import { useState } from 'react'
import { useAppDispatch } from '../redux/app/hooks';
import { setScore } from '../redux/practice';
import { Question } from '../types';

//choices buttons
const choices = [
    { id: 0, pos: 'noun' },
    { id: 1, pos: 'adverb' },
    { id: 2, pos: 'adjective' },
    { id: 3, pos: 'verb' }
]

type Props = {
    question: Question,
    index: number,
    activeQuestion: number,
    setActiveQuestion: Function,
    setProgress: Function
}

const QuestionBody = ({ question, index, activeQuestion, setActiveQuestion, setProgress }: Props) => {
    const dispatch = useAppDispatch();
    const [activeBtn, setActiveBtn] = useState(0)
    const [correct, setCorrect] = useState('choice-btn')
    const [disabled, setDisabled] = useState(false)
    const checkAnswer = (answer: string) => {
        if (answer === question.pos) {
            dispatch(setScore(10))
            setCorrect('correct')
        } else {
            setCorrect('wrong')
        }
    }
    return (
        <div className='relative'>
            <div className={`${activeQuestion === index ? 'show' : 'hidden none'} `} id={`x-${index}`}>
                <p className='question-body'>{question?.word} </p>
                <div className='choices-container'>
                    {choices.map((choice, index) => (
                        <button
                            onClick={() => {
                                checkAnswer(choice.pos)
                                setActiveBtn(choice.id)
                                setTimeout(() => setActiveQuestion((val: number) => val + 1), 1000)
                                setProgress((val: number) => val + 10)
                                setDisabled(true)
                            }}
                            disabled={disabled}
                            key={choice.id}
                            className={`${activeBtn === index ? correct : 'choice-btn'}`}>{choice.pos}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default QuestionBody;