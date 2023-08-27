import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import EduInfoForm from "./components/edu_info/createEduForm";
import JobInfoForm from "./components/job_info/createJobForm";
import PersonalInfoForm from "./components/personal_info/personalInfo";
import ResumeBuilder from "./components/resume";
import "./components/styles/App.css"


export default function App() {
  const [personalInfo, setPersonalInfo] = useState({fullName:"",
  fullEmail:"",
  cellNumber:"",
  address:"",});

  const [formInfo, setformInfo] = useState({
    companyName:"",
    companyPosition:"",
    companyLocation:"",
    startDate:"",
    endDate:""
  });

  const [eduForm, setEduForm] = useState({
    eduName:"",
    eduQual:"",
    eduLocation:"",
    startDate:"",
    endDate:""
  });

  const [jobsection, setJobSection] = useState('');
  const [eduSection, setEduSection] = useState('')
  const [activeIndex, setActiveIndex] = useState(2)

  function handlePersonalInfoChange(e) {
    const key = e.target.id;
    console.log(key)
    setPersonalInfo({ ...personalInfo, [key]: e.target.value });
  }
  function handleformInfoChange(e) {
    const key = e.target.id;
    setformInfo({ ...formInfo, [key]: e.target.value });
  }
  function handleEduChange(e) {
    const key = e.target.id;
    setEduForm({ ...eduForm, [key]: e.target.value });
  }
  const handleJobSubmit = (e) => {
    e.preventDefault();
    const key = uuidv4()
    const newform = {...formInfo, id: [key]}
    setJobSection(jobsection => [...jobsection, newform])
    setformInfo({
      companyName:"",
      companyPosition:"",
      companyLocation:"",
      startDate:"",
      endDate:""
    })
  }
  const handleEduSubmit = (e) => {
    e.preventDefault();
    const key = uuidv4()
    const newform = {...eduForm, id: [key]}
    setEduSection(eduSection => [...eduSection, newform])
    setEduForm({
      eduName:"",
      eduQual:"",
      eduLocation:"",
      startDate:"",
      endDate:""
    })
  }

  return (
    <div className="container">
      <div className="leftside">
        <PersonalInfoForm
        onChange={handlePersonalInfoChange}
        fullName={personalInfo.fullName}
        fullEmail={personalInfo.fullEmail}
        cellNumber={personalInfo.cellNumber}
        address={personalInfo.address}
        />
        <JobInfoForm
        companyName={formInfo.companyName}
        companyPosition={formInfo.companyPosition}
        companyLocation={formInfo.companyLocation}
        startDate={formInfo.startDate}
        endDate={formInfo.endDate}
        onChange={handleformInfoChange}
        onSubmit={handleJobSubmit} 
        isActive={activeIndex === 0}
        onShow={() => setActiveIndex(0)}
        />
        <EduInfoForm
        eduName={eduForm.eduName}
        eduQual={eduForm.eduQual}
        eduLocation={eduForm.eduLocation}
        startDate={eduForm.startDate}
        endDate={eduForm.endDate}
        onChange={handleEduChange}
        onSubmit={handleEduSubmit} 
        isActive={activeIndex === 1}
        onShow={() => setActiveIndex(1)}
        />
      </div>
      <div className="rightside">
        <ResumeBuilder
        personalProps={personalInfo}
        jobsection={jobsection}
        eduSection={eduSection}
        />
      </div>
      
      </div>
  );
}