import React, {useState} from 'react'


function List({list}) {
    const [tasks, setTasks] = useState(list)

     const deleteItemByIndex = indexToDelete => {
    setTasks(currentItems => {
      // Return a new array that excludes the item at the specified index
      return currentItems.filter((item, index) => index !== indexToDelete);
    });
  };
    return (
        <ul>
            {
                tasks.map((item, index)=>
                    <li key={index}>
                        {item}
                        <button onClick={()=>deleteItemByIndex(index)}>X</button>
                    </li> 
                    )
            }
        </ul>
            )
    }

export default List