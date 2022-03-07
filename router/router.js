const express=require('express');
const router=express.Router();

const {addUser, getUsers, getUserById, editUser, deleteUser}=require('../controller/user-controller.js');

router.get('/', getUsers);
router.post('/add', addUser);
router.get('/:id', getUserById);
router.put('/:id', editUser);
router.delete('/:id', deleteUser);

module.exports=router;













// const express=require('express');
// const router=express.Router();
// router.get('/', (req, res)=>{
//     res.send("jitu kumar");
//     })

//     router.post('/jitu', (req, res)=>{
//         let name=req.body.name;
//         res.send("jikkkkkkuuuu"+name);
//     })
// module.exports=router;