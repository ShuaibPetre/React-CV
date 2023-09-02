export default function JobFormHelper(onChange, companyName, companyPosition, companyLocation, startDate, endDate, 
    onSubmit) {
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
                    <br />
                    <button>Submit</button>
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