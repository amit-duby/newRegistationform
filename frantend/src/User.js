import React from "react";
import {} from 'react-router-dom'
const withRouter=(User)=>{
function withRouteruser(props){
    console.log(props.match.params.id);
    return(
        <User>
        <div>
            <p>hi this is user page</p>
        </div>
        </User>
    )
}
return withRouter ;
}