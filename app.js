const express=require('express')
const port=process.env.port;
const app=new express();

app.get('/',(req,res)=>{
    res.send('welcome')

})


app.listen(port,()=>{
    console.log('listinging port')
})