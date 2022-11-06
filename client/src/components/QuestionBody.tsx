import { useState } from 'react'
import { useAppDispatch } from '../redux/app/hooks';
import { setCorrectAnswers, setScore } from '../redux/practiceSlice';
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

    const [activeBtn, setActiveBtn] = useState(0)        //add active class for selected btn

    const [correct, setCorrect] = useState('choice-btn') //add correct class for correct btn

    const [disabled, setDisabled] = useState(false)      //prevent select any btn after first selection

    const dispatch = useAppDispatch();

    //check answers, update score, add the appropriate class for correct or wrong 
    const checkAnswer = (answer: string) => {
        if (answer === question.pos) {
            dispatch(setCorrectAnswers(1))
            setCorrect('correct')
        } else {
            setCorrect('wrong')
        }
    }

    return (
        <div className='question'>
            <div className={`${activeQuestion === index ? 'show-question' : 'hidden-question'} `} id={`x-${index}`}>
                <p className='question-body'>{question?.word}</p>
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
                            className={`${activeBtn === index ? correct : 'choice-btn'}`}
                        >
                            {choice.pos}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default QuestionBody;