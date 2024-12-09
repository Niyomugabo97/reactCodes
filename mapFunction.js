import React from "react";





const ItemList=()=>{

    const items=["Apple","Bannana","Cherry","Date","Elderberry"];

    return(
    <div>
    <h1>Q 5 .map() Function</h1>
    <h2>ITEM LIST</h2>
    <ul>
       {items.map((item,index)=>(
        <li key={index}>{item}</li>

       ))} 
    </ul>
    </div>

    );
};
export default ItemList;