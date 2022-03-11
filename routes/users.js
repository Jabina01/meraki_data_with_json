const express=require('express');
const {createUser,getUsers,getUser,deleteUser,patchUser}=require('../controllers/users.js')
const router=express.Router();

// all routes in here are starting with /users
router.get('/',getUsers);

router.post('/getdata',createUser)

// users/2=>req.params{id:2}
router.get('/:id',getUser)

router.delete('/:id',deleteUser)

router.patch('/:id',patchUser)

module.exports=router