import React from 'react'

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
                        <img src="https://kjwldcclontmioflpfvx.supabase.co/storage/v1/object/public/img/student.png" alt="students" />
                    </div>
                    <div className='exam-desc'>
                        <h1>Exam description</h1>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste dolores itaque, assumenda nemo deleniti earum recusandae vero voluptatum id odit nam veritatis eligendi aliquid enim, ex hic unde amet molestiae.
                        </p>
                        <div>
                            <a href='/practice' className='btn'>Start</a>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default Home
