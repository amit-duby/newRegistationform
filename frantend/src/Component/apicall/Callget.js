 import React , { useEffect ,useState} from "react"

 
 function Callget(){
    const [user,setUser]=useState([]);
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [mobail,setMobail]=useState("");
    const [userId,setUserId]=useState(null);
    useEffect(()=>{
        // fetch("http://localhost:3000/comments").then((result)=>{
        //     result.json().then((resp)=>{
        //         setUser(resp)
        //     })
        // })
         getdata();
    },[])
//   console.log(user)
   function getdata(){
     fetch("http://localhost:3000/comments").then((result)=>{
            result.json().then((resp)=>{
                setUser(resp)
                 
                setName(resp[0].name)
                setEmail(resp[0].email)
                setPassword(resp[0].password)
                setMobail(resp[0].mobail)
                setUserId(resp[0].id)
            })
        })
   }

   function selectuser(id){
    let item=user[id-1];
    setName(item.name);
    setEmail(item.email);
    setPassword(item.password)
    setMobail(item.mobail)
    setUserId(item.id)
    // console.log(user[id-1])

   }
   function deleteuser(id){
    fetch(`http://localhost:3000/comments/${id}`,{
      method:'DELETE',
     
    }).then((result)=>{
result.json().then((resp)=>{
    console.log(resp)
getdata()
})
    })
    
   }
   function updatevalue(){
    let data={name,email,password,mobail,userId};
    console.log('data',data)
    fetch(`http://localhost:3000/comments/${userId}`,{
    method:'PUT',
    headers:{
     'Accept':'application/json',
     'Content-Type':'application/json'
    },
    body:JSON.stringify(data)
    } ).then((result)=>{
        result.json().then((resp)=>{
            console.log(resp)
            getdata()
        })
    })
    
   
   }
return(
    <>
    <table border="1">
        <tbody>
            <tr>
                <th>id</th>
                <th>name</th>
                <th>email</th>
                <th>mobail</th>
                <th>password</th>
                <th>delete</th>
                <th>update</th>
            </tr>
            {
                user.map((item,i)=>
                <tr key={i}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.mobail}</td>
                    <td>{item.password}</td>
                    
                        <td><button onClick={()=>deleteuser(item.id)}>delete</button></td>
                        <td><button onClick={()=>selectuser(item.id)}>update</button></td>
                    
                </tr>
               
                )
            }
        </tbody>
    </table>
    <input type="text" value={name} onChange={(e)=>setName(e.target.value)} ></input><br></br>
    <input type="text"  value={email} onChange={(e)=>setEmail(e.target.value)}></input><br></br>
    <input type="text"  value={password} onChange={(e)=>setPassword(e.target.value)}></input><br></br>
    <input type="text"  value={mobail} onChange={(e)=>setMobail(e.target.value)}></input><br></br>
    <button onClick={updatevalue} >update data</button>
    </>
)
}
export default Callget;