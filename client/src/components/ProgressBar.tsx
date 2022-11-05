
const ProgressBar = ({ progress }: { progress: number }) => {
    return (
        <div>
            <div className='question-count'>
                Question {progress / 10} / 10
            </div>
            <div className='progress'>
                <div style={{ width: `${progress}%`, height: '100%', backgroundColor: '#f4a900', borderRadius: '20px' }}>
                </div>
            </div>
            <div className='question-count'>
                {progress}%
            </div>
        </div>
    )
}

export default ProgressBar;
