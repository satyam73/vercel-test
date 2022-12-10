const express = require("express");
const app = express();
const PORT = process.env.PORT || 8001;


// app.use(express.json(), {extended: false})
app.get("/", (req,res)=>{
    res.json({
        "status" : 200,
        "message": "API is running succesfully!"
    });
})

app.get("/api/hello", (req,res)=>{
    res.json({
        "status" : 200,
        "message": "Hello from the API!"
    });
})

app.listen(PORT,()=>{
    console.log(`the server is up and running on the port ${PORT}`  )
})