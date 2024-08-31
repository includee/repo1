// create react app to perform a task as asked below add array of 5 objects with properties name and
// age check if age is greater than 50 then display person name of who are greater than 50 age using 
// map function
import React from 'react'
function MapT1(){
    const images = [{name :"abc",age:50},
                    {name :"abc",age:60},
                    {name :"abc",age:40},
                    {name :"abc",age:70},
                    {name :"abc",age:20},
                    {name :"abc",age:50},
                   ]
    return(
        <ul>
            <li>
                {images.map((val)=>{
                    if(val.age >= 50){
                        return(
                            <li>
                                {val.name}
                            </li>
                        )
                    }
                })}
            </li>
        </ul>
    )
}
export default MapT1