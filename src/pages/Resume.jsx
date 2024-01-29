import Resume from '../assets/ResumePDF.pdf'

export default function ResumePage() {
    <>
    return <h1>Resume</h1>
    <a href= {Resume} download="Resume" target='_blank'>
        <button>Dowload Resume</button>
    </a>
    </>
}