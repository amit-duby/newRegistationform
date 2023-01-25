 import React,{useState} from "react";
 function Product(){
    const [name,setName]=useState('')
    const [price,setPrice]=useState('')
    const [category,setCategory]=useState('')
    const [company,setCompany]=useState('')
    const [error,setError]=useState(false);
  
    const producthandle=async()=>{
      if(!name||!price || ! category || !company){
        setError(true)
        return false;
    }
    //   let data=;
    //   console.log(data)
      let userId= JSON.parse(localStorage.getItem('result'))._id;
      
      let user= await fetch("http://localhost:5001",{
        method:'post',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify({name,price,category,company,userId})
      }); user= await user.json();
      console.log(user);
    }
    return(
        <div className="ank">
            <input className="input" type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder=" Product Name"></input>
            {error&& !name && <span className="invaild">please fill tha correct name</span>}
            <input className="input" type="text" value={price} onChange={(e)=>setPrice(e.target.value)} placeholder="Product Price "></input>
            {error&& !price && <span className="invaild">correct price</span>}
            <input className="input" type="text"value={category} onChange={(e)=>setCategory(e.target.value)} placeholder="Product Categary"></input>
            {error&& !category && <span className="invaild">correct categary</span>}
            <input className="input" type="text"value={company} onChange={(e)=>setCompany(e.target.value)} placeholder="Product Company"></input>
            {error&& !company && <span className="invaild">correct company</span>}
            <button className="button" onClick={producthandle}  type="button">Add a product</button>
        </div>
    )
}
export default Product;