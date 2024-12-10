import { useState } from "react";

function Education() {
    
    const [personalInfo, setPersonalInfo] = useState({ name: "", title: "",year:"" });
    const [isEditing, setIsEditing] = useState(true);
  
    const handleSubmit = (e) => {
      e.preventDefault(); 
      setIsEditing(false);
    };
  
    const handleEdit = () => {
      setIsEditing(true);
    };
  
    return (
      <div className="ed-main">
        <h1>Education: </h1>
  
        {isEditing ? (
          <form onSubmit={handleSubmit}>
            <label>
              School Name:  <br />
              <input
                type="text"
                className="input-underline-style"
                value={personalInfo.name}
                onChange={(e) =>
                  setPersonalInfo({ ...personalInfo, name: e.target.value })
                }
              />
            </label>
            <br /> <br />
            <label>
              Title of Study: <br />
              <input
                type="text"
                className="input-underline-style"
                value={personalInfo.title}
                onChange={(e) =>
                  setPersonalInfo({ ...personalInfo, title: e.target.value })
                }
              />
            </label>
            <br /> <br />
            <label>
              Year of Completion:  <br />
              <input
                type="number"
                className="input-underline-style"
                value={personalInfo.year}
                onChange={(e) =>
                  setPersonalInfo({ ...personalInfo, year: e.target.value })
                }
              />
            </label>
            <br /> <br />
            <button type="submit">Confirm</button>
          </form>
        ) : (
          <div className="show">
            <p>School Name: {personalInfo.name}</p>
            <p>Title of Study: {personalInfo.title}</p>
            <p>Year of Completion: {personalInfo.year}</p>
            <button onClick={handleEdit}>Edit</button>
          </div>
        )}
      </div>
    );
  }
export default Education ;
