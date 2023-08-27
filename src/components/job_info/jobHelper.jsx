import ListItem from "./jobRender"

export default function JobHelper (props) {
    const newsection = props.jobsection

    if (newsection === undefined) return console.log('error')
    if (newsection === null) return console.log('error')
    if (newsection === '') return console.log('error')

    return (
        <div className="jobMain">
          <div className="jobtitle">Professional Experience:</div>
         {newsection.map((element) => {
          return <div key={element.id}><ListItem element={element}/></div>
        })}
        </div>
        );
    }