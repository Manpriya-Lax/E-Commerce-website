import React, {useState} from 'react';
import './App.css';
import Categories from './omponents/Categories';
import { fetcher } from './fetcher';
function App() {

  const[categories, setCategories]= useState([]);
  const[products, setProducts]= useState([]);

  React.useEffect(() =>{
    const fetchData = async()=> {
    const data =await fetcher("/categories");
    setCategories(data);
        }
        fetchData();

  },[] )

  const handleCatClick = id => {


    fetch("http://localhost:3001/products?catId="+ id)
    .then(Response => Response.json())
    .then(data =>{
      console.log(data);
      setProducts(data);
    })
  


    

  }

const renderCategories = () =>{
  return categories.map (c =>
    <Categories key={c.id} id={c.id} title={c.title} onCatClick={()=> handleCatClick(c.id)}/>

  );
}

const renderProducts = ()=> {
  return products.map(p => 
    <div>{p.title}</div>
  )
}

  return (
    <>
    <header> E store </header>
     <section>
   <nav>
     {
      categories && renderCategories()
     }
     </nav>
     <h1 >products  </h1>
     <p></p>
     {products && renderProducts() }
    
  </section>
  <footer>
    footer
  </footer>
    </>
  );
}

export default App;
