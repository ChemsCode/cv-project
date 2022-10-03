import React, {useRef} from 'react';

function PersonalInformationForm({personalInfo, setPersonalInfo, personalInfoStorage, setPersonalInfoStorage}) {

    const handleSubmit = event => {
        console.log("handle submit ran");
        event.preventDefault();

        console.log(personalInfo)

        setPersonalInfoStorage([...personalInfoStorage, personalInfo])

        console.log(personalInfoStorage);
    }

  return (
    <form onSubmit={handleSubmit}>
        <label htmlFor="fname">First name:</label>
        <input type="text" id="fname" name="fname" 
        onChange={e => setPersonalInfo({...personalInfo, firstName: e.target.value})}/>
        <label htmlFor="lname">Last name:</label>
        <input type="text" id="lname" name="lname" 
        onChange={e => setPersonalInfo({...personalInfo, lastName: e.target.value})}/>
        <label htmlFor="email">Email:</label>
        <input type="text" id="email" name="email" 
        onChange={e => setPersonalInfo({...personalInfo, email: e.target.value})}/>
        <label htmlFor="phone">Phone Number:</label>
        <input type="text" id="phone" name="phone" 
        onChange={e => setPersonalInfo({...personalInfo, phoneNumber: e.target.value})}/>
        <input type="submit" value="Submit"></input>
    </form>
  )
}

export default PersonalInformationForm