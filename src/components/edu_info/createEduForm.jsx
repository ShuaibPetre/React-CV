export default function EduInfoForm({onChange, eduName, eduQual, eduLocation, edustartDate, eduendDate, onSubmit, isActive, onShow}) {
    return (
      <>
      <div className="eduInfo">
        <h2>Education Info:</h2>
  
        
        <section className="panel">
          {isActive ? (
              <div className="formdiv">
              <form 
              onSubmit={onSubmit}
              id="jobForm"
              >
              <label>Institution Name:</label>
              <input
                  type="text"
                  id="eduName"
                  value={eduName}
                  onChange={onChange}
                  data-key="eduName"
              />
              <br />
              <label>Qualification:</label>
              <input
                  type="text"
                  id="eduQual"
                  value={eduQual}
                  onChange={onChange}
                  data-key="eduQual"
              />
              <br />
              <label>Location:</label>
              <input
                  type="text"
                  id="eduLocation"
                  value={eduLocation}
                  onChange={onChange}
                  data-key="eduLocation"
              />
              <br />
              <label>Start Date:</label>
              <input
                  type="date"
                  id="edustartDate"
                  value={edustartDate}
                  onChange={onChange}
                  data-key="edustartDate"
              />
              <label>End Date:</label>
              <input
                  type="date"
                  id="eduendDate"
                  value={eduendDate}
                  onChange={onChange}
                  data-key="eduendDate"
              />
              <br />
              <button>Submit</button>
              </form>
            </div>
          ) : (
              <button onClick={onShow}>
              Add Education Info
              </button>
        )}
      </section>
        </div>
      </>
    );
    
  }
  