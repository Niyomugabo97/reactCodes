import React, { useState } from "react";

const styles={
container:{
width:"300px",
margin:"50px auto",
paddind:"20px",

},
input:{

    width:"200px",
    padding:"10px ",
    margin:"10px "
},

output:{

    background:"#007bff",
    color:"white",
    
},

};

const ControlledForm=()=>{

     const [value,setValue]=useState("");
     return (
     
        <div style={styles.container}>
        <h2 style={styles.title}>Controlled form</h2>

        {/*form */}
        <form style={styles.form}>
         <label htmlFor="inputField"style={styles.label}>Enter something:</label>
         <input 
         type="text"
         id="inputField"
         value={value}
         onChange={(e)=>setValue(e.target.value)}// update state on change
         style={styles.input}
         placeholder="enter here.."
         />



        </form>
        <p style={styles.output}>You entered:{value}</p>

        </div>

     );

}

export default ControlledForm;