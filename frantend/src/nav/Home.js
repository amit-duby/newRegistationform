import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
function Home(){
    const [products,setProducts]=useState([]);
    useEffect(()=>{
    getdata();
    },[])
   async function getdata(){
        let data=await fetch("http://localhost:5001/find",{
       headers:{
        authorization:JSON.parse(localStorage.getItem('token'))
       }
        })
       data= await data.json();
       setProducts(data);
//  console.log(data)
    }
  async function deletedata(id){
     let data=await fetch(`http://localhost:5001/delete/${id}`,{
        method:'DELETE',
        
     });
     data= await data.json()
     console.log(data);
     getdata();
     if(data){
        alert('data is deleted')
     }
   
   }
   async function searchdata(event){
    let key=event.target.value;
    if(key){let data= await fetch(`http://localhost:5001/search/${key}`);
    
        data=await data.json();
        if(data){
            setProducts(data);
        }
    }else{
        getdata();
    }
     
        


    
   }
    return(
        <div className="table">
            <input className="in" onChange={searchdata} type="text"placeholder="Search"></input>
            <ul>
                <li>s.no</li>
                <li>name</li>
                <li>price</li>
                <li>categary</li>
                <li>company</li>
                <li>delete</li>
                <li>update</li>

            </ul>
            {
                products.length>0 ?products.map((item,i)=>
                  
                <ul key={i}>
                    <li>{i}</li>
                    <li>{item.name}</li>
                <li>{item.price}</li>
                <li>{item.category}</li>
                <li>{item.company}</li>
                <li><button type="button" onClick={()=>deletedata(item._id)}>delete</button></li>
               <li><Link to={"/about/"+item._id}>update</Link></li>
                </ul>
                ): <h1>NO Result found thank to search this content</h1>
            }
           
        </div>
    )
}
export default Home;