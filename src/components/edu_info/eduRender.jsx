export default function ListEdu(props) {
  const edustartdate = new Date(props.element.edustartDate);
    const formattededuDate = edustartdate.toLocaleString('en-US', {
      timeZone: 'UTC',
      year: 'numeric',
      month: 'numeric',
    })
    const eduenddate = new Date(props.element.eduendDate);
    const formattededuendDate = eduenddate.toLocaleString('en-US', {
      timeZone: 'UTC',
      year: 'numeric',
      month: 'numeric',
    })
    return  <div className="eduDiv"> 
      <div className="edusideinfo">
        <div className="startDate">{formattededuDate} - {formattededuendDate}</div>
        <div className="eduLocation">{props.element.eduLocation}</div>
      </div>
      <div className="edumaininfo">
        <div className="eduName">{props.element.eduName}</div>
        <div className="eduQual">{props.element.eduQual}</div> 
      </div>
    </div>
  }