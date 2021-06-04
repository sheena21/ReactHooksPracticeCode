import './App.css';
import React from 'react';

import C from './conextcomponents/C';
export const UserContext = React.createContext();
export const ChannelContext = React.createContext();
function App() {
  return (
    <div className="App">
     <UserContext.Provider value={'Mahak'}>
        <ChannelContext.Provider value={'React'}>
            <C/>
        </ChannelContext.Provider>
    </UserContext.Provider>
    </div>

  );
}

export default App;
