import React from "react";
import { Navigate, Outlet } from "react-router-dom";
function Private(){
let auth=localStorage.getItem('result');
 return auth?<Outlet/>:<Navigate to={"/sign"}/>
}
export default Private;