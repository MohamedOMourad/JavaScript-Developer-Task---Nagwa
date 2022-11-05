import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <>
            <header>
                <nav className='container'>
                    <img id='logo' src="https://contents.nagwa.com/content/images/logo.svg" alt="Nagwa Logo" />
                </nav>
            </header>
            <main>
                <section className='main-section'>
                    <div className='main-image'>
                        <img src="https://contents.nagwa.com/content/images/exam-illest.svg" alt="students" />
                    </div>
                    <div className='exam-desc'>
                        <h1>Practice</h1>
                        <p>
                            In English language, words can be categorized according to their syntactic functions, which is known as "Part of Speech".
                            <br />
                            so enjoy practice categorizing a set of words according to their part of speech.
                        </p>
                        <div>
                            <Link to='/practice'>Start</Link>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default Home
