import { useState } from 'react'
import { Question } from '../types';
const choices = [
    { id: 0, pos: 'noun' },
    { id: 1, pos: 'adverb' },
    { id: 2, pos: 'adjective' },
    { id: 3, pos: 'verb' }
]
const QuestionBody = ({ question, index, active, setActive, setProgress }: { question: Question, index: number, active: number, setActive: Function, setProgress: Function }) => {
    const [score, setScore] = useState(0);
    const [activeBtn, setActiveBtn] = useState(0)
    const [correct, setCorrect] = useState('choice-btn')
    const [disabled, setDisabled] = useState(false)
    const calcScore = (answer: string) => {
        if (answer === question.pos) {
            setScore(score => score + 10)
            setCorrect('correct')
        } else {
            setCorrect('wrong')
        }
    }
    return (
        <div className='relative'>
            <div className={`${active === index ? 'show' : 'hidden none'} `} id={`x-${index}`}>
                <p className='question-body'>{question?.word} </p>
                <div className='choices-container'>
                    {choices.map((choice, index) => (
                        <button
                            onClick={() => {
                                calcScore(choice.pos)
                                setActiveBtn(choice.id)
                                setTimeout(() => setActive((val: number) => val + 1), 1000)
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