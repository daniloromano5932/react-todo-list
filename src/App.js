import './App.css';
import ToDoForm from './components/TodoForm';
import NotesArea from './components/NotesArea';

function App() {
  return (
    <div className="App">
      <ToDoForm />
      <NotesArea/>
    </div>
  );
}

export default App;
