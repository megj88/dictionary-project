
import React from 'react';
import './App.css';
import SearchEngine from "./SearchEngine"

function App() {
  return (
    <div className="App">
      <div className="container">
      <header className="App-header">
      <h1>Dictionary App</h1>
      <SearchEngine />
     </header>
     <footer>
      <small>Coded by <a href="https://github.com/megj88/dictionary-project" target="_blank" rel="noopener noreferrer">Megan Jones</a></small>
     </footer>
    </div>
    </div>
  );
}

export default App;
