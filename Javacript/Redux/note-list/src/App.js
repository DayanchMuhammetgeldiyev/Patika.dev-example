import './App.css';
import Header from './components/Header';
import İnput from './components/Input';
import Textarea from './components/Textarea';
import NoteList from './components/NoteList';

function App() {
  return (
    <div className="App">
      <Header />
      <İnput />
      <Textarea />
      <NoteList />
    </div>
  );
}

export default App;
