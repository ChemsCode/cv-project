import React from 'react';
import RemoveEntryButton from './RemoveEntryButton';

function PersonalInformationDisplay( { personalInfoStorage, setPersonalInfoStorage }) {



  return (
    <ul>
        {personalInfoStorage.map((item) => {
        return (
            <li key={item.id}>
                <div>First Name: {item.firstName}</div>
                <div>Last Name: {item.lastName}</div>
                <div>Email: {item.email}</div>
                <div>Phone Number: {item.phoneNumber}</div>
                <RemoveEntryButton storage={personalInfoStorage} 
                id={item.id}
                setStorage={setPersonalInfoStorage} />
            </li>
        )})}
    </ul>
  )
}

export default PersonalInformationDisplay