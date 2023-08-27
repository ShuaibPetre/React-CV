export default function JobInfoForm({onChange, companyName, companyPosition, companyLocation, startDate, endDate, onSubmit, isActive, onShow}) {
  return (
    <>
    <div className="jobInfo">
      <h2>Job Info:</h2>

      
      <section className="panel">
        {isActive ? (
            <div className="formdiv">
            <form 
            onSubmit={onSubmit}
            id="jobForm"
            >
            <label>Company Name:</label>
            <input
                type="text"
                id="companyName"
                value={companyName}
                onChange={onChange}
                data-key="companyName"
            />
            <br />
            <label>Company Position:</label>
            <input
                type="text"
                id="companyPosition"
                value={companyPosition}
                onChange={onChange}
                data-key="companyPosition"
            />
            <br />
            <label>Location:</label>
            <input
                type="text"
                id="companyLocation"
                value={companyLocation}
                onChange={onChange}
                data-key="companyLocation"
            />
            <br />
            <label>Start Date:</label>
            <input
                type="date"
                id="startDate"
                value={startDate}
                onChange={onChange}
                data-key="startDate"
            />
            <label>End Date:</label>
            <input
                type="date"
                id="endDate"
                value={endDate}
                onChange={onChange}
                data-key="endDate"
            />
            <br />
            <button>Submit</button>
            </form>
          </div>
        ) : (
            <button onClick={onShow}>
            Add Job Information
            </button>
      )}
    </section>
      </div>
    </>
  );
  
}
