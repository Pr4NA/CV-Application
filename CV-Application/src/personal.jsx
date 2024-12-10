import { useState } from "react";

function Personal() {
    
    const [personalInfo, setPersonalInfo] = useState({ name: "", mail: "",phone:"" });
    const [isEditing, setIsEditing] = useState(true);
  
    const handleSubmit = (e) => {
      e.preventDefault(); 
      setIsEditing(false);
    };
  
    const handleEdit = () => {
      setIsEditing(true);
    };
  
    return (
      <div className="per-main">
        <h1>Personal Info: </h1>
  
        {isEditing ? (
          <form onSubmit={handleSubmit}>
            <label>
              Name:  <br />
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
              Mail ID: <br />
              <input
                type="mail"
                className="input-underline-style"
                value={personalInfo.mail}
                onChange={(e) =>
                  setPersonalInfo({ ...personalInfo, mail: e.target.value })
                }
              />
            </label>
            <br /> <br />
            <label>
              Contact Number:  <br />
              <input
                type="tel"
                className="input-underline-style"
                value={personalInfo.phone}
                onChange={(e) =>
                  setPersonalInfo({ ...personalInfo, phone: e.target.value })
                }
              />
            </label>
            <br /> <br />
            <button type="submit">Confirm</button>
          </form>
        ) : (
          <div className="show">
            <p>Name: {personalInfo.name}</p>
            <p>Mail ID: {personalInfo.mail}</p>
            <p>Contact Number: {personalInfo.phone}</p>
            <button onClick={handleEdit}>Edit</button>
          </div>
        )}
      </div>
    );
  }
export default Personal ;