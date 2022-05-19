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
    </div>
  );
}

export default App;
