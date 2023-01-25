const fs=require('fs');
// const { version } = require('os');
// sync versation ---->
// fs.writeFileSync('index.txt',"hi this is my file ")
// // fs.appendFileSync('index.txt','i want to append some content')
// // fs.renameSync('index.txt','indx.txt');
// //  const data=fs.readFileSync('indx.txt','utf-8');
// console.log(data);
// fs.unlinkSync('indx.txt');
// sync version ------->


// async version ------>
// fs.writeFile('text.txt','hi this is async file testing',(err)=>{
//     console.log("hi");
// })
// fs.readFile('text.txt','utf-8',(err,item)=>{
//     console.log(item);
// })
// fs.appendFile('text.txt',' we are writig some content in file folder , so i gave ',(err)=>{
// console.log('done')
// });
fs.unlink('sulm.txt',(err)=>{
    console.log('done');
})
// fs.rename('text.txt','sulm.txt',(err)=>{
//     console.log('done')
// })