import React, { useEffect,useState} from 'react';
function UserHook(){
  const [count,setCount]=useState(0);
  useEffect( () =>{
    document.title= `Clicked ${count} time`
  })
  return(
    <div>
     <button onClick={() => setCount(count+1)}> Click {count} </button>
    </div>
  )
}
export default UserHook;
