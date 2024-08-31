import React from "react";
function Listandkey()
{
    const students = [
        {id:1,name:"abc"},
        {id:2,name:"qwe"},
        {id:3,name:"asd"},
        {id:4,name:"zxc"},
    ]
    return(
        <ul>
            {students.map((student)=>{
                return <li key={student.id.toString()}>{student.name}</li>
            })}
        </ul>
    ) 
}
export default Listandkey