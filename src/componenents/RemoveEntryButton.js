import React from 'react'

function RemoveEntryButton({storage, id, setStorage}) {

    const removeElement = (identification) => {
        const filteredArr = storage.filter(item => item.id !== identification);
        console.log(filteredArr);
        setStorage(filteredArr);
    }

  return (
    <button onClick={() => removeElement(id)}>Remove</button>
  )
}

export default RemoveEntryButton