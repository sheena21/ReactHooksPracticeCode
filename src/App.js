import './App.css';
import Count from './components/CountCl';
import HookCounter from './components/HookCounter';
import Counter from './components/Counter';
import CounterObject from './components/CounterObj';
import Array from './components/ArrayR';

function App() {
  return (
    <div className="App">
      <Count/>
      <h1> Next</h1>
      <HookCounter/>
      <h1> Next</h1>
      <Counter/>
      <h1> Next</h1>
      <CounterObject/>
      <h1> Next</h1>
      <Array/>
    </div>
  );
}

export default App;
