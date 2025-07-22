import React, { useRef } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

import EduHelper from "./edu_info/eduHelper";
import JobHelper from "./job_info/jobHelper";
import PersonalInfoRender from "./personal_info/personalInfoRender";
import "./styles/resume.css";

export default function ResumeBuilder({ personalProps, jobsection, eduSection, newColor }) {
  const resumeRef = useRef();

  const handleDownloadPdf = async () => {
    const element = resumeRef.current;

    const canvas = await html2canvas(element, { scale: 2 });
    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF("p", "mm", "a4");
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

    pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save(`${personalProps.fullName || "resume"}.pdf`);
  };

  return (
    <div>
      {/* Resume content */}
      <div className="cv" ref={resumeRef}>
        <div className="cv-personal">
          <PersonalInfoRender
            fullName={personalProps.fullName}
            fullEmail={personalProps.fullEmail}
            cellNumber={personalProps.cellNumber}
            address={personalProps.address}
            newColor={newColor}
          />
        </div>
        <div className="cv-jobs">
          <JobHelper jobsection={jobsection} newColor={newColor} />
        </div>
        <div className="cv-edu">
          <EduHelper eduSection={eduSection} newColor={newColor} />
        </div>
      </div>

      {/* Download button */}
      <div style={{ marginTop: "20px", textAlign: "center" }}>
        <button onClick={handleDownloadPdf}>📄 Download Resume as PDF</button>
      </div>
    </div>
  );
}
