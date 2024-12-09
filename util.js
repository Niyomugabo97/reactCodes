import React from "react";

export function Message(){

    return (
      <div >
       <h1># Q1</h1>
          <h2>Welcome to my app</h2>
      </div>
    );
}

export function CurrentDate(){

    const todayDate= new Date();
    return <h1>Today's Date is {todayDate.toDateString()}</h1>;

}

 


 
