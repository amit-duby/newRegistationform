import { Navigate, Outlet } from "react-router-dom";

function ProtectedComponent(){
    let auth=localStorage.getItem('loggin');
    return auth?<Outlet/>:<Navigate to={"/login"}/>
}
export default ProtectedComponent;