// import { json } from "express";
import React , { useState } from "react";
function Apicall(){
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [number,setNumber]=useState("");
    const call=()=>{
        // console.log({name,email,password,number});
        let data={name,email,password,number};
        fetch("http://localhost:3000/comments",{

            method:"POST",
            headers:{
               'Accept':'application/json',
               'Content-Type':'application/json'
            },
            body:JSON.stringify(data)
        }).then((resp)=>{
            resp.json().then((result)=>{
                console.log("result",result);
            })
        })

    }
    return(
        <div>
            <input type="text"value={name} onChange={(e)=>setName(e.target.value)} placeholder="name"/>
            <br></br>
            <input type="email"value={email} onChange={(e)=>setEmail(e.target.value)}placeholder="emai"/>
            <br></br>
            <input type="password"value={password} onChange={(e)=>setPassword(e.target.value)}placeholder="password"/>
            <br></br>
            <input type="text"value={number} onChange={(e)=>setNumber(e.target.value)}placeholder="number"/>
            <br></br>
            <button type="submit"onClick={call}>submit</button>
        </div>
    )
}
export default Apicall;