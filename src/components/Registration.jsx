import { useState } from "react";
import React from "react";
function Registration(){
const[fname,setFname]=useState();
const[sname,setSname]=useState();
const[mnum,setMnum]=useState();
const[email,setEmail]=useState();

function handleSubmit(e){
    e.preventDefault();
    console.log(fname,sname,mnum,email);

    setFname('')
    setSname('')
    setMnum('')
    setEmail('')
    
    

    

}

return(
    <>
    <form onSubmit={handleSubmit}>
    <input type="text" placeholder="Name" value={fname} onChange={(e)=> setFname(e.target.value)}/>
    <input type="text" placeholder="Surname" value={sname} onChange={(e)=> setSname(e.target.value)}/>
    <input type="text" placeholder="Mobile" value={mnum} onChange={(e)=> setMnum(e.target.value)}/>
    <input type="text" placeholder="Email" value={email} onChange={(e)=> setEmail(e.target.value)}/>
    <input type="submit" value="submit"/>
    </form>
    
    </>

)



}
export default Registration