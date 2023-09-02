import ListEdu from "./eduRender"

export default function EduHelper (props) {
    const newsection = props.eduSection
    
    if (newsection === undefined) return null
    if (newsection === null) return null
    if (newsection === '') return null
    console.log(props.newColor)
    return (
        <div className="eduMain">
            <div className="edutitle" style={props.newColor.subcolor}>Education History:</div>
         {newsection.map((element) => {
          return <div key={element.id}><ListEdu element={element}/></div>
        })}
        </div>
        );
    }