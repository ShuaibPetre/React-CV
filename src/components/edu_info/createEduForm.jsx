import { FaBusinessTime } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
import { FaChevronUp } from "react-icons/fa";

export default function EduInfoForm({onChange, eduName, eduQual, eduLocation, edustartDate, eduendDate, 
  onSubmit, isActive, onShow, onEduReset, onRemove, formid, openForm, handleOpenForm}) {
    return (
      <>
      <div className="eduInfo">
        <section className="panel">
          {isActive ? (
              <div className="formdiv">
              <form 
              onSubmit={onSubmit}
              id={formid}
              >
              <label>Institution Name:</label>
              <input
                  type="text"
                  id="eduName"
                  value={eduName}
                  onChange={onChange}
                  data-key="eduName"
                  required
              />
              <br />
              <label>Qualification:</label>
              <input
                  type="text"
                  id="eduQual"
                  value={eduQual}
                  onChange={onChange}
                  data-key="eduQual"
                  required
              />
              <br />
              <label>Location:</label>
              <input
                  type="text"
                  id="eduLocation"
                  value={eduLocation}
                  onChange={onChange}
                  data-key="eduLocation"
                  required
              />
              <br />
              <label>Start Date:</label>
              <input
                  type="date"
                  id="edustartDate"
                  value={edustartDate}
                  onChange={onChange}
                  data-key="edustartDate"
                  required
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
              { (onRemove !== undefined) ? <button onClick={onRemove} data-key={formid}>Remove</button> : (null)}
              <button onClick={onEduReset}>Cancel</button>
              </form>
            </div>
          ) : (
              <button onClick={onShow}>
              + Education
              </button>
        )}
      </section>
        </div>
      </>
    );
    
  }
  