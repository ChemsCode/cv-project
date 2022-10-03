import React, { useState } from 'react'; 
import uniqid from 'uniqid';

function Education() {
    const [educationInfo, setEducationInfo] = useState({id: uniqid(), degree: "", institution: "", dateStart: "", dateEnd: ""});

  return (
    <div>
        <h3>Education</h3>

    </div>
  );
}

export default Education