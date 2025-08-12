import React, {useState} from 'react';
import './App.css';
import Categories from './omponents/Categories';

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

const renderCategories = () =>{
  return results.map (c =>
    <Categories key={c.id} id={c.id} title={c.title}/>

  );
} 

  return (
    <>
    <header> E store </header>
     <section>
   <nav>
     {
      (results &&renderCategories())
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
