import logo from './logo.svg';
import React, {useState} from 'react';
import './App.css';

function App() {

  const[results, setResults]= useState([]);

  React.useEffect(() =>{
    fetch("http://localhost:3001/categories")
    .then(Response => Response.json())
    .then(data =>{
      console.log(data);
      setResults(data);
    })
  

  },[] )



  return (
    <>
    <header> E store </header>
     <section>
   <nav>
     {
      results.map(d=> (
        <div key={d.id}>{d.title}</div>
      ))


     }
     </nav>
     <article>
      Main 
     </article>
  </section>
  <footer>
    footer
  </footer>
    </>
  );
}

export default App;
