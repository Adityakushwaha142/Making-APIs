const express = require ("express") ; 
const bodyparser = require("body-parser") ; 
const https = require("https") ; 
const app = express()  ; 
app.use(bodyparser.urlencoded({extended:true})) ; 
app.get("/" , (req, res)=>{
    
    
   
  
           
     res.sendFile(__dirname+"/index.html") ; 
       
})

app.post("/city" , (req , res)=>{
    console.log("post request recived ") ; 
    

    let  place =req.body.user ; 
      
     const url= "https://api.openweathermap.org/data/2.5/weather?q="+place+"&appid=28d02fdeb7f088e89dba84705e13ab2e&units=metric"; 
     https.get(url , (response)=>{
         console.log(response.statusCode) ; 
       response.on("data" , (data)=>{
           const weatherdata = JSON.parse(data) ; 
           const temp= weatherdata.main.temp ; 
           console.log(weatherdata) ;  
           console.log(temp) ; 
           
   res.send("<h1>the weather temp of</h1> "+place + " is "+temp+" degree celsius ") ; 
       }) 
     }) 

})
app.listen ("3434" , ()=>{

    console.log("server started on http://localhost:3434") ; 
})