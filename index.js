const express=require('express')
const bodyParser=require('body-parser')
const userRoutes=require('./routes/users.js')
const app =express();

const PORT =4000;

app.use(bodyParser.json());

var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use('/users',userRoutes);

app.get('/',(req,res)=>{
    res.send("hellow from home page");
});
app.listen(PORT,(req,res)=>{
    console.log(`running on port no:${PORT}`);
})
