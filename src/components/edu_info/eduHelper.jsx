import ListEdu from "./eduRender"

export default function EduHelper (props) {
    const newsection = props.eduSection
    
    if (newsection === undefined) return console.log('error')
    if (newsection === null) return console.log('error')
    if (newsection === '') return console.log('error')

    return (
        <div className="eduMain">
            <div className="edutitle">Education History:</div>
         {newsection.map((element) => {
          return <div key={element.id}><ListEdu element={element}/></div>
        })}
        </div>
        );
    }