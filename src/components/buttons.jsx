export default function Button ({save, remove, cancel}) {
    return (
        <div className="buttons">
            <div className="delete" onClick={remove} type="button">Delete</div>
            <div className="mainbuttons">
                <div className="save" onClick={save} type="button">Save</div>
                <div className="cancel" onClick={cancel} type="cancel">Save</div>

            </div>
        </div>
    )
}