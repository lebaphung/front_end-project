import React from 'react';
import logo from './logo.svg';
import './App.css';
import MenuBar from "./components/Home";
function App() {
  return (
    <div className="App">
        <div
            style={{
              margin: '0',
              backgroundColor: 'white'
            }}
        >
            <MenuBar/>
        </div>
    </div>
  );
}

export default App;
