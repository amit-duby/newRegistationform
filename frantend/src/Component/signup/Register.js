import React, {useState}from "react";
// import { useEffect,useNavigate } from "react";
import "./style.css";
const Register = ()=>{
const [name,setname]=useState("")
const [email,setemail]=useState("")
const [password,setpassword]=useState("")
const [repassword,setrepassword]=useState("")
const collectdata=()=>{
    console.log(name,email,password,repassword)
}
return(
    <div className="register">
        <div className="type">
       <input className="name" type="text" value={name} onChange={(e)=>setname(e.target.value)}placeholder="Enter your Name"/>
       <input className="name" type="email"value={email} onChange={(e)=>setemail(e.target.value)}placeholder="Enter your Email"/>
       <input className="name" type="Password"value={password} onChange={(e)=>setpassword(e.target.value)} placeholder="Enter your password"/>
       <input className="name" type="password" value={repassword} onChange={(e)=>setrepassword(e.target.value)} placeholder="Re-Enter password"/>
       <button className="type" type="button" onClick={collectdata} >Signup</button>
    </div>
    </div>
)
}
export default Register ;