import './App.css';
import { AddPerson } from './features/addPerson/AddPerson';
import { Person } from './features/person/Person';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AddPerson />
        <Person />
      </header>
      <footer>
        <p><a target="_blank" href="https://icons8.com/icon/56304/" rel="noreferrer"> icons </a> by <a target="_blank" rel="noreferrer" href="https://icons8.com">Icons8</a></p>
      </footer>
    </div>
  );
}

export default App;
