import React,{useEffect, useState} from "react";
import { useNavigate, useParams } from "react-router-dom";
 function About (){
    const [name,setname]=useState("");
    const [price,setprice]=useState("")
    const [category,setcategory]=useState("");
    const [company,setcompany]=useState("");
    const navigate=useNavigate();
const params=useParams();
    useEffect(()=>{
        getdata();
       
    },[])
  const getdata=async()=>{
     console.log(params)
    let result= await fetch(`http://localhost:5001/finds/${params.id}`)
    result=await result.json();
    // console.log(result)
    setname(result.name);
    setprice(result.price);
    setcategory(result.category);
    setcompany(result.company);
  }
    
    const updatedata=async()=>{
  console.log(name,price,category,company);
  let result= await fetch(`http://localhost:5001/find/${params.id}`,{
    method:'PUT',
    headers:{
        'Content-Type':'application/json'
    },
    body:JSON.stringify({name,price,category,company})
  })
  result= await result.json();
  console.log(result);
  navigate("/home");
    }
    return(
        <>
       <input className="input" type="text" value={name} placeholder=" enter name of product" onChange={(e)=>setname(e.target.value)}></input>
       <input className="input" type="text" value={price} placeholder="enter price of product" onChange={(e)=>setprice(e.target.value)}></input>
       <input className="input" type="text" value={category} placeholder='enter category of product' onChange={(e)=>setcategory(e.target.value)}></input>
       <input className="input" type="text" value={company} placeholder='enter company of product' onChange={(e)=>setcompany(e.target.value)}></input>
       <button className="button" type="button" onClick={updatedata}>update</button>
       </>
    )
}
export default About;