const express = require("express");

let app = express();
const port = 80;

app.use('/static', express.static('static'))

app.get("/",(req, res)=> {
res.status(200).send("This is homepage of my first app");
});
app.get("/about",(req, res)=> {
res.send("This is about of my first app");
});
app.post("/about",(req, res)=> {
res.send("This is about of my first app");
});
app.get("/this",(req, res)=> {
res.status(404).send("This is not available on my first app");
});

app.listen(port, ()=>{
console.log(`The application started successfuly on port ${port}`);
});