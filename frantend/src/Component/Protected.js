import {useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Protected(props){
    const {Component}=props;
    const navigate=useNavigate();
    useEffect(()=>{
   let login=localStorage.getItem('login')
   if(!login){
    navigate('/login')
   }

    })
    return(
  <Component/>
    )
}
export default Protected;