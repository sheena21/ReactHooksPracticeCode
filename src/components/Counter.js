import React , {useState} from 'react' ;

function Counter(){
  const intialCount=0;
  const[count ,setCount]=useState(intialCount)

  const  incrementFive = () => {
    for(let i=0 ;i <5 ;i++)
    {
      setCount(pre=>pre+1);
    }
  }
  return(
    <div>
    Count: {count}
    <button onClick={()=>setCount(intialCount)}> Reset </button>
    <button onClick={()=> setCount(preCount => preCount+1)}> Increment</button>
    <button onClick={()=> setCount(preCount =>preCount -1)}> Decrement</button>
    <button onClick={incrementFive}>In</button>
    </div>
  );
}
export default Counter;
