import React, {useEffect, useState} from "react";

function Register(){
    const [formData,setFormData]=useState({
        fname:"",
        sname:"",
        email:"",
        number:"",

    }); 

//     useEffect(()=>{
//         let getdata=JSON.parse(localStorage.getitem('data'))
//         console.log(getdata)
// },[])

    function handleChange(e){
        let{name,value}=e.target;

        setFormData((prev)=>({...prev,[name]:value}))
        
    }
    function handleSubmit(e){
        e.preventDefault();
        console.log(formData);

        setFormData({
            fname:'',
            sname:'',
            email:'',
            number:'',
        }) 
        localStorage.setItem('data',JSON.stringify(formdata))
    }


    return(
        <>
        <form onSubmit={handleSubmit}>
            <input 
            type="text"
            placeholder="enter your name"
            value={formData.fname}
            name="fname"
            onChange={handleChange}
            />
            <input 
            type="text"
            placeholder="enter your sname"
            value={formData.sname}
            name="sname"
            onChange={handleChange}
            />
                        <input 
            type="text"
            placeholder="enter your email"
            value={formData.email}
            name="email"
            onChange={handleChange}
            />
            <input 
            type="text"
            placeholder="enter your number"
            value={formData.mumber}
            name="number"
            onChange={handleChange}
            />
            <input type="submit" value="submit"></input>
            </form>
            {
                 formData&&(
                <div className="output">
                <h3>{formData.fname}</h3>
                <h3>{formData.sname}</h3>
                <p>{formData.email}</p> 
                 <h3>{formData.number}</h3>
                </div> )
        }
            
            </>
    )
}
export default Register