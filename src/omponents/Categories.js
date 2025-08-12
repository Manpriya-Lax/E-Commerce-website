import React  from "react";
const Categories =({id,title, onCatClick} )=>{
    return (
         <div key={id} onClick={() => onCatClick(id)} > {title}</div>
    )
};
export default Categories;