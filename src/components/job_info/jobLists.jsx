import JobInfoForm from "./createJobForm"

export default function JobFormLinks(props) {
    const newsection = props.jobsection
    if (newsection === undefined) return null
    if (newsection === null) return null
    if (newsection === '') return null
    // ADD ISACTIVE TO THE DIV. THEN PUT FORM FIRST AND BUTTON SELECTS IF ACTIVE. CAN MAYBE ADD STATE TO THIS COMPONENT
    return (
        <div className="JobsList">
         {newsection.map((element) => {
          const aDate = new Date(element.startDate)
          return <div data-key={element.id} key={element.id} >
             {(props.isActive === element.id) ? (
             <JobInfoForm
                companyName={props.companyName}
                companyPosition={props.companyPosition}
                companyLocation={props.companyLocation}
                startDate={props.startDate}
                endDate={props.endDate}
                addInfo={props.addInfo}
                onChange={props.onChange}
                onSubmit={props.onSubmit}  
                onReset={props.onReset}
                onClick={props.onClick}
                isActive={true}
                formid={element.id}
                onRemove={props.onRemove}
        />) :
            (<button className="jobLink" onClick={props.onClick} data-key={element.id} id={element.id}>{element.companyName}</button>)}
            </div>
        })}
        </div>
        );
}