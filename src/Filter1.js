    //write react js code to filter out the numbers greater than 6 using filter function import React from "react";
function Filter1(){
    const arr = [1,2,3,4,3,5,6,3,7,6,3,4,5,6,3,4,5,3,2,2,3,3]
    const newarr = arr.filter((num)=>{
        if(num >= 6){
            return false
        }
        else{
            return true
        }
    })
    var arr1 = arr.join(",")
    var arr2 = newarr.join(",")
    return(
        <div>
            <h2>{arr1}</h2>
            <h2>{arr2}</h2>
        </div>
    )
    }
    export default Filter1