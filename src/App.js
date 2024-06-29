// import logo from './logo.svg';
// import './App.css';
import React  from 'react';
// import { Prism as SyntaxHighlighter } from 'prism-react-renderer';
// import { CodeEditor } from './CodeEditor';
import CodeEditor from './CodeEditor'; 

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CodeEditor />
      </header>
    </div>
  );
}

export default App;
