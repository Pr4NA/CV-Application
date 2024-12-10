import { useState } from "react";

function Exp() {
    
    const [personalInfo, setPersonalInfo] = useState({ company: "", pos: "",resp:"" });
    const [isEditing, setIsEditing] = useState(true);
  
    const handleSubmit = (e) => {
      e.preventDefault(); 
      setIsEditing(false);
    };
  
    const handleEdit = () => {
      setIsEditing(true);
    };
  
    return (
      <div className="exp-main">
        <h1>Experience: </h1>
  
        {isEditing ? (
          <form onSubmit={handleSubmit}>
            <label>
              Company Name:  <br />
              <input
                type="text"
                className="input-underline-style"
                value={personalInfo.company}
                onChange={(e) =>
                  setPersonalInfo({ ...personalInfo, company: e.target.value })
                }
              />
            </label>
            <br /> <br />
            <label>
              Position Title: <br />
              <input
                type="text"
                className="input-underline-style"
                value={personalInfo.pos}
                onChange={(e) =>
                  setPersonalInfo({ ...personalInfo, pos: e.target.value })
                }
              />
            </label>
            <br /> <br />
            <label>
              Main Responsibility of your job:  <br />
              <input
                type="text"
                className="input-underline-style"
                value={personalInfo.resp}
                onChange={(e) =>
                  setPersonalInfo({ ...personalInfo, resp: e.target.value })
                }
              />
            </label>
            <br /> <br />
            <button type="submit">Confirm</button>
          </form>
        ) : (
          <div className="show">
            <p>Name of the Company: {personalInfo.company}</p>
            <p>Position Title: {personalInfo.pos}</p>
            <p>Main Responsibility: {personalInfo.resp}</p>
            <button onClick={handleEdit}>Edit</button>
          </div>
        )}
      </div>
    );
  }
export default Exp ;
