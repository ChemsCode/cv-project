import React, {useState} from 'react';
import uniqid from 'uniqid';
import PersonalInformationDisplay from './PersonalInformationDisplay';
import PersonalInformationForm from './PersonalInformationForm';

function PersonalInformation() {
    const [personalInfo, setPersonalInfo] = useState({id: uniqid(), firstName: "", lastName: "", email: "", phoneNumber: ""});
    const [personalInfoStorage, setPersonalInfoStorage] =  useState([]);

  return (
    <div> 
        <h3>Personal Information</h3>

        <PersonalInformationForm personalInfo={personalInfo} 
        setPersonalInfo={setPersonalInfo}
        personalInfoStorage={personalInfoStorage}
        setPersonalInfoStorage={setPersonalInfoStorage}/>

        <br/>

        <PersonalInformationDisplay personalInfoStorage={personalInfoStorage}
        setPersonalInfoStorage={setPersonalInfoStorage}/>

    </div>
  )
}

export default PersonalInformation