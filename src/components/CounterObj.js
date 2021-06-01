import React, { useState} from 'react';
function CounterObj(){
  const [name,setName]=useState({ firstName:'' , lastName:'' })
  return(

     <form>
      <input type="text" value={name.firstName}
       onChange={e =>setName({ ...name ,firstName: e.target.value})}/>

      <input type="text" value={name.lastName}
      onChange={e => setName({ ...name , lastName : e.target.value})}/>

      <h3>FirstName : {name.firstName}</h3>
      <h3>LastName : {name.lastName}</h3>
      <h1>{JSON.stringify(name)}</h1>
     </form>

  );
}
export default CounterObj;
