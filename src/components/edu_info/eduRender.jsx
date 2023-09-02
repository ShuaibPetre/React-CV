export default function ListEdu(props) {
  const edustartdate = new Date(props.element.edustartDate);
    const formattededuDate = edustartdate.toLocaleString('en-US', {
      timeZone: 'UTC',
      year: 'numeric',
      month: 'numeric',
    })
    const eduenddate = new Date(props.element.eduendDate);
    const formattedEduendDate = eduenddate.toLocaleString('en-US', {
      timeZone: 'UTC',
      year: 'numeric',
      month: 'numeric',
    })
    const EduFinalDate = () => {
      if (props.element.eduendDate === "") return "current"
      if (props.element.eduendDate !== "") return formattedEduendDate
    }
    return  <div className="eduDiv"> 
      <div className="edusideinfo">
        <div className="startDate">{formattededuDate} - <EduFinalDate /> </div>
        <div className="eduLocation">{props.element.eduLocation}</div>
      </div>
      <div className="edumaininfo">
        <div className="eduName">{props.element.eduName}</div>
        <div className="eduQual">{props.element.eduQual}</div> 
      </div>
    </div>
  }