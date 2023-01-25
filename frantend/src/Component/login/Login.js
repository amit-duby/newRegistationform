import React,{useState,useEffect} from "react";
import { useNavigate } from "react-router-dom";

import "./Login.css"
function Login() {
  
  const navigate=useNavigate();
  useEffect(()=>{
    let login=localStorage.getItem('login');
    if(login){
        navigate('/about')
    }
  })
const [email,setemail]=useState("");
const [password,setpassword]=useState("");
const [repassword,setrepassword]=useState("");
const collectdata=()=>{
    console.log(email,password,repassword)
localStorage.setItem('login',true)
    navigate('/about')
}
const updata=(e)=>{
  setemail(e.target.value )}  
return (
        <div className="login">
           <input className="input" type="email" value={email} onChange={updata} placeholder="Enter your Email"/>
           <input className="input" type="password"value={password} onChange={(e)=>setpassword(e.target.value)} placeholder="Enter your password"/>
           <input className="input" type="password"value={repassword} onChange={(e)=>setrepassword(e.target.value)} placeholder="Enter your password"/>
           
           <button className="button"onClick={collectdata} type="button">Login</button>
           {/* <button onClick={login}>login</button> */}
        </div>
    )
}
export default Login;