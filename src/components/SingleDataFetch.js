import React , {useState , useEffect} from 'react';
import axios from 'axios';
function SingleFetch(){
    const[id,setId]=useState(1);
    const[post,setPost]=useState({});
    const[idFromButton,setIdFromButton]=useState(1);
    useEffect(()=>{
      axios
      .get(`https://jsonplaceholder.typicode.com/posts/${idFromButton}`)
      .then(response =>
         {console.log(response)
          setPost(response.data)}
       )
       .catch(error => {console.log(error)}
     )
   },[idFromButton])
  const   handleClick= ()=>{
     setIdFromButton(id)
   }
  return(
    <div>
     <input type="text" value={id} onChange={e=>setId(e.target.value)}/>
     <button type="buton" onClick={handleClick}> Fetch Post</button>
     <p>{post.title}</p>
    </div>
  );

}
export default SingleFetch;
