import React, {useState, useEffect} from 'react';
import uniqid from 'uniqid';
import PersonalInformationDisplay from './PersonalInformationDisplay';
import PersonalInformationForm from './PersonalInformationForm';

function PersonalInformation() {
    const [personalInfo, setPersonalInfo] = useState({id: uniqid(), firstName: "", lastName: "", email: "", phoneNumber: ""});
    const [personalInfoStorage, setPersonalInfoStorage] =  useState([]);

    useEffect(() => {
        setPersonalInfo({...personalInfo, id: uniqid()})
        console.log(`Unique id changed to ${personalInfo.id}`)
    },[personalInfoStorage])

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