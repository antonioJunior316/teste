const express = require("express")

const app = express()

app.get("/index",(request,response)=>{
    response.send({"result":"sucesso"})
})

app.listen(8000,()=>console.log("running server"))