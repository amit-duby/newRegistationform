import React,{useState} from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import './style.css';

function Login(){
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const navigate=useNavigate();
    useEffect(()=>{
        let auth=localStorage.getItem('result')
        if(auth){
            navigate("/home")
        }
    },[])
   async function call(){
        let data={email,password};
        // console.log(data)
     let result= await fetch("http://localhost:5001/login",{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(data)
     })
     result=await result.json();
     console.log(result.auth);
     if(result){
        localStorage.setItem("result",JSON.stringify(result.data));
        localStorage.setItem('token',JSON.stringify(result.auth))
        navigate('/home');
     }else{
        alert("no data found")
     }
//    document.getElementById('login-form').reset()
    }
    return(
        <>
       <div className="ank " id="login-form">
        <input className="input"value={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="email"/>
        <input className="input" value={password}  onChange={(e)=>setPassword(e.target.value)}type="password" placeholder="password"/>
        <button className="button" onClick={call} type="button">Login</button>
      
       <div>
        <NavLink className="navli" to="/">Forget password</NavLink>
        </div>
         </div>
        </>
    )
}
export default Login;