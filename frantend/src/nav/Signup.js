import React,{useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
function Signup(){
    const navigate=useNavigate();
    const [name,setName]=useState("")
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    useEffect(()=>{
        let auth=localStorage.getItem('result')
        if(auth){
            navigate('/login')
        }
       
    },[])
    async function call(e){
        e.preventDefault();
    const data={name,email,password};
       let result= await fetch("http://localhost:5001/sign",{
        method:'POST',
        headers:{
            // 'Accept':'application/json',
            'Content-Type':'application/json'
        },body:JSON.stringify(data)
          
       })
       result=await result.json();
       console.log(result);
      if(result){
        localStorage.setItem('result',JSON.stringify(result.result))
        localStorage.setItem('token',JSON.stringify(result.auth))
    navigate('/login');
      }
    }
    return(
       <div className="nab">
        <input className="input"  value={name} type="text" onChange={(e)=>setName(e.target.value)} placeholder="name"/>
        <input className="input"value={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="email"/>
        <input className="input"value={password} onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="password"/>
        <button className="button" onClick={call} type="submit">submit</button>
       </div>
    )
}
export default Signup;