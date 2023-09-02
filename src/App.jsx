import { useState } from "react";
import { ColorPicker, useColor } from "react-color-palette";
import { SketchPicker, SliderPicker } from 'react-color';
import { stringify, v4 as uuidv4 } from "uuid";
import {WebFont} from 'webfontloader';
import EduInfoForm from "./components/edu_info/createEduForm";
import EduFormLinks from "./components/edu_info/eduLists";
import example from "./components/example-data";
import ColorChanger from "./components/colorHelper";
import JobInfoForm from "./components/job_info/createJobForm";
import JobFormLinks from "./components/job_info/jobLists";
import PersonalInfoForm from "./components/personal_info/personalInfo";
import ResumeBuilder from "./components/resume";
import "./components/styles/App.css"
import "./components/styles/fonts/my-font.ttf"
import { FaRegEdit } from "react-icons/fa";
import { FaFileAlt } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
import { FaChevronUp } from "react-icons/fa";
import { FaCloudDownloadAlt } from "react-icons/fa";


export default function App() {
  const [personalInfo, setPersonalInfo] = useState(example.personalInfo);

  const [formInfo, setformInfo] = useState({
    companyName:"",
    companyPosition:"",
    companyLocation:"",
    startDate:"",
    endDate:"",
    addInfo:""
  });

  const [eduForm, setEduForm] = useState({
    eduName:"",
    eduQual:"",
    eduLocation:"",
    edustartDate:"",
    eduendDate:""
  });

  const [jobsection, setJobSection] = useState(example.jobsection);
  const [eduSection, setEduSection] = useState(example.eduSection)
  const [activeIndex, setActiveIndex] = useState(2)
  const [color, setColor] = useColor("#002244");
  const [formIndex, setFormIndex] = useState(0);
  const [currentFont, setCurrentFont] = useState("my-font")
  const [openForm, setOpenForm] = useState(0)

  
  function handlePersonalInfoChange(e) {
    const key = e.target.id;
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
    clearJobForm(e);
    const key = uuidv4()
    const newform = {...formInfo, id: key}
    setJobSection(jobsection => [...jobsection, newform])
    clearJobForm(e);
    setActiveIndex(2);
  }
  const clearJobForm = (e) => {
    e.preventDefault();
    setformInfo({
      companyName:"",
      companyPosition:"",
      companyLocation:"",
      startDate:"",
      endDate:"",
      addInfo: ""
    })
    setActiveIndex(2);
    
  }
  const handleEduSubmit = (e) => {
    e.preventDefault();
    clearEduForm(e)
    const key = uuidv4()
    const neweduform = {...eduForm, id: key}
    setEduSection(eduSection => [...eduSection, neweduform])
    clearEduForm(e);
    setActiveIndex(2);
  }
  const clearEduForm = (e) => {
    e.preventDefault();
    setEduForm({
      eduName:"",
      eduQual:"",
      eduLocation:"",
      edustartDate:null,
      eduendDate:""
    })
    setActiveIndex(2);
  }
  const handleJobEdit = (e) => {
    e.preventDefault();
    const newsection = jobsection.filter((job) => job.id !== e.target.id)
    const key = uuidv4()
    const newform = {...formInfo, id: key}
    newsection.push(newform)
    setJobSection(newsection)
    clearJobForm(e);
  }
  const openJobEdit = (e) => {
    setActiveIndex(e.target.id)
    const job = jobsection.find(job => job.id == e.target.id)
    setformInfo({
      companyName:job.companyName,
      companyPosition: job.companyPosition,
      companyLocation:job.companyLocation,
      startDate:job.startDate,
      endDate:job.endDate,
      addInfo: job.addInfo
    })
  }
  const openEduEdit = (e) => {
    setActiveIndex(e.target.id)
    const edu = eduSection.find((edu) => edu.id === e.target.id)
    setEduForm({
      eduName:edu.eduName,
      eduQual:edu.eduQual,
      eduLocation:edu.eduLocation,
      edustartDate:edu.edustartDate,
      eduendDate:edu.eduendDate
    })
  }

  const handleEduEdit = (e) => {
    e.preventDefault();
    const newedusection = eduSection.filter(edu => edu.id !== e.target.id)
    const key = uuidv4()
    const neweduform = {...eduForm, id: key}
    newedusection.push(neweduform)
    setEduSection(newedusection)
    clearEduForm(e);
  }
  const removeJob = (e) => {
    e.preventDefault()
    const newsection = jobsection.filter((job) => job.id !== e.target.dataset.key)
    setJobSection(newsection)
  }
  const removeEdu = (e) => {
    e.preventDefault();
    const newsection = eduSection.filter((job) => job.id !== e.target.dataset.key)
    setEduSection(newsection)
  }
  const clearForm = (e) => {
    clearEduForm(e)
    clearJobForm(e);
    setPersonalInfo({
      fullName: "",
      fullEmail: "",
      cellNumber: "",
      address: ""
    })
    setJobSection([])
    setEduSection([])
  }
  const loadForm = (e) => {
    setPersonalInfo(example.personalInfo)
    setJobSection(example.jobsection)
    setEduSection(example.eduSection)
    
  }
  const rColor = String(color.rgb.r)
  const gColor = String(color.rgb.g)
  const bColor = String(color.rgb.b)
  const rgbaColor = rColor + "," + gColor + "," + bColor
  const newbgColor = "rgba(" + rgbaColor + ",0.3)"
  const newMainColor = "rgba(" + rgbaColor + ",1)"
  const handleColor = (color) => {
    console.log(color)
    setColor(color)
  }
  
  const newColor = {
    maincolor:{
      backgroundColor: newMainColor,
    },
    subcolor: {
      backgroundColor: newbgColor,
    }
  }
  const handleFont = (e) => {
    console.log({btn3})
    setCurrentFont(e.target.id)
  }
  
  const btn2 = () => {(formIndex === 0) ? "rgba(237, 231, 225, 0.5)" : "transparent"}
const btn3 = btn2
  const btnstuff = {
    maincolor:{
      backgroundColor: btn3,
    },}
  return (
    <div className="container" style={{fontFamily: currentFont}}>
      <div className="optionside">
        <div className="options">
          <button className={(formIndex === 0) ? 'active' : ''}
          onClick={() => setFormIndex(0)}><FaFileAlt /> <br /> Content</button>

          <button className={(formIndex === 1) ? 'active' : ''} 
          onClick={() => setFormIndex(1)}><FaRegEdit /> <br /> Customize</button>

        </div>
      </div>
      <div className="leftside">
      <div className="formstuff">
          <button  onClick={clearForm}><FaTrash /> Clear Resume</button>
          <button onClick={loadForm}><FaCloudDownloadAlt /> Load Example</button>
      </div>
         {(formIndex === 1) ? 
         (
         <div className="editside">
          <div className="colorpicker"><p>Pick your colour: </p><SliderPicker color={color} onChange={handleColor}/> </div>
          <div className="fonts">

            <button className={(currentFont === "Times New Roman") ? 'active' : ''}
            style={{fontFamily: "Times New Roman"}} onClick={handleFont} 
            id={"Times New Roman"}>Times New Roman</button>

            <button className={(currentFont === "Arial") ? 'active' : ''}
            style={{fontFamily: "Arial"}} onClick={handleFont} 
            id={"Helvetica"}>Ariel Font</button>

            <button className={(currentFont === "my-font") ? 'active' : ''}
            style={{fontFamily: "my-font"}} onClick={handleFont} 
            id={"my-font"}>Garamond Font</button>

          </div>
         </div>
         ) : 
         (
          <div className="formside">
            <PersonalInfoForm
            onChange={handlePersonalInfoChange}
            fullName={personalInfo.fullName}
            fullEmail={personalInfo.fullEmail}
            cellNumber={personalInfo.cellNumber}
            address={personalInfo.address}
            />
            <div className="jobForms">
            <button className="formtitle" onClick={() => { 
              if (openForm !== 0)setOpenForm(0)
              if (openForm === 0)setOpenForm(2)}}>
              
              <h2><FaGraduationCap /> Job Info</h2>
              {(openForm === 0) ?
              (<div><FaChevronUp /></div>) :
              (<div><FaChevronDown /></div>)}
            </button>
            
           {(openForm === 0) ? (
              <div className="jobStuff">
                <JobFormLinks 
                jobsection={jobsection} 
                companyName={formInfo.companyName}
                companyPosition={formInfo.companyPosition}
                companyLocation={formInfo.companyLocation}
                startDate={formInfo.startDate}
                endDate={formInfo.endDate}
                addInfo={formInfo.addInfo}
                onChange={handleformInfoChange}
                onSubmit={handleJobEdit}
                onClick={openJobEdit}
                onReset={clearJobForm}
                isActive={activeIndex}
                onRemove={removeJob}
                />
                <JobInfoForm
                companyName={formInfo.companyName}
                companyPosition={formInfo.companyPosition}
                companyLocation={formInfo.companyLocation}
                startDate={formInfo.startDate}
                endDate={formInfo.endDate}
                addInfo={formInfo.addInfo}
                onChange={handleformInfoChange}
                onSubmit={handleJobSubmit}
                isActive={activeIndex === 0}
                onShow={() => setActiveIndex(0)}
                onReset={clearJobForm}
                openForm={openForm}
                />
            </div>
            ) : (null)}
          </div>
          <div className="eduForms">
            <button className="formtitle" onClick={() => { 
              if (openForm !== 1)setOpenForm(1)
              if (openForm === 1)setOpenForm(2)}}>
      
              <h2><FaGraduationCap /> Edu Info</h2>
              {(openForm === 1) ?
              (<div><FaChevronUp /></div>) :
              (<div><FaChevronDown /></div>)}
            </button>
            
            {(openForm === 1) ? (
            <div className="eduStuff">
              <EduFormLinks 
            eduSection={eduSection}
            eduName={eduForm.eduName}
            eduQual={eduForm.eduQual}
            eduLocation={eduForm.eduLocation}
            edustartDate={eduForm.edustartDate}
            eduendDate={eduForm.eduendDate}
            onChange={handleEduChange}
            onSubmit={handleEduEdit}
            onClick={openEduEdit}
            onReset={clearEduForm}
            isActive={activeIndex}
            onRemove={removeEdu}
            />
              <EduInfoForm
            eduName={eduForm.eduName}
            eduQual={eduForm.eduQual}
            eduLocation={eduForm.eduLocation}
            edustartDate={eduForm.startDate}
            eduendDate={eduForm.endDate}
            onChange={handleEduChange}
            onSubmit={handleEduSubmit} 
            isActive={activeIndex === 1}
            onShow={() => setActiveIndex(1)}
            onEduReset={clearEduForm}
            openForm={openForm}
            handleOpenForm={() => { 
              if (openForm !== 1)setOpenForm(1)
              if (openForm === 1)setOpenForm(2)}}
            />
            </div>) : (null)}
            </div>
          </div>
         )}
        
        
      </div>
      
      <div className="rightside">
        <ResumeBuilder
        personalProps={personalInfo}
        jobsection={jobsection}
        eduSection={eduSection}
        newColor={newColor}
        />
      </div>
      
      </div>
  );
}