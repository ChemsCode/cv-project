import React, {useState} from 'react';
import uniqid from 'uniqid';

function WorkExperience() {
    const [workInfo, setWorkInfo] = useState({id: uniqid(), jobTitle: "", company: "", dateWorked: "", location: "",
    description: ""});

  return (
    <div><h3>Work Experience</h3></div>
  )
}

export default WorkExperience