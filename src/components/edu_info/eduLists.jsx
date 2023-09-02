import EduInfoForm from "./createEduForm"

export default function EduFormLinks(props) {
    const newsection = props.eduSection
    if (newsection === undefined) return null
    if (newsection === null) return null
    if (newsection === '') return null
    // ADD ISACTIVE TO THE DIV. THEN PUT FORM FIRST AND BUTTON SELECTS IF ACTIVE. CAN MAYBE ADD STATE TO THIS COMPONENT
    return (
        <div className="EduList">
         {newsection.map((element) => {
          const aDate = new Date(element.startDate)
          return <div data-key={element.id} key={element.id} >
             {(props.isActive === element.id) ? (
             <EduInfoForm
                eduName={props.eduName}
                eduQual={props.eduQual}
                eduLocation={props.eduLocation}
                edustartDate={props.edustartDate}
                eduendDate={props.eduendDate}
                onChange={props.onChange}
                onSubmit={props.onSubmit} 
                onEduReset={props.onReset}
                onClick={props.onClick}
                isActive={true}
                formid={element.id}
                onRemove={props.onRemove}
             />) :
            (<button className="eduLink" onClick={props.onClick} data-key={element.id} id={element.id}>{element.eduName}</button>)}
            </div>
        })}
        </div>
        );
}