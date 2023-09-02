import ListItem from "./jobRender"

export default function JobHelper (props) {
    const newsection = props.jobsection

    if (newsection === undefined) return null
    if (newsection === null) return null
    if (newsection === '') return null
    return (
        <div className="jobMain" >
          <div className="jobtitle" style={props.newColor.subcolor}>Professional Experience:</div>
         {newsection.map((element) => {
          return <div key={element.id}><ListItem element={element}/></div>
        })}
        </div>
        );
    }