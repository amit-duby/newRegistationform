// import { useEffect } from 'react';
import { useNavigate,NavLink} from 'react-router-dom';
// import './nav.css';
import './style.css'
function Header(){
    const navigate=useNavigate();
    const auth=localStorage.getItem('result');
    const logout=()=>{
        localStorage.clear();
        navigate('/sign');
    }
   
    return(
        <div >
            {auth?<ul className="navlink">
       <li> <NavLink className="nav" to="/home">Home</NavLink></li>
        <li><NavLink className="nav" to="/about">About</NavLink></li>
        <li><NavLink className="nav" to="/product">Product</NavLink></li>
       <li><NavLink className="nav" onClick={logout} to="/sign">Logout</NavLink></li>
          
      </ul>  
      :
      <div>
      <ul className='navlink css'>
        <li><NavLink className="nav" to="/sign">Signup</NavLink></li>
               <li><NavLink className="nav" to="/login">Login</NavLink></li>
      </ul>
      </div> 
}
    
</div>

    )
}
export default Header;