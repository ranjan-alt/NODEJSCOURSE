const express = require("express");
const path = require("path")
const app = express();


//setup static and middleware
app.use(express.static("./public"))
// app.get("/", (req, res) => {
//   res.status(200).send("home");
// });

app.get("/about", (req,res)=>{
    res.send("this is about page")
})

app.all("*", (req,res)=>{
    res.status(404).send("resource not found")
})

app.get("/", (req,res)=>{
    res.sendFile(path.resolve(__dirname,"./index.html"))
})
app.listen(5000, () => {
  console.log("server is listing on port 5000....");
});
