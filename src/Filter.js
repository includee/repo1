//create we have apply filter to skip digit "3" from the array and display all remaining digit
//of the array
import React from "react";
function Filter(){
    const arr = [1,2,3,4,3,5,6,3,7,6,3,4,5,6,3,4,5,3,2,2,3,3]
    const newarr = arr.filter((num)=>{
        if(num==3){
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
    export default Filter

