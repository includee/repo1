//create react to pass product image ,name and price as properties from one to another comp add
//an array of object with pick , name and property of two products displayed image name price of the
//products in browser using map method 
import React from "react";
import i1 from "./i1.jpeg";
import i2 from "./i2.jpg";
function Task(){
   const prod = 
   [
        {
            pic:i1,
            name:"meow",
            price : 500
        }
        ,
        {
            pic:i2,
            name:"nom nom",
            price:600
        }
    ]
    return(
        <>
        <p1 info = {prod}/>
        </>
    )
}
export default Task