import Resume from '../../assets/ResumePDF.pdf'
export default function ResumePage() {
  return (
    <>
      <h1>Resume</h1>
      <img className="resume-pic" src="/Resume1.PNG" />
      <img className="resume-pic" src="/Resume2.PNG" />
      <a href= {Resume} download="Resume" target="_blank">
        <button className="resume m-5">Download Resume here</button>
      </a>
    </>
  );
}
