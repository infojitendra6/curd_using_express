var mongoose=require('mongoose')
const connection=async()=>{
const URL="mongodb://localhost:27017/mydb";
   try{
       
   await mongoose.connect(URL, {useNewUrlParser:true})
    //await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false });
  console.log("database is connected");
}
   catch(error){
  console.log(error);
   }
}

module.exports=connection

