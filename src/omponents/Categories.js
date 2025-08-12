import React  from "react";
const Categories =({id,title})=>{
    return (
         <div key={id}> {title}</div>
    )
};
export default Categories;