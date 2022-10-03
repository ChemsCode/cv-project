import React, {useState} from 'react'

function EditPersonalInfo({setPersonalInfoStorage,id}) {




    const editElement = (identification, newValue) => {
        setPersonalInfoStorage(prev => prev.map(item => item.id === identification? newValue: item));
      }


  return (
    <div>
    <button>Edit</button>
    </div>
  )
}

export default EditPersonalInfo