import React ,{useContext} from 'react';
import F from '../conextcomponents/F';
import {UserContext, ChannelContext} from '../App';
function E()
{
  const user=useContext(UserContext);
  const channel=useContext(ChannelContext);
  return(
    <div>

    {user} -{channel}
    </div>
  );
}
export default E;
