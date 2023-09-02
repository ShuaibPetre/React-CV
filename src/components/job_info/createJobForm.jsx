
export default function JobInfoForm({onChange, companyName, companyPosition, companyLocation, startDate, endDate, addInfo,
  onSubmit, isActive, onShow, onReset, formid, onRemove,}) {
  return (
    <>
    <div className="jobInfo">
      <section className="panel">
        {isActive ? (
            <div className="formdiv">
            <form 
            onSubmit={onSubmit}
            id={formid}
            >
            <label>Company Name:</label>
            <br />
            <input
                type="text"
                id="companyName"
                value={companyName}
                onChange={onChange}
                data-key="companyName"
                required
            />
            <br />
            <label>Company Position:</label>
            <br />
            <input
                type="text"
                id="companyPosition"
                value={companyPosition}
                onChange={onChange}
                data-key="companyPosition"
                required
            />
            <br />
            <label>Location:</label>
            <br />
            <input
                type="text"
                id="companyLocation"
                value={companyLocation}
                onChange={onChange}
                data-key="companyLocation"
                required
            />
            <br />
            <label>Start Date:</label>
            <input
                type="date"
                id="startDate"
                value={startDate}
                onChange={onChange}
                data-key="startDate"
                required
            />
            <br />
            <label>End Date:</label>
            <input
                type="date"
                id="endDate"
                value={endDate}
                onChange={onChange}
                data-key="endDate"
            />
            <label>Additional Info:</label>
            <textarea
                type="text"
                id="addInfo"
                value={addInfo}
                onChange={onChange}
                data-key="addInfo"
            />
            <br />
            <button>Submit</button>
            { (onRemove !== undefined) ? <button onClick={onRemove} data-key={formid}>Remove</button> : (null)}
            <button onClick={onReset}>Cancel</button>
            </form>
          </div>
        ) : (
            <button onClick={onShow}>
            + Experience
            </button>
      )}
    </section>
      </div>
    </>
  );
  
}
