// import logo from './logo.svg';
import React, { useState } from 'react';

import './App.css';

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <MyInfoComponent/>
      </header>
    </div>
  );
}

function MyInfoComponent() {
  const [name,setNam] = useState("John")
  const [favoriteColor,setFavoriteColor] = useState("orange")
  const favoriteMovies = ['blade','titanic','airbud']
  const [count,setCount] = useState(0)
  return (
    <div>
      <p>My name is {name}.</p>
      <p style={{backgroundColor:favoriteColor}}>My favorite color is {favoriteColor}.</p>
      <p>My favorite movies are {favoriteMovies.map((ele) => {return <li>{ele}</li>})}</p>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Increase Age</button>
      <input type="text" onChange={(e) => {
        const val = e.target.value
        setNam(val)
      }}/>
      <input type="text" onChange={(e) => {
        let val = e.target.value
        setFavoriteColor(val)
      }}/>
      <input type="text" placeholder='blank' onChange={(e) => {
        let val = e.target.value
        setNam(val)
      }}/>
    </div>
    
  )
}

export default App;
