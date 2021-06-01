import React, { useState} from 'react';
function ArrayR(){
  const [item,setItem] = useState([])
  const addItem = () =>{
    setItem([...item ,{
      id:item.length,
      value:Math.floor(Math.random() * 10)+1
    }])
  }
  return (
    <div>
    <button onClick={addItem}> Add Item</button>
    <ul>
      {item.map(items =>(
        <li key={items.id}>{items.value}</li>
      ))}
      </ul>
    </div>
  );

}
export default ArrayR;
