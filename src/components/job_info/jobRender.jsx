import "../styles/jobRender.css"


export default function ListItem(props) {
    const startdate = new Date(props.element.startDate);
    const formattedDate = startdate.toLocaleString('en-US', {
      timeZone: 'UTC',
      year: 'numeric',
      month: 'numeric',
    })
    const enddate = new Date(props.element.endDate);
    const formattedendDate = enddate.toLocaleString('en-US', {
      timeZone: 'UTC',
      year: 'numeric',
      month: 'numeric',
    })
    const FinalDate = () => {
      if (props.element.endDate === "") return "current"
      if (props.element.endDate !== "") return formattedendDate
    }
    
    return  <div className="jobDiv"> 
      <div className="jobsideinfo">
        <div className="startDate">{formattedDate} - <FinalDate/></div>
        <div className="companyLocation">{props.element.companyLocation}</div>
      </div>
      <div className="jobmaininfo">
        <div className="companyName">{props.element.companyName}</div>
        <div className="companyPosition">{props.element.companyPosition}</div>
        <div className="addInfo">{props.element.addInfo}</div>
      </div>
      
    </div>
  }