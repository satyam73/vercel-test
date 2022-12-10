const express = require("express");
const app = express();
const PORT = process.env.PORT || 8001;
app.get("/", (req,res)=>{
    res.json({
        "status" : 200,
        "message": "API is running succesfully!"
    });
    res.status(200).send();
})

app.listen(PORT,()=>{
    console.log(`the server is up and running on the port ${PORT}`  )
})