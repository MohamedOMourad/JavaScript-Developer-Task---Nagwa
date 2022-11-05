import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../redux/app/hooks';
import { SetRank } from '../redux/practice';
import { getRank } from '../utils/API';

const Rank = () => {
    const dispatch = useAppDispatch()
    const score = useAppSelector((state) => state.practice.score);
    console.log(score);
    useEffect(() => {
        (async () => {
            const rank = await getRank(score);
            dispatch(SetRank(rank))
        })()
    }, [])
    return (
        <main className='main-rank'>
            <section className='rank'>

            </section>
        </main>
    )
}

export default Rank;
