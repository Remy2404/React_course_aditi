import Wellcome from './components/wellcome';
import { Hello } from './components/hello';
import './App.css';
import { Course } from './components/Course';
import Counter from './components/Counter';
import CounterApp from './components/CounterApp';
import Uitodo from './components/todolist/uitodo';

function App() {
  return (
    <div className="App">
      <Wellcome />
      <Hello />
      <Course />
      <CounterApp />
      <Uitodo />
    </div>
  );
}

export default App;
