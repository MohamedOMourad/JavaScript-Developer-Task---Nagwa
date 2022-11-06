import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <>
            <header>
                <nav className='container'>
                    <img id='logo' src="https://contents.nagwa.com/content/images/logo.svg" alt="Logo" />
                </nav>
            </header>
            <main className='home-main'>
                <section className='Home-section'>
                    {/* practice description */}
                    <div className='home-desc'>
                        <h1>Practice</h1>
                        <p>
                            In English language, words can be categorized according to their syntactic functions, which is known as "Part of Speech".
                            <br />
                            so enjoy practice categorizing a set of words according to their part of speech.
                        </p>
                        <div>
                            <Link to='/practice'>Start Practicing</Link>
                        </div>
                    </div>
                    {/* practice Image */}
                    <div className='home-image'>
                        <img src="https://contents.nagwa.com/content/images/exam-illest.svg" alt="students" />
                    </div>
                </section>
            </main>
        </>
    )
};

export default Home;
