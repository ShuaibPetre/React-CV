import EduHelper from "./edu_info/eduHelper";
import JobHelper from "./job_info/jobHelper";
import PersonalInfoRender from "./personal_info/personalInfoRender";
import "./styles/resume.css"

export default function ResumeBuilder ({personalProps, jobsection, eduSection, newColor}) {

  
  
  return (
    <div className="cv">
      <div className="cv-personal">
        <PersonalInfoRender
          fullName={personalProps.fullName}
          fullEmail={personalProps.fullEmail}
          cellNumber={personalProps.cellNumber}
          address={personalProps.address}
          newColor={newColor}
          />
      </div>
      <div className="cv-jobs"><JobHelper jobsection={jobsection} newColor={newColor}/></div>
      <div className="cv-edu"><EduHelper eduSection={eduSection} newColor={newColor}/></div>
    </div>
)}