import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../redux/app/hooks';
import { SetRank, setScore } from '../redux/practiceSlice';
import { getRank } from '../utils/API';

const Rank = () => {
    const dispatch = useAppDispatch()
    const score = useAppSelector((state) => state.practice.score);
    const rank = useAppSelector((state) => state.practice.rank);
    useEffect(() => {
        (async () => {
            const rank = await getRank(score);
            dispatch(SetRank(rank))
        })()
    }, [])
    return (
        <main className='rank-main'>
            <section >
                <div className='rank-chart'>
                    <div className='student-rank'>
                        <div className='inner'>
                            <p>
                                {rank}
                            </p>
                        </div>
                        <div className='outer'>
                            <p>
                                Rank#
                            </p>
                        </div>
                    </div>
                    <div className='score-chart'>
                        <div style={{ width: `${score}%`, height: '100%', backgroundColor: '#77b723' }} />
                        <div className='student-score'>
                            <p>{score}%</p>
                        </div>
                    </div>
                </div>
                <div className='questions-analysis'>
                    <div className='answers'>Correct Answers <span style={{ color: '#00CE70' }}>{score / 10} <sub>{`(${score}%)`}</sub></span></div>
                    <div className='answers'>Wrong Answers <span style={{ color: '#E62143' }}>{10 - score / 10} <sub>{`(${100 - score}%)`}</sub> </span></div>
                </div>
                <div className='action'>
                    <Link to='/'>Back to home</Link>
                    {score !== 100 && <Link to='/practice'>Try again</Link>}
                </div>
            </section>
        </main>
    )
}

export default Rank;
