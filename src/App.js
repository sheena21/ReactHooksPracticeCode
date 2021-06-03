import './App.css';
import Count from './components/CountCl';
import HookCounter from './components/HookCounter';
import Counter from './components/Counter';
import CounterObject from './components/CounterObj';
import Array from './components/ArrayR';
import User from './components/UserEffectClass';
import UserHook from './components/UserEffectHook';
import DataFetch from './components/SingleDataFetch';
function App() {
  return (
    <div className="App">
    {/*
      <Count/>
      <h1> Next</h1>
      <HookCounter/>
      <h1> Next</h1>
      <Counter/>
      <h1> Next</h1>
      <CounterObject/>
      <h1> Next</h1>
      <Array/>
      <h3> UseEffect practice </h3>
      <User/>
      <h2>Next </h2>
      <UserHook/>
      */}
     <DataFetch/>
    </div>

  );
}

export default App;
