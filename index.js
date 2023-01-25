const express=require('express')
const cors=require("cors")
require("./db/config")
 const users = require('./db/collection')
const products=require("./db/product");
const jwt=require('jsonwebtoken');
const jwtkey='e-com';
const app=express();
app.use(express.json());
app.use(cors());
app.post("/login",async(res,resp)=>{
   if(res.body.password && res.body.email){
   let data= await products.findOne(res.body).select('-password');
   if(data){
      jwt.sign({data},jwtkey,{expiresIn:'2h'},(err,token)=>{
         if(err){
            resp.send({result:'somthing went rong'})
         }
         resp.send({data,auth:token})
      })
   // resp.send(data)
   console.log(data)
   
   }else{
      resp.send({result:'no user found'})
   }
} else{
   resp.send({result:'no data found'})
}

})
app.post("/sign",async(res,resp)=>{
let data=new products(res.body);
let result=await data.save();
result=result.toObject();
delete result.password;
jwt.sign({result},jwtkey,{expiresIn:'2h'},(err,token)=>{
   if(err){
      resp.send({result:'somthing went rong'})
   }
   resp.send({result,auth:token})
// resp.send(result)
console.log(result);

})
})

app.post('/',async(req,resp)=>{
   let data= new users(req.body);
   let result= await data.save();
   resp.send(result)
})
app.get("/find",async(req,resp)=>{
   let data= await users.find();
   if(data.length>0){
   resp.send(data);
   }
   else{
      resp.send({data:"no result found"});
   }
})
app.delete("/delete/:id",async(req,resp)=>{
   let data=await users.deleteOne({_id:req.params.id})
   resp.send(data);
})
app.get("/finds/:id",async(req,resp)=>{
   let data= await users.findOne({_id:req.params.id})
if(data){
   resp.send(data);
}

else{
   resp.send({data:"no result found"})
}
})
  app.put("/find/:id",async(req,resp)=>{
   const result= await users.updateOne(
     {_id: req.params.id}, {$set: req.body}
   )
   resp.send(result);
 })
 app.get("/search/:key",verifyToken,async(req,resp)=>{
   let data= await users.find({
      "$or":[
        {name:{$regex:req.params.key}},
        {price:{$regex:req.params.key}},
        {category:{$regex:req.params.key}},
        {company:{$regex:req.params.key}}

      ]
   })
   resp.send(data);
 })

 function verifyToken (req,resp,next){
   let token=req.headers('authorization');
   if(token){
      token=token.split('');
      jwt.verify(token,jwtkey,(err,valid)=>{
         if(err){
   resp.status(400).send({result:"please provide valid token "});
         }else{
            next();
         }
      })
   }else{
      resp.send({result:"please add token with header"})
   }
 }
 
let server=app.listen(5001,function(){
   console.log('server is runing')
});