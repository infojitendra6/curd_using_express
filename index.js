var express=require('express');
 var bodyParser=require('body-parser');
 var dotenv=require('dotenv');
 var connection=require('./database/db.js');
  //var routers=require('./router/router.js');

  const {addUser, getUsers, getUserById, editUser, deleteUser}=require('./controller/user-controller.js');

var app=express();
 dotenv.config();
 app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const PORT=8000;
connection();
    
// app.get('/', routers);
app.get('/', getUsers)
app.post('/add', addUser)
app.get('/:id', getUserById);
app.put('/:id', editUser);
app.delete('/:id', deleteUser);



app.listen(PORT, ()=>{
    console.log(`server is running on ${PORT}`)
});


