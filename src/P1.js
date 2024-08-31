import React from "react";
function P1(prop)
{
    return(
        <>
        {
        prop.info.map((pr)=>{
            return(<div>
                <img src ={pr.pic} />
                <h2>{pr.name}</h2>
                <h3>{pr.price}</h3>
                </div>)
        })
        }
        </>
    )
}
export default P1