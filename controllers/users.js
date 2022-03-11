const uuidv4=require('uuid/v4')
uuidv4()

let users=[]

const getUsers=(req,res)=>{
    res.send(users)
};

const createUser=(req,res)=>{
    const user=req.body;
    users.push({user,id:uuidv4()})
    // users.push(user)
    res.send(`user with the name ${user.firstName} added to the database`)
};

const getUser=(req,res)=>{
    const {id}=req.params;
    const founduser=users.find((user)=>user.id==id);
    res.send(founduser)
};

const deleteUser=(req,res)=>{
    const {id}=req.params;
    users=users.filter((user)=>user.id!==id);
    res.send(`user with the id ${id} deleted from the database`)
}

const patchUser=(req,res)=>{
    const {id}=req.params;
    const {firstName,lastName,age}=req.params;
    const user=users.find((user)=>user.id==id)
    if (firstName)user.firstName=firstName;
    if (lastName)user.lastName=lastName;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
    if (age)user.age=age

    res.send(`user id ${id} has been updated`)
};

module.exports={getUsers,createUser,getUser,deleteUser,patchUser}