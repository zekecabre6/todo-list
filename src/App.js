import React from 'react';
import './App.css';
import TodoList from './components/TodoList'; // Importa el componente TodoList

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TodoList /> {/* Agrega el componente TodoList aquí */}
      </header>
    </div>
  );
}

export default App;
