
const express=require("express");
const app=express();
const port=8000;
const path=require("Path");
const mongoose=require("mongoose");
 const bodyparser=require("body-parser");
app.use(express.static(path.join(__dirname,"public")));

app.use(express.urlencoded({extended:true}))
// yo ngaryo bhane name:string etc object jadaina raixa...


app.set('view engine',"hbs");
app.set('views',path.join(__dirname,"/views"));

  
app.get('/',(req,res)=>{
        res.status(200).render("index");
    })
    app.get('/contact',(req,res)=>{
    res.render("contact");
    
    })
    
app.listen(port,()=>{
    console.log("listening the port at ",port)
    
    })
    
var contactbody=new mongoose.Schema({
     first:String,
     last:String,   
      email:String,
    Subject:String,
    message:String
})

var Otherstome=mongoose.model('OTHERS-To-ME',contactbody);
//callme is a module
app.post('/local',function(req,res){
var myData=new Otherstome(req.body);
// myDATA can access callme module properties.
myData.save().then(()=>{
    // res.send("This item has been saved in the database");
    // res.render(document.body.style.backgroundColor = "red");

res.render("contactOne");
})
.catch(()=>{

    // res.status(400).send("Item was not saved to the database.");

    res.status(400).render("contactTwo");

})

})
// const hubbase=module.exports= ()=>{
//     const connectionparms={
//         useNewUrlParser:true,
//         usenifiedTopology:true,
//     }
// // object
// try{
    
// mongoose.connect("mongodb+srv://PortfolioOfRoman:romangurung123@cluster0.vz1z9uu.mongodb.net/PORTFOLIO-CONTACT?retryWrites=true&w=majority")   
// // Throuugh protfolioOfRoman:romangurung123 password is weak so generated password is good
// // through that i can access database easily
// console.log("You did it.");
// console.log("Database connected successfully.");
// }catch(error){
//     console.log(error);
//     console.log("Database connection failed.");
// }
// }
// hubbase();

// // Database
// const database = module.exports =()=>{
//   const connectionparms={
//     useNewUrlParser:true,
//     useUnifiedTopology:true,

//   }
//   try{
//     mongoose.connect('mongodb+srv://GithubRoman:QZ3glJBq5qslch6r@cluster0.vz1z9uu.mongodb.net/GithubContactssssssss?retryWrites=true&w=majority');
// // mongoose.connect('mongodb+srv://roman:JHyyXQ2Hbm4rgfk1@cluster0.vz1z9uu.mongodb.net/contactDanceRoman?retryWrites=true&w=majority')
// // // ? yesko agadi databse ko name lekhne ho.here db name is contactDance
// console.log("Database connected successfully.")  
// }
//   catch(error){
// console.log(error)
// console.log("Database connection failed");
//   }
// }
// database();
